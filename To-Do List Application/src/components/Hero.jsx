import { useContext, useEffect, useState } from "react"
import AddTaskForm from "./AddTaskForm"
import Card from "./Card"
import { TasksContext } from "../context/TasksProvider"

const Hero = () => {
    const toggleAddTaskForm = () => {
        const addTaskForm = document.querySelector("#addTaskForm")
        addTaskForm?.classList.remove("hidden")
    }

    // const [heroTasks, setHeroTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || [])
    const { tasks, setTasks } = useContext(TasksContext)

    useEffect(() => {
        setTasks(JSON.parse(localStorage.getItem("tasks")) || [])
    }, [])

    return (
        <div className="pt-4 relative flex-1 flex flex-col">
            <h3 className="text-2xl font-bold px-8 pb-4">My Tasks</h3>
            {tasks.length === 0 || tasks === '' ?
                (<div className="flex-1 flex flex-col items-center justify-center gap-6">
                    <p className="text-secondary-text dark:text-dark-secondary-text text-2xl">To-Dos are empty!</p>
                    <button onClick={toggleAddTaskForm} type="button" className="inline-flex items-center justify-center font-medium rounded-sm border-none text-xs px-3 py-1.5 mr-2 bg-primary-accent text-dark-primary-text"><svg aria-hidden="true" className="mr-1 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg> New Task</button>
                </div>) : (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 px-4">
                    {tasks.map((task, idx) => {
                        return (
                            <Card title={task.title} description={task.description} taskId={task.taskId} key={idx} />
                        )
                    })}
                </div>)
            }
            <AddTaskForm />
        </div>
    )
}

export default Hero