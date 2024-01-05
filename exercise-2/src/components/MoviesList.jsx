import { Movie } from './Movie';

export const MoviesList = ({ movies }) => {
    return (
        <div>
            <h2 className="movieslist--header">Movies</h2>
            <table className="movieslist--container">
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Director</th>
            </tr>
            <tbody>
                {
                    movies.map(movie => {
                        return <Movie movie={movie} key={movie.id}/>
                    })
                }
            </tbody>
            </table>
        </div>
    )
}
