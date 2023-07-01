import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/hiViXwgEDzDhmR10wpWU/books';
// const books = [
//   {
//     id: 'item1',
//     title: 'The Great Gatsby',
//     author: 'John Smith',
//     category: 'Fiction',
//   },
//   {
//     id: 'item2',
//     title: 'Anna Karenina',
//     author: 'Leo Tolstoy',
//     category: 'Fiction',
//   },
//   {
//     id: 'item3',
//     title: 'The Selfish Gene',
//     author: 'Richard Dawkins',
//     category: 'Nonfiction',
//   },
// ];
export const fetchBooks = createAsyncThunk('fetch/fetchBooks', async () => {
  try {
    const response = await axios.get(url);
    const booksArr = Object.keys(response.data).map((key) => ({
      item_id: key,
      ...response.data[key][0],
    }));
    return booksArr;
  } catch (error) {
    return error.message;
  }
});
export const SaveBook = createAsyncThunk('save/saveBooks', async (book) => {
  try {
    await axios.post(url, book);
    return book;
  } catch (error) {
    return error.message;
  }
});
export const deleteBooks = createAsyncThunk('delete/deleteBook', async (id) => {
  try {
    await axios.delete(`${url}/${id}`);
    return id;
  } catch (error) {
    return error.message;
  }
});

const initialState = {
  books: [],
  isLoading: false,
  error: false,
};
export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.books = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(SaveBook.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(SaveBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books.push(action.payload);
      })
      .addCase(SaveBook.rejected, (state) => {
        state.error = true;
      })
      .addCase(deleteBooks.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = state.books.filter((book) => book.item_id !== action.payload);
      })
      .addCase(deleteBooks.rejected, (state) => {
        state.error = true;
      });
  },
});
export default booksSlice.reducer;
export const { removeBook, addBook } = booksSlice.actions;
