import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const links = [
    {text:"Home", path:"/"},
    {text:"Login", path:"/login"},
    {text:"Cadastrar", path:"/signup"},
]

function Navbar() {
   const navigate = useNavigate()
   const location = useLocation()

   function handleNavigation(path){
    if (!location.pathname.endsWith(path)){
        navigate(path)
    }
   }
  return (
    <nav className='flex flex-wrap justify-around pb-10'>
        <h2 className='text-2xl' onClick={()=>navigate("/")}>TaskMaster</h2>
        <ul className='flex gap-4 items-center text-2xl lg:text-base'>
            { links.map((link, index) => {
                return (
                    <li key={index}>
                        <button onClick={()=>{handleNavigation(link.path)}} >{link.text}</button>
                    </li>
                )
            } )}
        </ul>
    </nav>
  )
}

export default Navbar
