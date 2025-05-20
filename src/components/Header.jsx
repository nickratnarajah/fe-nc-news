import { useNavigate } from "react-router-dom"


function Header() {
    const navigate = useNavigate()
    return (
        <>
        <header className="header-main" onClick={() => navigate('/')}>NC News</header>
        </>
    )
}

export default Header