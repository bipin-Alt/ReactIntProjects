import { createSlice } from "@reduxjs/toolkit"
import { blogSlice } from "./blogSlice";

const initialState = {
        email : "",
        password:"",
};

export const authSlice = createSlice({
    name : "AuthCredentials",
    initialState,

    reducers : {
        handleAuth : (state, action)=>{
          
        }
    }
});
export default blogSlice.reducer;