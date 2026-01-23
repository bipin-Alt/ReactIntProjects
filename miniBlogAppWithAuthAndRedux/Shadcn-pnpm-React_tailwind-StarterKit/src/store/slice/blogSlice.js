import { createSlice } from "@reduxjs/toolkit"

const blogInitialState = {
    title : "",
    description: "",
    date : "",
}

export const blogSlice = createSlice({
    name: "Blog",
    blogInitialState,
   
    reducers : {
            handleBlogAddition : (state, action) =>{
                console.log("This is an state",state);
                console.log("This is an action: ",action);
            }

    }
})