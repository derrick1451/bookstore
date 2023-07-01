import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBooks } from '../redux/books/booksSlice';

const BookItem = ({ itemProp }) => {
  const dispatch = useDispatch();
  // const {
  //   item_id, title, author, category,
  // } = itemProp;
  return (
    <div className="book-item">
      <div className="book">
        <p className="category">{itemProp.category}</p>
        <h2 className="title">{itemProp.title}</h2>
        <p className="author">{itemProp.author}</p>
        <div className="buttons">
          <button type="button">Comments</button>
          <button
            onClick={() => {
              dispatch(deleteBooks(itemProp.item_id));
            }}
            type="button"
          >
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="progress">
        <div className="circle" />
        <div>
          <p className="score">100%</p>
          <p className="progress-status">Completed</p>
        </div>

      </div>
      <div className="chapter">
        <div className="chapter-text">
          <h4>Current chapter</h4>
          <p>Chapter 17</p>
        </div>
        <button className="progress-btn" type="button">UPDATE PROGRESS</button>
      </div>

    </div>

  );
};
BookItem.propTypes = {

  itemProp: PropTypes.string.isRequired,
};
export default BookItem;
