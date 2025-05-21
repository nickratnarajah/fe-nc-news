import { useContext } from "react";
import { PageContext } from "./UserContext";
import ArticleSeachBox from "./ArticleSearchBox"
import ArticleList from "./ArticleList";

function ArticlesPage() {
//change page context to articles to display the articles header, then
    return (
        <>
        <ArticleSeachBox />
        <ArticleList />
        </>
    )
}


export default ArticlesPage