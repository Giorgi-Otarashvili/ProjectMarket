import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../helpers";

export const authenticateUser = createAsyncThunk("user/authenticateUser",
    async({formValues, isLogin}, {rejectWithValue})=>{
    try {
        const endpoint = `/users/${isLogin? "login" : "register"}`
       const {data} = await axiosInstance.post(endpoint, formValues)
    return data
    } catch (error) {
        return rejectWithValue(error?.response?.data?.message)
    }
})

const userSlice = createSlice({
    name: "user",
    initialState: {
        userdata: null,
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(authenticateUser.pending, (state) =>{
            state.loading = true
        })
        builder.addCase(authenticateUser.fulfilled, (state)=>{
            state.loading = true
            state.error = null
            state.userdata = action.payload.user
        }) 

    }
})

export const userReducer = userSlice.reducer