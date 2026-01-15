import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData :{
    title:"",
    Description:""
  }
}

export const blogSlice = createSlice({
    name:"Blog",
    initialState,
    reducers:{
      handleInputChange : ()=>{

      }
    }
})
export const { handleInputChange } = blogSlice.actions;
export default blogSlice.reducer;
