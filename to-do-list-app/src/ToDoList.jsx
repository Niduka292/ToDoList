import React, { useState } from "react"

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
        if(userInput.trim() !== "" ){
            const newTask = {
                id: tasks.length + 1,
                taskName: userInput,
                isChecked: false
            }
            setTasks(t => [...t,newTask]);
        }
    }

    function removeTask(id) {

    }

    function moveTaskUp(id) {

    }

    function moveTaskDown(id) {

    }

    function handleTaskCheck(index) {
        const updated = tasks.map(task =>
            (task.id - 1) === index ? { ...task, isChecked: !task.isChecked } : task
        );
        setTasks(updated);
    }

    return (
        <div className="to-do-list-container">
            <h2 className="title">To-Do List</h2>
            <div className="display-tasks">
                <ul style={{ listStyleType: "none", padding: 0 }}>
                    {tasks.map((task, index) =>
                        <li key={index}>
                            <span style={{
                                color: task.isChecked ? "grey" : "black",
                                textDecoration: task.isChecked ? "line-through" : "none",
                                padding: "none",
                                marginLeft: "20px"
                            }}>
                                {task.taskName}
                            </span>
                            <input type="checkbox"
                                checked={task.isChecked}
                                onChange={() => handleTaskCheck(index)}
                            ></input>





                        </li>
                    )}
                </ul><br />
            </div>
            <div className="add-new-task">
                <input className="new-task"
                    value={userInput}
                    onChange={handleInput}
                    type="text"
                ></input>
               <button className="add-task-button" onClick={addTask}>Add</button>
            </div>
        </div>

    )

}

export default ToDoList