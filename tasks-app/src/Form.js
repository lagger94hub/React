import React, { useState } from "react";

const Form = ({ addTask }) => {

  const [nameValue, setNameValue] = useState('');
  const [dayValue, setDayValue] = useState('');
  const [checked, setChecked] = useState(false);

  const submitForm = (event) => {
    event.preventDefault();
    if (!nameValue || !dayValue) {
      alert("fill the empty fields !!");
      return
    }
    addTask([nameValue, dayValue, checked])
  }

  return (
    <form onSubmit={submitForm}

      className="myForm flex-col gap-32p falign-center"
    >
      <div className="flex-row fjust-between">
        <label className="my-label" htmlFor="task">Task Name:</label>
        <input
          type="text"
          name="taskName"
          id="task"
          onChange={(e) => setNameValue(e.target.value)}
        />
      </div>
      <div className="flex-row fjust-between">
        <label className="my-label" htmlFor="task">Task Date:</label>
        <input
          type="text"
          name="taskName"
          id="task"
          onChange={(e) => setDayValue(e.target.value)}
        />
      </div>
      <div>
        <input
          type="checkbox"
          name="reminder"
          onChange={(e) => setChecked(e.target.checked)}
        />
        <label style={{ padding: ".5rem" }} htmlFor="reminder">Want to make a reminder for the task ?</label>
      </div>
      <button
        type="submit"
        className="btn-l"
      >Save Task</button>
    </form>
  )
}

export default Form;