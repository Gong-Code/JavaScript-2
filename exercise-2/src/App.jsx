import { v4 as uuidv4 } from 'uuid';

import { Navbar } from './components/Navbar';
import { BooksList } from './components/BooksList';
import { Footer } from './components/Footer';
import { useState } from 'react';
import './index.css';
import { MoviesList } from './components/MoviesList';

const App = () => {

  const [books, setBooks] = useState([
    {
      id: uuidv4(),
      title: 'Harry Potter',
      author: 'J. K. Rowling'
    },
    {
      id: uuidv4(),
      title: 'Game of Thrones',
      author: 'George R. R. Martin'
    }
  ])

  const [movies, setMovies] = useState([
    {
      id: uuidv4(),
      title: 'Interstellar',
      director: 'Christopher Nolan'
      
    },
    {
      id: uuidv4(),
      title: 'World War Z',
      director: 'Marc Foster'
      
    }
  ])

  return (
    <div>
      <Navbar />
      <BooksList books={books} />
      <MoviesList movies={movies} />
      <Footer />
    </div>
  )
}

export default App