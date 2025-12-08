import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count : 0
}

export const counterSlice = createSlice({  // you need to create a slice first
    name:"Counter", // pass the name 
    initialState, // pass the initialstate //

    reducers:{   // then you will have a reducer inside it there could be multiple actions//
        handleIncreaseCountAction: (state, actions)=>{
            console.log(state, actions);
            state.count ++;
        }
    }
});

export const { handleIncreaseCountAction} = counterSlice.actions;

export default counterSlice.reducer;