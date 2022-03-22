import React from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Task from './components/Task'
import { useSelector } from 'react-redux';
import { selectTodolist } from './features/todoSlice';



function App() {
  const todoList = useSelector(selectTodolist)
  return (
    <div className="App">
      <div className='app_container'>
       <div className='app_todocontainer'>
            {
              todoList.map((elt)=> 
                 (<Task 
                  name={elt.item}
                  done={elt.done}
                  id={elt.id}/>
                  
              )
              )
            }
           
       </div>
     <AddTask />
     </div>
    </div>
  );
}

export default App;
