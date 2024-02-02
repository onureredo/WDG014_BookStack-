import { useState, useEffect } from 'react';
import axios from 'axios';
import NewBookForm from './NewBookForm';
import DeleteButton from './DeleteButton';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/books')
      .then((response) => {
        // console.log(response.data);
        setBooks(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleNewBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const handleDelete = (bookId) => {
    setBooks(books.filter((book) => book.id !== bookId));
  };

  return (
    <div>
      <NewBookForm onNewBook={handleNewBook} />
      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.name}</h3>
          <img src={book.image_url} alt={book.name} width='25%' />
          <p>
            <em>{book.author}</em>
          </p>
          <DeleteButton bookId={book.id} onDelete={handleDelete} />
        </div>
      ))}
    </div>
  );
}

export default BookList;
