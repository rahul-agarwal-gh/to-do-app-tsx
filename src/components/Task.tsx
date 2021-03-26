import React, {useState} from "react"
import "./Task.css"

interface Props {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
}
const Task: React.FC<Props> = ({id, userId, title, completed}) => {

    const [taskStatus, setTaskStatus] = useState(completed)
    const setTask = () => {
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