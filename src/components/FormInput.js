import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

export default function FormInput() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  function handleChange(e) {
    setTitle(e.target.value);
  }
  function handleAuthor(e) {
    setAuthor(e.target.value);
  }
  const newBook = {
    id: uuidv4(),
    title,
    author,

  };
  function AddBooks() {
    if (author.trim() || title.trim()) {
      dispatch(addBook(newBook));
      setTitle('');
      setAuthor('');
      setText('');
    } else {
      setText('please fill in all the inputs');
    }
  }
  return (
    <div>
      <h3>ADD NEW BOOK</h3>
      <form>
        <input value={title} onChange={handleChange} type="text" placeholder="enter book title....." />
        <input value={author} onChange={handleAuthor} type="text" placeholder="enter book author....." />
        <button
          onClick={() => {
            AddBooks();
          }}
          type="button"
        >
          ADD BOOK
        </button>
        <p>{text}</p>
      </form>
    </div>

  );
}
