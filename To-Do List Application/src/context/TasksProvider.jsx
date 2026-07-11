import { createContext, useState } from "react"

export const TasksContext = createContext(JSON.parse(localStorage.getItem("tasks")) || [])

const TasksProvider = ({children}) => {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || [])
    return (
        <TasksContext.Provider value={{tasks, setTasks}}>
            {children}
        </TasksContext.Provider>
    )
}

export default TasksProvider