import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};
export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});
export default booksSlice.reducer;
export const { removeBook, addBook } = booksSlice.actions;
