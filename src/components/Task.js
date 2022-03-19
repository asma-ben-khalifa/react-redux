import React from 'react';
import './TodoTask.css';
import Checkbox from '@mui/material/Checkbox';
import {useDispatch} from 'react-redux';
import {setChecks} from '../features/todoSlice'

function Task({name,done,id}) {

  const dispatch = useDispatch();

  const handleCheck = () => {
    dispatch(setChecks(id))
 }
 
  return (
    
    <div className='todotask'>
       <Checkbox
      checked={done}
      color="primary"
      onChange={handleCheck}
      inputProps={{ 'aria-label': 'controlled' }}
    />
      <p   className={(done===true )? 'todotask--done' : undefined}>{name}</p>
    </div>
  )
}

export default Task