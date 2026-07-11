import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TasksProvider from "./context/TasksProvider.jsx"
import ThemeChanger from './context/ThemeChanger.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeChanger>
    <TasksProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </TasksProvider>
  </ThemeChanger>,
)
