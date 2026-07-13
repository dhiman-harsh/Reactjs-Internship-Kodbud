import Logo from "./Logo"
import checkList from "/checklist.png"

const Footer = () => {
    return (
        <footer class="bg-card dark:bg-dark-card text-primary-text dark:text-secondary-text rounded-base shadow-xs border border-divider dark:border-dark-divider m-4">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <Logo />
                    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-primary-text dark:text-secondary-text">
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-divider dark:border-dark-divider sm:mx-auto lg:my-8" />
                <span class="block text-sm text-secondary-text dark:text-dark-secondary-text sm:text-center">© 2026 <a href="/" class="hover:underline">To-Do List™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}

export default Footer