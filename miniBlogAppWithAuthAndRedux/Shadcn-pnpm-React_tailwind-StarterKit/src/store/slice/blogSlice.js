import { createSlice, nanoid } from "@reduxjs/toolkit"

const blogInitialState = {
   formData : {
    id : nanoid(),
    title : "",
    excerpt : "",
    category : "",
    author : "",
    date : "",
   },
    blogs : []
}

export const blogSlice = createSlice({
    name: "Blog",
    initialState: blogInitialState,
   
    reducers : {
            handleBlogAddition : (state, action) =>{
                console.log("This is an state",state);
                console.log("This is an action: ",action);
            }
    }
});
export const { handleBlogAddition} = blogSlice.actions;
export  const blogReducer = blogSlice.reducer;