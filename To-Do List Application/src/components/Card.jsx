import { useContext } from "react"
import { TasksContext } from "../context/TasksProvider"

const Card = ({ title, description, taskId }) => {
    const { tasks, setTasks } = useContext(TasksContext)

    const handleShowDeleteBtn = (e) => {
        e.target?.children[0].children[1].classList.remove("invisible")
    }
    const handleHideDeleteBtn = (e) => {
        e.target?.children[0].children[1].classList.add("invisible")
    }
    const handleDeleteCard = (e) => {
        console.log(e.target.tagName)
        if (e.target?.tagName.toLowerCase() === 'button') {
            const card = e.target.parentElement.parentElement
            const taskId = card.getAttribute('id')
            const allTasks = tasks
            let arr = []
            if (allTasks.length > 0) {
                allTasks.forEach(e => {
                    if(allTasks.length === 1 && e.taskId === taskId) {
                        arr = []
                    }
                    if (allTasks.length > 1 && e.taskId !== taskId) {
                        arr.push(e)
                    }
                })
            }
            localStorage.setItem("tasks", JSON.stringify(arr))
            setTasks(arr)

        }
    }
    return (
        <div onClick={(e) => {
            handleDeleteCard(e)
            handleShowDeleteBtn(e)
        }} onMouseOver={handleShowDeleteBtn} onMouseOut={handleHideDeleteBtn} className="bg-card dark:bg-dark-card text-primary-text dark:text-dark-primary-text block p-6 border border-divider dark:border-dark-divider rounded-base shadow-xs" id={taskId}>
            <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8 flex gap-4 flex justify-between pointer-events-none">
                <div className="flex gap-4">
                    <input id="default-checkbox" type="checkbox" value="" className="size-6 border border-divider dark:border-dark-divider rounded-xs mt-2 pointer-events-auto bg-background checked:bg-primary-accent"></input>
                    <p className="text-primary-text dark:text-dark-primary-text">{title}</p>
                </div>
                <button onMouseOver={(e) => {
                    e.target.classList.remove("invisible")
                }} type="button" className="text-dark-primary-text bg-danger box-border shadow-xs font-medium leading-5 rounded-sm text-[14px] py-1 px-2 w-fit h-fit invisible pointer-events-auto">Delete</button>
            </h5>
            <p className="text-secondary-text dark:text-dark-secondary-text pointer-events-none">{description}</p>
        </div>
    )
}

export default Card