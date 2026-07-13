import AddTaskForm from "./components/AddTaskForm.jsx"
import Footer from "./components/Footer.jsx"
import Hero from "./components/Hero.jsx"
import Navbar from "./components/Navbar.jsx"

const App = () => {
  return (
    <div className="bg-background dark:bg-dark-background text-primary-text dark:text-dark-primary-text relative flex flex-col min-h-dvh">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  )
}

export default App