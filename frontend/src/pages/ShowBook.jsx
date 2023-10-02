import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BackButtom from '../components/BackButtom'
import Spinner from '../components/Spinner'

const ShowBook = () => {
  const [book , setbook] = useState({})
  const [loading , setloading]= useState({})
  const {id} = useParams()
  useEffect(()=>{
    setloading(true)
    axios.get(`http://localhost:5555/Books/${id}`)
    .then((res)=> {
      setbook(res.data)
      setloading(false)
    })
    .catch((err)=>{
      console.log(err)
      setloading(false)
    })
  },[])
  return (
    <div className='px-4'>
      <BackButtom/>
      <h1 className='text-3x1 my-4 '>Show Book</h1>
      {loading ?
      (<Spinner/> ):
      (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          <div className='my-4 '>
            <span className='text-xl mr-4 text-gray-500'>Id</span>
            <span>{book._id} </span>
          </div>
          <div className='my-4 '>
            <span className='text-xl mr-4 text-gray-500'>Title</span>
            <span>{book.title} </span>
          </div>
          <div className='my-4 '>
            <span className='text-xl mr-4 text-gray-500'>Author</span>
            <span>{book.author} </span>
          </div>  
          <div className='my-4 '>
            <span className='text-xl mr-4 text-gray-500'>PublisheYear</span>
            <span>{book.publishYear}</span>
          </div>    
          <div className='my-4 '>
            <span className='text-xl mr-4 text-gray-500'>Date of creation</span>
            <span>{new Date(book.createdAt).toString()}</span>
          </div>
        </div>
      )

    }
    </div>
  )
}

export default ShowBook