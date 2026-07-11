import { useContext } from "react"
import { TasksContext } from "../context/TasksProvider"
import { v4 as uuidv4 } from 'uuid';

const AddTaskForm = () => {
    const { tasks, setTasks } = useContext(TasksContext)
    const HandleAddTask = (e) => {
        e.preventDefault()
        const title = document.querySelector("#taskTitle").value?.trim()
        const description = document.querySelector("#titleDescription").value?.trim()
        console.log(title, description)
        // add title and description to loacal storage
        if (title && description) {
            const taskId = uuidv4()
            setTasks([...tasks, { title, description, taskId }])
            localStorage.setItem("tasks", JSON.stringify(tasks))
        }
    }
    return (
        <div className="absolute top-0 h-full w-full flex justify-center bg-white/30 backdrop-blur-sm text-primary-text dark:text-dark-primary-text hidden" id="addTaskForm">
            <form class="max-w-sm mx-auto w-[300px] md:w-[520px] lg:w-[720px] max-w-[740px] p-6 rounded-lg mt-10 md:mt-16 h-fit border border-divider bg-card dark:bg-dark-card">
                <div class="mb-5">
                    <label for="taskTitle" class="block mb-2.5 text-sm font-medium">Task Title</label>
                    <input type="taskTitle" id="taskTitle" class="border border-divider text-sm rounded-base block w-full px-3 py-2.5 shadow-xs placeholder:text-body bg-input bg:dark-input" placeholder="Enter your task title" required />
                </div>
                <label for="titleDescription" class="block mb-2.5 text-sm font-medium">Task Description</label>
                <textarea id="titleDescription" rows="4" class="border border-divider text-sm rounded-base block w-full p-3.5 shadow-xs placeholder:text-body bg-input bg:dark-input" placeholder="Write your task description..."></textarea>

                <button onClick={HandleAddTask} id="addTaskBtn" type="submit" class="box-border border border-divider shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2 mt-5 w-full bg-primary-accent dark:bg-dark-primary-accent">Add Task</button>
            </form>
        </div>
    )
}

export default AddTaskForm