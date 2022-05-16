// import logo from './logo.svg';
import './App.css';
import {Task} from './Task';
import React, {useState } from 'react';
import AddTaskForm from './AddTaskForm';
// import { createTodo, getTasks } from './apiFunctions';



function App() {
  const [tasks, setTasks] = useState([{}]);



  const addTask = (task) => {
    if(!task.text || /^\s*$/.test(task.text)) {
      return
    }
    const newTasks = [task, ...tasks];
    setTasks(newTasks);
  }

  const removeTask = (taskIdToRemove) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== taskIdToRemove));    
  }

  const editTask = (newValue) => {
    if(!newValue.text || /^\s*$/.test(newValue.text)) {
      return
    }
    let tasksCopy = [...tasks];
    tasksCopy.forEach((item => {
      if(item.id === newValue.id) {
        item.text = newValue.text;
      }
    }));
    setTasks([...tasksCopy]);

  }

  const completeTask = id => {
    let updatedTaskList = tasks.map(task => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted;
      }
      return task;
    });
    updatedTaskList.sort(compareFunction)
    console.log(updatedTaskList);
    setTasks(updatedTaskList);
  }

  const compareFunction =  (a,b) => {
    if (Number(b.isCompleted) < Number(a.isCompleted)) return 1;
    if (Number(b.isCompleted) > Number(a.isCompleted)) return -1; 
    return 0;
  }
  


  // if(!tasks) {
  //   return <p> Loading....</p>
  // }
  return (
    <div className = 'container'>
      <h1>Task List</h1>
      <AddTaskForm onSubmit = {addTask} />
      <ul className="tasks task-container">
        {tasks.map((task) => (
          <Task removeTask={removeTask} editTask={editTask} task={task} completeTask = {completeTask} />
        ))}
      </ul>
    </div>
  );
}

export default App;
