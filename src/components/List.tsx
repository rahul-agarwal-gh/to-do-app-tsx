import React, { useState, useEffect } from "react"
import Task from "./Task"
import axios from "axios"

interface TaskType {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
}

/* This component gets the To-DO Items from an API and renders them */
const List: React.FC = () => {

    const initialState : Array<TaskType> = []
    const [list, setList] = useState(initialState); //initial list of tasks will be an empty array
    useEffect(()=> {
        async function getData(){
            const res = await axios.get(`https://jsonplaceholder.typicode.com/todos`)  //Fetching to-do items
            const data: Array<TaskType> = res.data
            setList(data)   //Fetched items are set as List of tasks
        }
        getData()
    }, [])
    const tasks = list.map((item) => { //For each task, calling a Task Component which will return TSX for every single task
            return <Task key={item.id} id={item.id} userId={item.userId} title={item.title} completed={item.completed} />
        }
    )
   return (
       <div>{tasks}</div>
   )
}

export default List