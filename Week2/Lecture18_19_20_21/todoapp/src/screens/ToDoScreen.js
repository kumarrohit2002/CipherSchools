import React, { useState } from 'react'
import Task from '../components/Task';

export const ToDoScreen = () => {
    const [taskList,setTaskList]=useState([]);
    function increment(){
        setTaskList([
            ...taskList,
            {
            title:"Hello How are you",
            description:"This is description"
            },
        ]);
    }
  return (
    <div>
        <h1 className="ui heading center">TO DO List</h1>
        <div className='btn-addTask'>
            <button onClick={increment} 
            className="ui secondary button">Add Task</button>    
        </div>

        <div>{taskList.map((task)=>(<Task title={task.title} description={task.description}/>))}</div>
    </div>
  )
}

export default ToDoScreen;