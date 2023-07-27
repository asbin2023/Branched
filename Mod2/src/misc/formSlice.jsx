import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: [],
  reducers: {
    userInfo: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { userInfo } = formSlice.actions;
export default formSlice.reducer;
