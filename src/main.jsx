import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './pages/App.jsx'
import TaskPage from './pages/TaskPage.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/task" element={ <TaskPage />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
