import React , {useState} from 'react';
import './TodoTask.css';
import Checkbox from '@mui/material/Checkbox';
import {useDispatch} from 'react-redux';
import {setChecks} from '../features/todoSlice';
import {editTodo } from "../features/todoSlice";
import { useSelector } from 'react-redux';

import {selectTodolist } from '../features/todoSlice';



function Task({name,done,id}) {
  const dispatch = useDispatch();
  const [newInput , setnewInput] = useState("")
  const todoList = useSelector(selectTodolist)
  const [show,setShow]=useState(false)


  const handleCheck = () => {
    dispatch(setChecks(id))
 }
 const showupdateTodo = (event) =>{
  show ?setShow(false):setShow(true)

}
const updateTodo = (event) =>{
  dispatch(editTodo({
    id:event.id,
    item:newInput
  }))}



 
  return (
    
    <div className='todotask'>
       <Checkbox
      checked={done}
      color="primary"
      onChange={handleCheck}
      inputProps={{ 'aria-label': 'controlled' }}
    />
      <p   className={(done===true )? 'todotask--done' : undefined}>{name}</p>
      <button onClick={showupdateTodo}>edit</button>
    { show && <form style={{backgroundColor:"red"}} >
        <input type="text"
        placeholder='new task'
         onChange={(event) => {
         setnewInput(event.target.value);
         } }/>
         <button type='submit' onClick={updateTodo}>submit</button>
      </form>}  
    </div>
  )
}

export default Task