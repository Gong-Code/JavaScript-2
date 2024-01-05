import { useState } from "react"

export const Navbar = () => {

    const [showName, setshowName] = useState(true)

    const toggleShowName = () => {
        setshowName(prevState => !prevState)
    }

    return (

        <div className="navbar--container">
            <h1>Books & Movies</h1>
            <button onClick={toggleShowName} className="log_in--btn">{showName ? 'Log In' : 'Gong'}</button>
        </div>
    )
}
