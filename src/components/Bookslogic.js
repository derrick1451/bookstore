import { useSelector } from 'react-redux';
import FormInput from './FormInput';
import BookItem from './BookItem';

function BooksLogic() {
  const { books } = useSelector((state) => state.books);

  return (
    <div className="container">
      <ul>
        {books.map((book) => <BookItem itemProp={book} key={book.id} />)}
      </ul>
      <FormInput />
    </div>
  );
}
export default BooksLogic;
