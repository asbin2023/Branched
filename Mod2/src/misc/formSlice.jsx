import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: [],
  reducers: {
    handleSubmit: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { handleSubmit } = formSlice.actions;
export default formSlice.reducer;
