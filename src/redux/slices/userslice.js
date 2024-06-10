import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        userdata: null,
        loading: false,
        error: null,
    },
})

export const userReducer = userSlice.reducer