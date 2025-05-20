import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { requestArticleById } from "../utils/axios"
import CommentList from "./CommentList";
import { sendNewVote } from "../utils/axios";


function ArticlePage(){

const { article_id } = useParams();
const [article, setArticle] = useState(null);
const [viewComments, setViewComments] = useState(false)
const [errorMsg, setErrorMsg] = useState(null)

function handleViewClick(){
    setViewComments(!viewComments)
}

function handleVoteClick(newVote){
    setErrorMsg(null)
    sendNewVote(newVote, article_id)
    .then((article) => {
        setArticle(article)
    })
    .catch((error) => {
        console.error(error)
        setErrorMsg(error.response.data.msg)
    })
    }



  useEffect(() => {
        requestArticleById(article_id)
        .then((article) => {
            setArticle(article)
        })
        .catch((error) => {
            console.error(error)
        })
    }, [article_id])
    if (!article) return <p>Loading article . . .</p>

    return (
        <>
        <div className="article-page-wrapper">
        <h1 className="article-page-title">{article.title}</h1>
        <h2 className="article-page-details">Author: {article.author}</h2>
        <img className="article-page-img" src={article.article_img_url} alt={article.title} />
        <p className="article-page-body">{article.body}</p>
        <section className="article-page-votes">
            <p>{article.votes} votes</p>
            <button className="article-page-vote-button" onClick={() => handleVoteClick(1)}>+</button>
            <button className="article-page-vote-button" onClick={() => handleVoteClick(-1)}>-</button>
        </section>
            {errorMsg && <p className="error-message">Error: {errorMsg}</p>}
        <button className="view-comments-button" onClick={handleViewClick}>{viewComments ? "Hide Comments" : "Show Comments"}</button>
        {viewComments ? <CommentList article_id={article.article_id}/> : null}
        </div>
        </>
    )
    }
    //Format article page to be in column with padding


export default ArticlePage