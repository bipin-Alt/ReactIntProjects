const { configureStore } = require("@reduxjs/toolkit");
const { authSlice } = require("./slice/authSlice");

const store = configureStore({
    reducer : {
        auth : authSlice
    }
})