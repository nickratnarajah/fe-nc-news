import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard"
import ArticleSearchBox from "./ArticleSearchBox";

function ArticleList() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [topic, setTopic] = useState("")

 

    return (
        <>
            <h1 className="articles-header">Articles</h1>
            <ArticleSearchBox setTopic={setTopic} setArticles={setArticles} setIsLoading={setIsLoading} />
            {isLoading ? (<p>Loading articles...</p>) :
                (<ul className="article-list">
                {articles.map((article) => (
                    <ArticleCard key={article.article_id} article={article} />
                ))}
            </ul>
        )}
        </>
    );
}

export default ArticleList