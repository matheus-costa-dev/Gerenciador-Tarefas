import React from 'react'

function Section( {children} ) {
  return (
    <section className='mx-auto h-screen flex flex-col justify-center gap-6'>
        { children }
    </section>

  )
}

export default Section
