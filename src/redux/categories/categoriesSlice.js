import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: 'Under construction',
};
export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    toggleStatus: (state) => {
      state.status = 'Under construction';
    },

  },
});
export default categoriesSlice.reducer;
export const { toggleStatus } = categoriesSlice.actions;
