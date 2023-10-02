import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const BackButtom =  ({destination = "/"}) => {
    return (
      <div className='flex'>
        <Link 
        to={destination}
        className='text-white px-3 py-1 bg-sky-800 rounded-lg w-fit'
        > 
          <BsArrowLeft className='text-2x1' />
        </Link>
      </div>
    )
  }

export default BackButtom