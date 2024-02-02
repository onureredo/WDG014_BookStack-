import axios from 'axios';

function DeleteButton({ bookId, onDelete }) {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/books/${bookId}`);
      onDelete(bookId);
      alert('book deleted');
    } catch (error) {
      console.error('Error deleting book', error);
    }
  };

  return <button onClick={handleDelete}>Delete</button>;
}

export default DeleteButton;
