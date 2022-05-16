import React, { useState } from "react";
import AddTaskForm from "./AddTaskForm";

export function Task (props) {
    const {task, removeTask, editTask, completeTask } = props;
    const [edit, setEdit] = useState({});

    const handleRemoveClick = () => {
        removeTask(task.id);
    }

    const handleEditClick = () => {
        setEdit({
            id: task.id,
            text: task.text,
            isCompleted: task.isCompleted
        })
    }

    const handleCompleteClick = () => {
        completeTask(task.id);
        
    }


    const submitUpdate = (newValue) => {
        editTask(newValue);
        setEdit({
            id: null,
            text: '',
            isCompleted: false
        });
    }

    if (edit.id) {
        return <AddTaskForm edit = {edit} onSubmit = {submitUpdate}/>
    }

    if(!task.isCompleted){
        return (
            <li id = {`{task.id}-task`} className = "task">
                <div>{task.text}</div>
                <div>
                    <button id = {`{task.id}-edit`} onClick = {handleEditClick}>
                        Edit
                    </button>
                    <button id = {`{task.id}-complete`} onClick = {handleCompleteClick}> 
                        Complete
                    </button >
                </div>
            </li>
        )
    }


    return (
        <li id = {`{task.id}-task`} className = "tasK complete">
            <div>{task.text}</div>
            <div>
                <button id = {`{task.id}-revert`} onClick = {handleCompleteClick}>
                    Revert
                </button>
                <button id = {`{task.id}-delete`} onClick={handleRemoveClick}>
                    Delete
                </button>
            </div>
        </li>
    )


}