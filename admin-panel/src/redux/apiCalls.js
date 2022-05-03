import { publicRequest, userRequest } from "../requestMethods"
import { deleteProductFailure, deleteProductStart, deleteProductSuccess, getProductFailure, getProductStart, getProductSuccess, addProductStart, addProductSuccess, addProductFailure, updateProductStart, updateProductSuccess, updateProductFailure } from "./productRedux"
import { loginFailure, loginStart, loginSuccess, logoutSuccess } from "./userRedux"

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
    dispatch(logoutSuccess())
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

export const deleteProduct = async (id, dispatch) => {
    dispatch(deleteProductStart())
    try {
        const res = await userRequest.delete(`/products/${id}`)
        dispatch(deleteProductSuccess(id))
    } catch(err) {
        dispatch(deleteProductFailure())
    }
}


export const addProduct = async (product, dispatch) => {
    dispatch(addProductStart())
    try {
        const res = await userRequest.post(`/products`, product)
        dispatch(addProductSuccess(res.data))
    } catch(err) {
        dispatch(addProductFailure())
    }
}

export const updateProduct = async (id, product, dispatch) => {
    dispatch(updateProductStart())
    try {
        const res = await userRequest.put(`/products/${id}`, product)
        console.log(res.data)
        dispatch(updateProductSuccess(res.data))
    } catch(err) {
        dispatch(updateProductFailure())
    }
}