import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const Userdate = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default Userdate;
