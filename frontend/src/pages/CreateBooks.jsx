import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBooks = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleCreateBook = () => {
    setLoading(true);
    const data = {
      name,
      author,
      publishYear,
    };
    const saveData = async () => {
      try {
        await axios.post("http://127.0.0.1:3004/api/books", data);
        setLoading(false);
        navigate("/");
      } catch (error) {
        console.log(error);
        setLoading(false);
        alert("An error happened. Please check console");
      }
    };

    saveData();

  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Create Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
            <div className="my-4">
              <label className="text-xl mr-4 text-gray-500">Title</label>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="border-2 border-gray-500 p-2 w-full"
              />
            </div>
            <div className="my-4">
              <label className="text-xl mr-4 text-gray-500">Author</label>
              <input
                type="text"
                value={author}
                onChange={(e) => {
                  setAuthor(e.target.value);
                }}
                className="border-2 border-gray-500 p-2 w-full"
              />
            </div>
            <div className="my-4">
                <label className="text-xl mr-4 text-gray-500">
                  Publish Year
                </label>
                <input
                  type="number"
                  value={publishYear}
                  onChange={(e) => {
                    setPublishYear(e.target.value);
                  }}
                  className="border-2 border-gray-500 p-2 w-full"
                />
              </div>
              <button className="p-2 bg-sky-300 m-8 w-100" onClick={handleCreateBook}>Save</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CreateBooks;
