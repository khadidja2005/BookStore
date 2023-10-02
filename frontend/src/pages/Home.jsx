import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import Spinner from "../components/Spinner";
import  { BsInfoCircle } from "react-icons/bs";
import  { AiOutlineEdit }   from "react-icons/ai"
 

const Home = () => {
  const [books, setbooks] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    const customHeaders = {
      'Authorization': 'Bearer yourAccessToken',
      'Custom-Header': 'custom-header-value'
    };
    axios.get("http://localhost:5555/Books", {
      // headers: { 
      //   'Access-Control-Allow-Origin' : '*',
      //   'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      // }
      headers:{
        Accept: "application/json"
      }
    })
      .then((res) => {
        setbooks(res.data.data);
        console.log(res.data.data);
        console.log(res.data.count);
        console.log(books);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
        setloading(false);
      });
  },[]);
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List</h1>
        <Link to="/Books/create">
          <MdOutlineAddBox />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <table className="w-full  border-separate border-spacing-2">
          <thead>
            <tr>
              <th className="border border-slate-600 rounded-md">NO</th>
              <th className="border border-slate-600 rounded-md">Title</th>
              <th className="border border-slate-600 rounded-md max-md:hidden">
                Author
              </th>
              <th className="border border-slate-600 rounded-md max-md:hidden">
                Publish Year
              </th>
              <th className="border border-slate-600 rounded-md ">
                Operations
              </th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => {
             return <tr key={book._id} className="h-8">
                <td className="border border-slate-700 rounded-md text-center ">
                  {index + 1}
                </td>
                <td className="border border-slate-700 rounded-md text-center ">
                  {book.title}
                </td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden ">
                  {book.author}
                </td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden ">
                  {book.publishYear}
                </td>
                <td className="border border-slate-700 rounded-md text-center ">
                  <div className="flex justify-between items-center">
                    <Link to={`/Books/details/${book._id}`}>
                      <BsInfoCircle className="text-2xl text-green-800 " />
                    </Link>
                    <Link to={`/Books/edit/${book._id}`}>
                      <AiOutlineEdit  className="text-2xl text-yellow-600" />
                    </Link>
                    <Link to={`/Books/delete/${book._id}`}>
                      <MdOutlineDelete className="text-2xl text-red-600" />
                    </Link>
                  </div>
                </td>
              </tr>
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
