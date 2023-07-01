import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import FormInput from './FormInput';
import BookItem from './BookItem';
import { fetchBooks } from '../redux/books/booksSlice';

function BooksLogic() {
  const { books, isLoading, error } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Something went wrong...</p>;
  }

  return (
    <div className="container">
      <ul>
        {books.map((book) => <BookItem itemProp={book} key={book.item_id} />)}
      </ul>
      <FormInput />
    </div>
  );
}
export default BooksLogic;
