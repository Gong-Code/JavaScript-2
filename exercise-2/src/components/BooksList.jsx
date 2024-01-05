import { Book } from "./Book"

export const BooksList = ({ books }) => {
    return (
        <div>
            <h2 className="bookslist--header">Books</h2>
            <table className="bookslist--container">
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Author</th>
            </tr>
            <tbody>
                {
                    books.map(book => {
                        return <Book book={book} key={book.id}/>
                    })
                }
            </tbody>
            </table>
        </div>
    )
}
