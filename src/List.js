import React, { useState, useRef } from 'react';
import {styles} from './List_style';
import deleteIcon from './res/delete.png';

export default function List (props) {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    let taskToDelete = useRef(0);

    const handleAdd = (e) => {
        setTasks((prev) => {
            return [newTask, ...prev]
        });
        console.log("Tasks before removing: ")
        console.log(tasks);

        tasks.filter(task => task !== "");
        console.log("Tasks after removing: ")
        console.log(tasks);
    }


    const handleDelete = (item) => {
        console.log("Task to delete: " + item);
        tasks.filter(task => task !== item);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
    }

    const updateNewTask = ({ target }) => {
        setNewTask(target.value);
    }

    const handleKeySubmit = ({ key }) => {
        if (key === "Enter") {
            handleAdd();
        }
    }

    return (
        <div style={styles.marginStyles}>
            <h3>Your Tasks:</h3>
            {/* The form for accepting new task requests */}
            <form onSubmit={handleFormSubmit}>
                <input 
                    style={styles.inputStyles}
                    type="text"
                    onChange={updateNewTask}
                    name="adding_task"
                    onKeyPress={handleKeySubmit}
                />
                <button style={styles.submitButton} type='button' onClick={handleAdd}>Submit</button>
            </form>

            {/* display tasks here */}
            <ol>
                {tasks.slice(1).map((item, index) => (
                    <li ref={taskToDelete} key={index}>
                        {item} <button style={styles.deleteButtonStyles} type='button' onClick={handleDelete(item)}><img src={deleteIcon} width="15px" height="15px" /></button>
                    </li>
                ))}
            </ol>

        </div>
    )
}