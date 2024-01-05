import { useState } from "react"

export const Navbar = () => {

    const [showName, setShowName] = useState(true)

    const toggleShowName = () => {
        setShowName(prevState => !prevState)
    }

    return (
        
        <div className="navbar--container">
            <h1>Books & Movies</h1>
            <button onClick={toggleShowName} className="log_in--btn">{showName ? 'Log In' : 'Gong'}</button>
        </div>
    )
}
