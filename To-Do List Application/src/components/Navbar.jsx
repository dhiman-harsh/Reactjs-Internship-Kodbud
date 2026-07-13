import Logo from "./Logo"
import Searchbar from "./Searchbar"
import ThemeButton from "./ThemeButton"

const Navbar = () => {
    const toggleAddTaskForm = () => {
        const addTaskForm = document.querySelector("#addTaskForm")
        addTaskForm.classList.toggle("hidden")
    }
    return (
        <div className="sticky left-0 top-0 right-0 z-10 bg-background dark:bg-dark-background">
            <header className="antialiased">
                <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
                    <div className="flex flex-wrap justify-between items-center">
                        <div className="flex justify-start items-center">
                            <Logo />
                            <Searchbar />
                        </div>
                        <div className="flex items-center gap-4">
                            <button onClick={toggleAddTaskForm} type="button" className="inline-flex items-center justify-center font-medium rounded-sm border-none text-xs px-3 py-1.5 mr-2 bg-primary-accent text-dark-primary-text"><svg aria-hidden="true" className="mr-1 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg> New Task</button>
                            <ThemeButton />
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar