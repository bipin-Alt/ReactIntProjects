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
          console.log("This is a  state from authSlice: ",state);
            console.log("This is an action from authSlice: ",action);
        }
    }
});
export  const {handleAuth} = authSlice.actions;
export const authReducer = authSlice.reducer;