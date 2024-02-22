import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState:{
        data: null
    },
    reducers:{
        setData: (state, action)=>{
            state.data = action.payload
        }
    }
})

export const todoReducer = todoSlice.reducer;
export const todoAction = todoSlice.actions