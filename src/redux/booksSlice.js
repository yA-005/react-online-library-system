

import { createSlice } from "@reduxjs/toolkit";
import { popularBooks } from "../data/dummyBooks";

const initialState = {
  books: popularBooks,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.unshift(action.payload); // add to beginning
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;