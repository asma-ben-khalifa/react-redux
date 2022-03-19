import React , {useState} from 'react';
import './AddTask.css'
import {useDispatch} from 'react-redux';
import { saveTodo , setChecks } from "../features/todoSlice";

function AddTask() {

    const [input,setInput] = useState('')
     const dispatch = useDispatch()
   
     const addTodo = (event) =>{
     console.log(`adding ${input}`)
     dispatch(saveTodo({
         item: input,
         done:false,
         id: Date.now()
        })
        )
        setInput( {item:" "})
    }
 console.log(input)
   
  return (
    <div className='input'>
        <input  placeholder="put your task todo" type="text" value={input} onChange={e=>setInput(e.target.value) }/>
          
        <button onClick={addTodo}> Add</button>
    </div>
  )
}

export default AddTask

