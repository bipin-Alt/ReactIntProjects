import { configureStore } from "@reduxjs/toolkit";
import { blogReducer } from "./slice/blogSlice"; // Similarly, here you have changed the name of the reducer to blogReducer but you are exporting blogSlice.reducer in blogSlice.js file.I don't mean this can't be done but you can do this, if you don't get confused //
import { authReducer } from "./slice/authSlice"; // here you have changed the name of the reducer to authReducer but you are exporting blogSlice.reducer in authSlice.js file.//


const store = configureStore({
    reducer :{
       blog : blogReducer,
       AuthCredentials: authReducer,
    }
})
console.log("This is the store: ",store.getState().blog);
export default store;