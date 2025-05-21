import { useContext } from "react";
import ActionList from "./ActionList";

import { PageContext } from "./UserContext";
import ArticlesPage from "./ArticlesPage";

function Display() {
    const page = useContext(PageContext);

    return (
        <>
        {page === "main" ? (<ActionList />) : null}
        <ArticlesPage />
        </>
    )
}

export default Display