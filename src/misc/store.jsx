import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./formSlice";
import quoteReducer from "./quoteSlice";
export const store = configureStore({
  reducer: {
    form: formReducer,
    quote: quoteReducer,
  },
});
