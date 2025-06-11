import { configureStore } from "@reduxjs/toolkit"
import { authReducer } from "./reducers/authReducer"
import { resumeReducer } from "./reducers/resumeReducer"

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
        resume: resumeReducer,
    },
    preloadedState : initialState
})