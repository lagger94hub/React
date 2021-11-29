import React from 'react'

const Task = ({ taskObj, delTask, changeReminder }) => {
  return (
      <div
        className={!taskObj.reminder ? "task" : "task task-r"}
        onDoubleClick={() => changeReminder(taskObj.id)}>

        <div className="flex-row fjust-between">
          <h3>{taskObj.text}</h3>
          <i
            className="fa fa-times"
            aria-hidden="true"
            style={{
              color:
                "red"
            }}
            onClick={() =>
              delTask(taskObj.id)}></i>
        </div>
        <p>{taskObj.day}</p>
      </div>
  )
}

export default Task
