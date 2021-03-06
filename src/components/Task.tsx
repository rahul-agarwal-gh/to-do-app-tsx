import React, {useState} from "react"
import "./Task.css"

interface Props {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
}

/*This Component receive data for a single task as props and returns TSX for that */
const Task: React.FC<Props> = ({id, userId, title, completed}) => {

    const [taskStatus, setTaskStatus] = useState(completed) //Intially, task status will completed/not-completed based on props
    const setTask = () => { //Function to toggle Task status as completed or incomplete
        setTaskStatus(!taskStatus)
    }
    return (
        <div className="note">  
            <input type="checkbox" onClick={setTask} checked={taskStatus}/> 
            <h3 className={taskStatus ? `done` : `not-done`}>{title}</h3>
        </div>
    )
}

export default Task;