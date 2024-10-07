import {createSlice} from "@reduxjs/toolkit"

const todo=createSlice({
    name:"cart",
    initialState:{
        item:[]
    },

    reducers:{
        addItems:(state,action)=>{
            state.item.push(action.payload)
        },
        clearCart:(state)=>{
            state.item.length=0
        },
    }
})
export const {addItems,clearCart} = todo.actions
export default todo.reducer
