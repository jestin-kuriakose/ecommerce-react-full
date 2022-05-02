import { publicRequest } from "../requestMethods"
import { loginFailure, loginStart, loginSuccess, logoutStart, logoutSuccess, logoutFailure } from "./userRedux"

export const login = async (dispatch, user) => {
    dispatch(loginStart())
    try {
        const res = await publicRequest.post("/auth/login", user)
        dispatch(loginSuccess(res.data))
    } catch(err) {
        dispatch(loginFailure())
    }
}

export const logout = async (dispatch) => {
    dispatch(logoutStart())
    try {
        //const res = await publicRequest.post("/auth/login", user)
        dispatch(logoutSuccess())
    } catch(err) {
        dispatch(logoutFailure())
    }
}