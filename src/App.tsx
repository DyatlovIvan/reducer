import React, {useReducer, useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';
import {addTaskAC, changeStatusAC, removeTaskAC, TaskReducer} from "./redux/TaskReducer";
import {changeFilterAC, FilterReducer} from "./redux/FilterReducer";

export type FilterValuesType = "all" | "active" | "completed";

function App() {



    let [tasks, taskDispatch] = useReducer(TaskReducer,[
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Rest API", isDone: false},
        {id: v1(), title: "GraphQL", isDone: false},
    ]);

    let [filter, filterDispatch] = useReducer(FilterReducer,'all');


    function removeTask(id: string) {
        // let filteredTasks = tasks.filter(t => t.id != id);
        //setTasks(filteredTasks);

        taskDispatch(removeTaskAC(id))
    }

    function addTask(title: string) {
        // let task = {id: v1(), title: title, isDone: false};
        // let newTasks = [task, ...tasks];
        //setTasks(newTasks);
        taskDispatch(addTaskAC(title))
    }

    function changeStatus(taskId: string, isDone: boolean) {
        // let task = tasks.find(t => t.id === taskId);
        // if (task) {
        //     task.isDone = isDone;
        // }
        taskDispatch(changeStatusAC(taskId,isDone))
        //setTasks([...tasks]);
    }


    let tasksForTodolist = tasks;

    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => t.isDone === false);
    }
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isDone === true);
    }

    function changeFilter(value: FilterValuesType) {
        // setFilter(value);
        filterDispatch(changeFilterAC(value))

    }


    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
                      changeTaskStatus={changeStatus}
                      filter={filter}
            />
        </div>
    );
}

export default App;
