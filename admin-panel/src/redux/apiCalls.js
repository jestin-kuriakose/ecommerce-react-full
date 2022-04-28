import { publicRequest } from "../requestMethods"
import { getProductFailure, getProductStart, getProductSuccess } from "./productRedux"
import { loginFailure, loginStart, loginSuccess } from "./userRedux"

export const login = async (dispatch, user) => {
    dispatch(loginStart())
    try {
        const res = await publicRequest.post("/auth/login", user)
        dispatch(loginSuccess(res.data))
    } catch(err) {
        dispatch(loginFailure())
    }
}

export const getProducts = async (dispatch, user) => {
    dispatch(getProductStart())
    try {
        const res = await publicRequest.get("/products")
        dispatch(getProductSuccess(res.data))
    } catch(err) {
        dispatch(getProductFailure())
    }
}