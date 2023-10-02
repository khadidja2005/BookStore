import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BackButtom from '../components/BackButtom'
import Spinner from '../components/Spinner'

const DeleteBook = () => {
  const [loading , setloading] = useState(false)
  const navigate = useNavigate()
  const {id} = useParams()
  const handelDeleteBook= (()=> {
    setloading(true)
    axios
    .delete(`http://localhost:5555/Books/${id}`)
    .then(()=> {
     setloading(false)
     navigate("/")
    })
    .catch((err)=> {
      setloading(false)
      alert("bla bla bla")
      console.log(err)
    })

  })


  return (
    <div className='p-4 '>
      <BackButtom/>
      <h1 className='text-3xl my-4 '>Delete Book</h1>
       {loading ? <Spinner/> : ""} 
      <div className='flex flex-col border-sky-500 items-center justify-center rounded-xl w-[600px] border-2 p-8'>
        <h3 className='text-2xl'> Are you sure to delete this book</h3>
        <button 
        className=' bg-red-600 p-2 text-white my-4 ' 
        onClick={handelDeleteBook}> yes i am sure</button>

      </div>
    </div>
  )
}

export default DeleteBook