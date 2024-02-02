import { useState } from 'react';
import axios from 'axios';

function NewBookForm({ onNewBook }) {
  const [newbook, setNewBook] = useState({
    name: '',
    author: '',
    image_url: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/books', newbook);
      setNewBook({ name: '', author: '', image_url: '' });
      onNewBook(response.data);
      alert('Book added');
    } catch (error) {
      console.error('Error posting book', error);
    }
  };

  const handleChange = (e) =>
    setNewBook({ ...newbook, [e.target.name]: e.target.value });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          value={newbook.name}
          onChange={handleChange}
          placeholder='Book name'
          required
        />
        <input
          type='text'
          name='author'
          value={newbook.author}
          onChange={handleChange}
          placeholder='Book author'
          required
        />
        <input
          type='text'
          name='image_url'
          value={newbook.image_url}
          onChange={handleChange}
          placeholder='Book image url'
          required
        />
        <button type='submit'>Add Book</button>
      </form>
    </div>
  );
}

export default NewBookForm;
