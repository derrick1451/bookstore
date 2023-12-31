import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { SaveBook } from '../redux/books/booksSlice';

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
    item_id: uuidv4(),
    title,
    author,
    category: 'action',

  };
  function AddBooks() {
    if (author.trim() || title.trim()) {
      dispatch(SaveBook(newBook));
      setTitle('');
      setAuthor('');
      setText('');
    } else {
      setText('please fill in all the inputs');
    }
  }
  return (
    <div className="form-container flex mont-font">
      <h3>ADD NEW BOOK</h3>
      <form className="form flex">
        <input className="input-title" value={title} onChange={handleChange} type="text" placeholder="Book title...." />
        <input className="input-author" value={author} onChange={handleAuthor} type="text" placeholder="Book author..." />
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
