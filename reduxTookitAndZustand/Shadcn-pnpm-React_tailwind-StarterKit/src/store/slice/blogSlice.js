import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    title: "",
    description: ""
  },
  blogList: [],
  currentEditedBlogId : null,

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
    },
    setCurrentEditedBlogId : (state, action) =>{
      console.log(action);
      state.currentEditedBlogId = action.payload;
    },
    handleUpdateBlog : (state, action) =>{
      console.log(action);
      let copyBlogList = [...state.blogList];
      const findIndexOfCurrentBlogItem = copyBlogList.findIndex(singleBlogItem=> singleBlogItem.id === state.currentEditedBlogId);
      console.log(findIndexOfCurrentBlogItem);
      copyBlogList[findIndexOfCurrentBlogItem] = {
        ...copyBlogList[findIndexOfCurrentBlogItem],
        ...state.formData
      }
      state.blogList = copyBlogList;
      localStorage.setItem('blogList', JSON.stringify(copyBlogList));
    }

  }
})
export const { handleInputChange, handleAddTodo, SetBlogOnInitialPageLoad, handleDeleteBlog,setCurrentEditedBlogId,handleUpdateBlog} = blogSlice.actions;
export default blogSlice.reducer;
