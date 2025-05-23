import { useNavigate } from "react-router-dom"
import { useContext } from "react";
import { UserContext } from "./UserContext";


function ActionList(){

    const { user, setUser } = useContext(UserContext)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const username = form.elements.username.value
        setUser(username)
        console.log(user)
    }
    
    if (!user) {
        return (
            <>
                <h2 className="login-header">Welcome to NC News. Please log in below</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" required />
                    <button type="submit" className="login-button">Log In</button>
                </form> 
            </>
        )
    }

    return (
        <>
        <div className="actions-wrapper">
        <button className="view-articles-button" onClick={() => navigate("/articles")}>View Articles</button>
        <button className="post-article-button">Post New Article</button>
        <button className="find-users-button">Find a User</button>
        </div>
        </>
    )
}

export default ActionList