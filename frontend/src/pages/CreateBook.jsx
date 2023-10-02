import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import BackButtom from "../components/BackButtom";
import Spinner from "../components/Spinner";

const CreateBook = () => {
  const [title, settitle] = useState("");
  const [author, setauthor] = useState("");
  const [publishYear, setpublishYear] = useState("");
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const handelSavebook = () => {
    const data = {
      title,
      author,
      publishYear,
      loading,
    };
    setloading(true);
    axios
      .post("http://localhost:5555/Books", data)
      .then(() => {
        setloading(false);
        navigate("/");
      })
      .catch((err) => {
        setloading(false);
        alert("an error happened repeat again");
        console.log(err);
      });
  };
  return (
    <div className="p-4">
      <BackButtom />
      <h1 className="text-3x1 my-4">Create Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input 
          type="text" 
          name="" 
          id=""
          value={title}
          onChange={(e)=>{settitle(e.target.value)}} 
          className="border-2 border-gray-500 px-4 py-2 w-full"
          /> 
        </div>

        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input 
          type="text" 
          name="" 
          id=""
          value={author}
          onChange={(e)=>{setauthor(e.target.value)}} 
          className="border-2 border-gray-500 px-4 py-2 w-full"
          /> 
        </div>

        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">publishYear</label>
          <input 
          type="text" 
          name="" 
          id=""
          value={publishYear}
          onChange={(e)=>{setpublishYear(e.target.value)}} 
          className="border-2 border-gray-500 px-4 py-2 w-full"
          /> 
        </div>

        <button className="p-2 bg-sky-300 m-8" onClick={handelSavebook}>
           Save
        </button>
      </div>
    </div>
  );
};

export default CreateBook;
