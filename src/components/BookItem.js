import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBooks } from '../redux/books/booksSlice';

const BookItem = ({ itemProp }) => {
  const dispatch = useDispatch();
  // const {
  //   item_id, title, author, category,
  // } = itemProp;
  return (
    <li>
      <h1>{itemProp.category}</h1>
      <h2>{itemProp.title}</h2>
      <span>{itemProp.author}</span>
      <button
        onClick={() => {
          dispatch(deleteBooks(itemProp.item_id));
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
