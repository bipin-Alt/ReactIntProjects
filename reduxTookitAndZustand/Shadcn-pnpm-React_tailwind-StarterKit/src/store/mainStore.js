import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./slice/blogSlice.js";


const store = configureStore({
    reducer : {
        blog : blogReducer,
        //If I have to add more reducers I can add here in the key-value pair format like i did above in the blog reducer (ie: blog: blogReducer)

    }
})
export default store;