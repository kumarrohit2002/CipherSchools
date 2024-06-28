import React from 'react'

export const Task = ({title,description}) => {
  return (
    <div className="">
        <h1>Task</h1>
        <p>{`Title: ${title}`}</p>
        <p>{`Description: ${description}`}</p>
    </div>
  )
}

export default Task;