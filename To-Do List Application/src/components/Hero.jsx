import { useContext, useEffect, useState } from "react"
import AddTaskForm from "./AddTaskForm"
import Card from "./Card"
import { TasksContext } from "../context/TasksProvider"

const Hero = () => {

    // const [heroTasks, setHeroTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || [])
    const {tasks, setTasks} = useContext(TasksContext)

    useEffect(() => {
        setTasks(JSON.parse(localStorage.getItem("tasks")) || [])
    }, [])

    return (
        <div className="pt-4 relative min-h-dvh">
            <h3 className="text-2xl font-bold px-8 pb-4">My Tasks</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 px-4">
                {tasks.map((task, idx) => {
                    return (
                        <Card title={task.title} description={task.description} taskId={task.taskId} key={idx} />
                    )
                })}
            </div>
            <AddTaskForm />
        </div>
    )
}

export default Hero