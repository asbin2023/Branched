import { createSlice } from "@reduxjs/toolkit";

const quoteSlice = createSlice({
  name: "quote",
  initialState: [],
  reducers: {
    handleAdd: (state, action) => {
      return action.payload;
    },
  },
});

export const { handleAdd } = quoteSlice.actions;
export default quoteSlice.reducer;
