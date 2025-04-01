import React from 'react'

function SectionApp({children, title}) {
  return (
    <section className='justify-center flex flex-col gap-4 items-center rounded-2xl mt-5 pt-5'>
      <h1 className='text-4xl font-thin tracking-tight'>{title}</h1>
      {children}  
    </section>
  )
}

export default SectionApp
