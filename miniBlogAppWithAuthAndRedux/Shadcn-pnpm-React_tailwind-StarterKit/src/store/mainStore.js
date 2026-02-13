const { configureStore } = require("@reduxjs/toolkit");
const { authSlice } = require("./slice/authSlice");
const { blogSlice } = require("./slice/blogSlice");

const store = configureStore({
    reducer : {
        auth : authSlice,
        addBlog: blogSlice
    }
})