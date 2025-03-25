import { createSlice } from "@reduxjs/toolkit";

const requestsSlice = createSlice({
    name: "requests",
    initialState: null,
    reducers: {
        addRequest: (state, action) =>{
            return action.payload;
        },
        removeRequest: (state, action)=>{
            const newArray = state.filter((request)=> request.id !== action.payload.id);
            return newArray;
        }
    }
});


export const {addRequest, removeRequest} = requestsSlice.actions;
export default requestsSlice.reducer;