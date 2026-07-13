import checkList from "/checklist.png"

const Logo = () => {
    return (
        <a href="/" className="flex mr-4">
            <img src={checkList} className="mr-3 h-8" alt="To-Do Logo" />
            <span className="hidden sm:inline-flex self-center text-2xl font-semibold whitespace-nowrap dark:text-white">To-Do List</span>
        </a>
    )
}

export default Logo