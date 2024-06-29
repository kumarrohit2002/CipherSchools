import React, { useState } from 'react'
import Task from '../components/Task';

export const ToDoScreen = () => {
    const [taskList, setTaskList] = useState([]);
    function increment() {
        try{
            setTaskList([
                ...taskList,
                {
                    title: "Title",
                    description: "This is description my",
                    date:Date.now()
                    
                },
            ]);
        }catch(error){
            console.log("Error in setTaskList: ",error)
        }
    }
    return (
        <div>
            <h1 className="ui heading center">TO DO List</h1>
            <div className='btn-addTask'>
                <button onClick={increment}
                    className="ui secondary button">Add Task</button>
            </div>

            <section>
                <div className='ui cards cardContainer'>
                    {taskList.map((task,index) => (<Task task={task} key={index}/>))}
                </div>
            </section>
        </div>
    )
}

export default ToDoScreen;