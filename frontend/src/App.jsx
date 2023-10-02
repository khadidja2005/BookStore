import React from 'react'
import {Route , Routes} from "react-router-dom"
import Home from './pages/Home'
import CreateBook from './pages/CreateBook'
import DeleteBook from './pages/DeleteBook'
import ShowBook from './pages/ShowBook'
import EditBook from './pages/EditBook'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Books/create' element={<CreateBook/>} />
      <Route path='/Books/details/:id' element={<ShowBook/>} />
      <Route path='/Books/edit/:id' element={<EditBook/>} />
      <Route path='/Books/delete/:id' element={<DeleteBook/>} />
    </Routes>
  )
}
export default App