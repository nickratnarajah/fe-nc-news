import { useContext } from "react"

import { PageContext } from "./PageContext"


function Header() {
    const page = useContext(PageContext)
    return (
        <>
        {page === "main" ? (<header className="header-main">NC News</header>) : null}
        </>
    )
}

export default Header