import {configureStore} from "@reduxjs/toolkit"
import todo from "./todoSlice"
import userSlice from "./userSlice"
const store=configureStore({
    reducer:{
       cart: todo,
       users:userSlice
    }
})

export default store