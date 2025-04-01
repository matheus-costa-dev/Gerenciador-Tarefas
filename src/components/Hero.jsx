import React from 'react'
import { useNavigate } from 'react-router-dom'
import Section from './Section'


function Hero() {
  const navigate = useNavigate()
  return (
    <Section >
        <h1 className='text-4xl bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent text-center'>Gerenciador de tarefas</h1>
        <button className='w-1/3 rounded-2xl p-1 mx-auto bg-yellow-500 hover:bg-red-400' onClick={()=>{navigate("/login")}}>Acessar</button>
    </Section>
  )
}

export default Hero
