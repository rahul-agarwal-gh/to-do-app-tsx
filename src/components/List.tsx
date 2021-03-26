import React, { useState, useEffect } from "react"
import Task from "./Task"
import axios from "axios"

interface TaskType {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
}

const List: React.FC = () => {

    const initialState : Array<TaskType> = []
    const [list, setList] = useState(initialState);
    useEffect(()=> {
        async function getData(){
            const res = await axios.get(`https://jsonplaceholder.typicode.com/todos`)
            const data: Array<TaskType> = res.data
            setList(data)   
        }
        getData()
    }, [])
    const tasks = list.map((item) => {
            return <Task key={item.id} id={item.id} userId={item.userId} title={item.title} completed={item.completed} />
        }
    )
   return (
       <div>{tasks}</div>
   )
}

export default List