import React from 'react'
import { useNavigate } from 'react-router-dom'

const links = [
    {text:"Home", path:"/"},
    {text:"Login", path:"/login"},
    {text:"Cadastrar", path:"/signup"},
]

function Navbar() {
   const navigate = useNavigate()
  return (
    <nav className='flex justify-around'>
        <h2 className='text-2xl' onClick={()=>navigate("/")}>MC</h2>
        <ul className='flex gap-4 items-center'>
            { links.map((link, index) => {
                return (
                    <li key={index}>
                        <button onClick={()=>{navigate(link.path)}} >{link.text}</button>
                    </li>
                )
            } )}
        </ul>
    </nav>
  )
}

export default Navbar
