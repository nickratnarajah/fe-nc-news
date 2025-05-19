import { useNavigate } from "react-router-dom"

function ActionList(){

    const navigate = useNavigate()
    
    return (
        <>
        <button className="view-articles-button" onClick={() => navigate("/articles")}>View Articles</button>
        <button className="post-article-button">Post New Article</button>
        <button className="find-users-button">Find a User</button>
        </>
    )
}

export default ActionList