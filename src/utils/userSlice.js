import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: null,

    reducers:{
        addUser: (state, action) =>{
            return action.payload;
        },

        removeUse: (state, action) =>{
            return null;
        },
    },
});



export const {addUser, removeUse} = userSlice.actions

export default userSlice.reducer;