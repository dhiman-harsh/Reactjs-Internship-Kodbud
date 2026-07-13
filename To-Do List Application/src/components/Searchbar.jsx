const Searchbar = () => {
    return (
        <form action="#" method="GET" className="hidden lg:block lg:pl-2">
            <label for="topbar-search" className="sr-only">Search</label>
            <div className="relative mt-1 lg:w-96">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" /> </svg>
                </div>
                <input type="text" name="email" id="topbar-search" className="border border-divider dark:border-dark-divider text-primary-text sm:text-sm rounded-lg block w-full pl-9 p-2.5 bg-input dark:bg-dark-input" placeholder="Search for tasks" />
            </div>
        </form>
    )
}

export default Searchbar