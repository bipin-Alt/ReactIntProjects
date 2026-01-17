import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    title: "",
    description: ""
  },
  blogList: [],

}

export const blogSlice = createSlice({
  name: "Blog",
  initialState,
  reducers: {
    handleInputChange: (state, action) => {
      console.log(action);
      let copyFromData = { ...state.formData };

      copyFromData = {
        ...copyFromData,
        ...action.payload
      }
      state.formData = copyFromData;
    },
    handleAddTodo: (state, action) => {
      console.log(action);
      state.blogList.push({
        id: nanoid(),
        ...state.formData
      });
      state.formData = {
        title: '',
        description: '',
      }
      localStorage.setItem("blogList", JSON.stringify(state.blogList));


    },
    SetBlogOnInitialPageLoad: (state, action) => {
      state.blogList = Array.isArray(action.payload) ? action.payload : [];
    },
    handleDeleteBlog : (state, action)=>{
      console.log(action);
      state.blogList = state.blogList.filter((singleBlog)=>singleBlog.id !== action.payload);
      localStorage.setItem("blogList", JSON.stringify(state.blogList));
    }

  }
})
export const { handleInputChange, handleAddTodo, SetBlogOnInitialPageLoad, handleDeleteBlog} = blogSlice.actions;
export default blogSlice.reducer;
