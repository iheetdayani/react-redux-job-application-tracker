import { configureStore } from "@reduxjs/toolkit";
import JobSlice from "../Comp/JobSlice";
const Store = configureStore({
  reducer: {
    jobs:JobSlice
  }
});
export default Store;