import React, { useState, useEffect, useRef} from 'react'

function AddTaskForm(props) {
  const {edit, onSubmit} = props;
  const [input, setInput ] = useState(edit ? edit.text: ''); 


  const handleUpdate = (e) => {
    e.preventDefault();
    onSubmit({
      id: edit.id,
      text: input,
      isCompleted: edit.isCompleted
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      id: Date.now(),
      text: input,
      isCompleted: false
    });

    setInput('');
  }

  const focus = useRef(null);

  useEffect(() => {
    focus.current.focus();
  });

  const handleChange = ({target}) => {
    setInput(target.value);
  }
  if(!edit){
    return (
      <form onSubmit={handleSubmit} className = "addTaskForm">
        <input type = "text" placeholder = "Add a task" value = {input} onChange = {handleChange} name = 'text' ref = {focus}/>
        <input type = "submit" value = "Add Task"/>
      </form>
    )
  }
  else{
    return (
      <form onSubmit={handleUpdate} className = "addTaskForm">
        <input type = "text" placeholder = "Add a task" value = {input} onChange = {handleChange} name = 'text' ref = {focus}/>
        <input type = "submit" value = "Update"/>
      </form>
    )
  }
}



export default AddTaskForm