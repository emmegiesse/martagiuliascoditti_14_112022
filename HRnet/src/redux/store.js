// import REDUX
import { configureStore } from "@reduxjs/toolkit"
import employeesReducer from "./reducer"

export default configureStore({
    reducer: {
        employees : employeesReducer,
    }
})
