import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { requestArticleById } from "../utils/axios"
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import { sendNewVote } from "../utils/axios";


function ArticlePage(){

const { article_id } = useParams();
const [article, setArticle] = useState(null);
const [viewComments, setViewComments] = useState(false)
const [errorMsg, setErrorMsg] = useState(null)
const [showCommentForm, setShowCommentForm] = useState(false)
const [comments, setComments] = useState([])

function handleViewClick(){
    setViewComments(!viewComments)
}
function toggleForm(){
    setShowCommentForm(!showCommentForm)
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
        <section className="article-page-actions">
            <p className="article-page-vote-count">{article.votes} votes</p>
            <button className="article-page-vote-button" onClick={() => handleVoteClick(1)}>+</button>
            <button className="article-page-vote-button" onClick={() => handleVoteClick(-1)}>-</button>
            <button className="article-page-comment-button" onClick={toggleForm}>Add Comment</button>
        </section>
            {showCommentForm && <CommentForm article_id={article_id} errorMsg={errorMsg} setErrorMsg={setErrorMsg} comments={comments} setComments={setComments} onClose={toggleForm}/>}
            {errorMsg && <section className="error-message"><p>Error: {errorMsg}</p><button className="error-close" onClick={()=>setErrorMsg(null)}>Close</button></section>}
        <button className="view-comments-button" onClick={handleViewClick}>{viewComments ? "Hide Comments" : "Show Comments"}</button>
        {viewComments ? <CommentList article_id={article.article_id} comments={comments} setComments={setComments}/> : null}
        </div>
        </>
    )
    }


export default ArticlePage