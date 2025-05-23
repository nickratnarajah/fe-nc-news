import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import ArticleCard from "./ArticleCard"
import ArticleSearchBox from "./ArticleSearchBox";

function ArticleList() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [topic, setTopic] = useState("")
    const [sort, setSort] = useState("")
    const [order, setOrder] = useState("")
    const [searchParams, setSearchParams] = useSearchParams()
    const currentPage = Number(searchParams.get("p")) || 1

    const handleDownClick = () => {
        const newPage = currentPage > 1 ? currentPage - 1 : 1;
  searchParams.set("p", newPage);
  setSearchParams(searchParams)
    }
    const handleUpClick = () => {
        const newPage = currentPage + 1;
        searchParams.set("p", newPage);
        setSearchParams(searchParams)    }
 

    return (
        <>
            <h1 className="articles-header">Articles</h1>
            <ArticleSearchBox setTopic={setTopic} setArticles={setArticles} setIsLoading={setIsLoading} setSort={setSort} setOrder={setOrder} page={currentPage} searchParams={searchParams} setSearchParams={setSearchParams} />
            {isLoading ? (<p>Loading articles...</p>) :
                (<ul className="article-list">
                {articles.map((article) => (
                    <ArticleCard key={article.article_id} article={article} />
                ))}
            </ul>
        )}
        <button onClick={handleDownClick}>&lt;</button>
        <button onClick={handleUpClick}>&gt;</button>
        <p>Page: {currentPage}</p>
        </>
    );
}

export default ArticleList