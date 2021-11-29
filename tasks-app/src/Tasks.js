import React from "react";
import Task from "./Task";



const Tasks = ({tasks, delTask, changeReminder, show}) => {
  return ( 
    <div className="tasks-container flex-col gap-16p">
      {show && tasks.map((task)=>
        <Task key={task.id} taskObj={task} delTask={delTask} changeReminder={changeReminder} show={show} />
      )}
    </div>
  )
}

export default Tasks;