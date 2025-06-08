import { configureStore } from "@reduxjs/toolkit"
import { authReducer } from "./reducers/authReducer"

const initialState = {
    auth : {
        user : null,
        loading: false,
        error: null,
    }
}

export const store = configureStore({
    reducer : {
        auth: authReducer,
    },
    preloadedState : initialState
})