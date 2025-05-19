
function ArticleCard({ article }) {
    return (
        <>
        <div className="article-card">
        <img className="article-card-img" src={article.article_img_url} alt={article.title} />
        <h1 className="article-card-title">{article.title}</h1>
        <p className="article-card-author">{article.author}</p>
        <p className="article-card-topic">{article.topic}</p>
        </div>
        </>
    )
}

export default ArticleCard