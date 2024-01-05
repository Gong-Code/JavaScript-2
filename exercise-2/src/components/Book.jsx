import { useState } from "react";

export const Book = ({ book }) => {
    
    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
        setIsClicked(prevState => !prevState);
    }

    return (
        <tr onClick={handleClick} className={`${isClicked ? 'clicked' : ''} `} >
            <td>{book.id}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
        </tr>
    )
}
