import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBooks } from '../redux/books/booksSlice';

const BookItem = ({ itemProp }) => {
  const dispatch = useDispatch();
  // const {
  //   item_id, title, author, category,
  // } = itemProp;
  return (
    <div className="book-item flex bg-color">
      <div className="book flex text-color">
        <p className="category mont-font">{itemProp.category}</p>
        <h2 className="title robo-font">{itemProp.title}</h2>
        <p className="author robo-font">{itemProp.author}</p>
        <div className="buttons flex robo-font ">
          <button className="bg-color" type="button">Comments</button>
          <button
            className="bg-color"
            onClick={() => {
              dispatch(deleteBooks(itemProp.item_id));
            }}
            type="button"
          >
            Remove
          </button>
          <button className="bg-color" type="button">Edit</button>
        </div>
      </div>
      <div className="progress flex">
        <div className="circle" />
        <div>
          <p className="score text-color">100%</p>
          <p className="progress-status">Completed</p>
        </div>

      </div>
      <div className="chapter flex robo-font text-color">
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
