import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/booksSlice';

const BookItem = ({ itemProp }) => {
  const dispatch = useDispatch();
  const { id, title, author } = itemProp;
  return (
    <li key={id}>
      <h2>{title}</h2>
      <span>{author}</span>
      <button
        onClick={() => {
          dispatch(removeBook({ id }));
        }}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};
BookItem.propTypes = {

  itemProp: PropTypes.string.isRequired,
};
export default BookItem;
