import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};
export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: () => {

    },
    removeBook: () => {

    },
  },
});
export default booksSlice.reducer;
