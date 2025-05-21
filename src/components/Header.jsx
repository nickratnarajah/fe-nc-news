import { useNavigate } from "react-router-dom"
import { UserContext } from "./UserContext"
import { useContext } from "react"


function Header() {
    const { user, setUser } = useContext(UserContext)
    const navigate = useNavigate()
    return (
        <>
        <div className="header-wrapper">
        <header className="header-main" onClick={() => navigate('/')}>NC News</header>
        {user ? (<>
                <div className="user-details-wrapper">
                <p>{user}</p>
                <button className="logout-button" onClick={()=>{setUser(null); navigate(`/`)}}>Log Out</button>
                </div>
            </>) : null}
        </div>
        </>
    )
}

export default Header