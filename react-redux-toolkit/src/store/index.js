import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counter";
import blogReducer from "./slice/blogSlice";

const store = configureStore({
  reducer: {
    count: counterReducer,
    blog: blogReducer,
  },
});

export default store;