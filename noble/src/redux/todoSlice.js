import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos : ["kfjkd","kfjkdj","fkjdk"],
 
}

export const todoSlice = createSlice({
  name: 'myTodo',
  initialState,
  reducers: {
   add: (state, action) => {
    
      state.todos.push(action.payload)
   },
   edit: (state , action) => {
    console.log(action.payload)
    const index = state.todos.findIndex(ind=> ind === action.payload.editState)
     state.todos.splice(index, 1, action.payload.text)
   },
   remove: (state, action) => {

    const index = state.todos.findIndex(ind=> ind === action.payload)
     state.todos.splice(index,1)
    },


 },


})

export const {add , edit, remove  } = todoSlice.actions

export default todoSlice.reducer