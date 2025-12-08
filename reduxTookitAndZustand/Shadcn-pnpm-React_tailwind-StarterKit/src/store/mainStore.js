import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slice/counter";

const store = configureStore({
    reducer : counterSlice.reducer
});

export default store;