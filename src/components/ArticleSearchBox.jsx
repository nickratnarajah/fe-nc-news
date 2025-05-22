import { useSearchParams } from "react-router-dom"
import { useEffect } from "react"
import { requestArticles } from "../utils/axios";


function ArticleSearchBox({ setTopic, setArticles, setIsLoading }) {
    const [searchParams] = useSearchParams()
    const topicParam = searchParams.get("topic")
    console.log(searchParams)

    useEffect(() => {
        setIsLoading(true)
        setTopic(topicParam || "")
        requestArticles(topicParam || "")
          .then((articles) => {
                setArticles(articles)
                setIsLoading(false)
            })
            .catch(() => {
                setArticles([])
                setIsLoading(false)
            })
        }, [topicParam, setArticles, setIsLoading, setTopic])
    

    return (
        <>
            <form className="article-search-box">
                {/* <label htmlFor="search-by-name">Search for Article</label>
                <input type="text" id="search-by-name" name="search-by-name"/>
                <button type="submit">Search</button> */}
                <label htmlFor="filter-by-topic">Filter by Topic</label>
                <input type="text" id="filter-by-topic" name="topic"/>
                <label htmlFor="sort-by">Sort By</label>
                <select id="sort-by" name="sort-by" size="6">
                    <option>articleID</option>
                    <option>title</option> 
                    <option>topic</option>
                    <option>author</option>
                    <option>created_at</option>
                    <option>votes</option>
                    <option>comment_count</option>
                </select>
                <label htmlFor="order-by">Order By</label>
                <select id="order-by" name="order-by" size="2">
                    <option>ascending</option>
                    <option>descending</option>
                </select>
                <button>Go</button>
            </form>
        </>
    )
}

export default ArticleSearchBox