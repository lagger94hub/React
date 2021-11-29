import Button from "./Button";
import Header from "./Header";
import Tasks from "./Tasks";
import { useState } from "react";
import Form from "./Form";
function App() {


  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true
    },
    {
      id: 2,
      text: "Rami's Appointment",
      day: "Jan 5th at 2:40pm",
      reminder: false
    },
    {
      id: 3,
      text: "Reem's Appointment",
      day: "Mar 10th at 2:50pm",
      reminder: false
    },
  ])

  const [show, setShow] = useState(false);

  const [counter, setCounter] = useState(4);

  // delete a task 
  const delTask = (id) => {
    setTasks(tasks.filter((task) => task.id != id));
    setCounter(counter - 1);

  }

  // set a reminder for a task
  const changeReminder = (id) => {
    setTasks(tasks.map(task => task.id == id ? {...task, reminder: !task.reminder}: task));
  }

  // add new task
  const addTask = (taskData) => {

    // const random = Math.floor((Math.random() * 10) + 1);
    const newTask = {
      id: counter,
      text: taskData[0],
      day: taskData[1],
      reminder: taskData[2],
    }
    setTasks ((oldTasks) => {
      return [...oldTasks, newTask ]
    })
    setCounter(counter + 1);
  }

  // show tasks
  const showTasks = () => {
    setShow(!show);
  }





  return (
    <div className="main-container flex-col">
      <Form addTask={addTask}/>
      <Header showTasks={showTasks} />
      {tasks.length != 0 ? <Tasks tasks={tasks} delTask={delTask} changeReminder={changeReminder} show={show}  /> : <p style={{ paddingTop: "3rem", color: "darkGreen" }}>No tasks at the moment !!</p>}

    </div>
  );
}

export default App;
