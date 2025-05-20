import { useEffect, useState } from "react";
import { requestArticles } from "../utils/axios";
import ArticleCard from "./ArticleCard"

function ArticleList() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        requestArticles().then((articles) => {
            setArticles(articles);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) return <p>Loading articles...</p>;

    return (
        <>
            <h1 className="articles-header">Articles</h1>
            <ul className="article-list">
                {articles.map((article) => (
                    <ArticleCard key={article.article_id} article={article} />
                ))}
            </ul>
        </>
    );
}

export default ArticleList