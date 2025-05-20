import { useNavigate } from "react-router-dom"

function ArticleCard({ article }) {

    const navigate = useNavigate()

    return (
        <>
        <section className="article-card" onClick={() => navigate(`/articles/${article.article_id}`)}>
        <img className="article-card-img" src={article.article_img_url} alt={article.title} />
        <h1 className="article-card-title">{article.title}</h1>
        <p className="article-card-author">{article.author}</p>
        <p className="article-card-topic">{article.topic}</p>
        </section>
        </>
    )
}

export default ArticleCard