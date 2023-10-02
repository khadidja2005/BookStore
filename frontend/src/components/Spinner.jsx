import React from 'react'

const Spinner = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
         <div className='animate-ping bg-sky-600 h-20 w-20 rounded-full '></div>
    </div>
    
  )
}

export default Spinner