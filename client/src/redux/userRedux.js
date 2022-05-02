import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.isFetching = false;
            state.error = false;
        },
        loginFailure: (state, action) => {
            state.isFetching = false;
            state.error = true;
        },
        logoutStart: (state) => {
            state.isFetching = true;
        },
        logoutSuccess: (state, action) => {
            state.currentUser = null;
            state.isFetching = false;
            state.error = false;
        },
        logoutFailure: (state, action) => {
            state.isFetching = false;
            state.error = true;
        },
    },
})

export const {loginStart, loginSuccess, loginFailure, logoutStart, logoutSuccess, logoutFailure} = userSlice.actions;
export default userSlice.reducer;

