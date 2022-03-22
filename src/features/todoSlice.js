import { tableHeadClasses } from '@mui/material'
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
todoList: [
  {
id:1,
item: "job",
done: false,
},
]
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
        }
        ) 
      },
      editTodo:(state,action) =>{
       state.todoList.map(elt=>{
         if (elt.id === action.payload.id){
         elt.item = action.payload.item          
       }
      
       }
)}
      }})

export const {saveTodo , setChecks , editTodo} = todoSlice.actions
export const selectTodolist = (state) => state.todos.todoList
export default todoSlice.reducer