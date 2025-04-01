import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './routes/Homepage'
import Login from './routes/Login'
import SignUp from './routes/SignUp'
import App from './routes/App'
import AppTaskDescription from './routes/AppTaskDescription'
import { AuthProvider } from "./context/AuthProvider"
import Profile from './routes/Profile'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={< Homepage />} />
        <Route path='/signup' element={< SignUp />} />
        <Route path='/login' element={< Login />} />
        <Route path='/app' element={
          <AuthProvider >
            < App />
          </AuthProvider>
        } />
        <Route path='/app/task/:id' element={
          <AuthProvider >
            <AppTaskDescription />
            </AuthProvider>
        } />
        <Route path='/app/profile' element={
          <AuthProvider >
            <Profile />
            </AuthProvider>
        } />

      </Routes>

    </BrowserRouter>
  )
}

export default AppRoutes
