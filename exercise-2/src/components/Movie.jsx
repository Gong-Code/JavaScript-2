import { useState } from "react";

export const Movie = ({ movie }) => {

    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () => {
        setIsClicked(prevState => !prevState);
    }

    return (
        <tr onClick={handleClick} className={`${isClicked ? 'clicked' : ''} `} >
            <td>{movie.id}</td>
            <td>{movie.title}</td>
            <td>{movie.director}</td>
        </tr>
    )
}
