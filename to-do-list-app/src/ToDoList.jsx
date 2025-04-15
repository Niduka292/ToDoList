import React, { useState } from "react";
import trashIcon from "./assets/deleteIcon.png"

function ToDoList() {

    const [tasks, setTasks] = useState([
        { id: 1, taskName: "Study", isChecked: false },
        { id: 2, taskName: "Eat Breakfast", isChecked: false },
    ]);
    const [userInput, setUserInput] = useState("");

    function handleInput(event) {
        setUserInput(event.target.value);
    }

    function addTask() {
        if (userInput.trim() !== "") {
            const newTask = {
                id: tasks.length + 1,
                taskName: userInput,
                isChecked: false
            }
            setTasks(t => [...t, newTask])
            setUserInput("");
        }
    }

    function removeTask(id) {
        const updated = tasks.filter((_, i) => i !== id);
        setTasks(updated);
    }

    function moveTaskUp(index) {
        const updatedTasks = [...tasks];
        if(index > 0){
            [updatedTasks[index],updatedTasks[index - 1]]=
            [updatedTasks[index - 1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
        

    }

    function moveTaskDown(index) {
        const updatedTasks = [...tasks];
        if(index < tasks.length - 1){
            [updatedTasks[index + 1],updatedTasks[index]]=
            [updatedTasks[index],updatedTasks[index + 1]];
            setTasks(updatedTasks);

        }else{
            setTasks(updatedTasks);
        }
    }

    function handleTaskCheck(index) {
        const updated = tasks.map((task,i) =>
            i === index ? { ...task, isChecked: !task.isChecked } : task
        );
        const rendered = [
            ...updated.filter(task => !task.isChecked),
            ...updated.filter(task => task.isChecked)
        ]
        
        setTasks(rendered);
    }

    return (
        <div className="to-do-list-container">
            <h2 className="title">To-Do List</h2>
            <div className="display-tasks">
                <ul style={{ listStyleType: "none", padding: 0 }}>
                    {tasks.map((task, index) =>
                        <li
                            key={index}>
                            <div className="task-row">
                                <input type="checkbox"
                                    checked={task.isChecked}
                                    onChange={() => handleTaskCheck(index)}
                                    
                                ></input>

                                <span className="task-text" style={{
                                    color: task.isChecked ? "grey" : "black",
                                    textDecoration: task.isChecked ? "line-through" : "none"
                                }}>
                                    {task.taskName}
                                </span>

                            </div>
                            <button className="remove-button"
                                    onClick={() => removeTask(index)}>
                                    <img src={trashIcon} 
                                    alt="Delete" 
                                    width="20px"
                                     height="20px"></img>
                            </button>

                            <button className="task-move-up"
                                    onClick={() => moveTaskUp(index)}>⬆️</button>
                            <button className="task-move-down"
                                    onClick={() => moveTaskDown(index)}>⬇️</button>

                        </li>
                    )}
                </ul><br />
            </div>
            <div className="add-new-task">
                <input className="new-task"
                    value={userInput}
                    placeholder="e.g. Study"
                    onChange={handleInput}
                    type="text"
                ></input>
                <button className="add-task-button" onClick={addTask}>Add</button>
            </div>
        </div>

    )

}

export default ToDoList