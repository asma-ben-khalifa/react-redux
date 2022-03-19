import { createSlice } from '@reduxjs/toolkit'


const initialState = {
todoList: []
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
      saveTodo: (state,action) => {
          state.todoList.push(action.payload)
          

      },
      setChecks: (state,action) => {
        state.todoList.map(elt=> {
          if(action.payload === elt.id){
            if(elt.done === true){
              elt.done = false
            } else{
              elt.done=true
            }
          }
        })
      }
  }
});

export const {saveTodo , setChecks} = todoSlice.actions
export const selectTodolist = (state) => state.todos.todoList
export default todoSlice.reducer