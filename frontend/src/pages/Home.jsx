import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import BookCard from "../components/home/BookCard";
import BooksTable from "../components/home/BooksTable";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState([]);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://127.0.0.1:3004/api/books");
        setBooks(response.data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const updatedBooks = books.filter((book) => book._id !== id);
      await axios.delete(`http://127.0.0.1:3004/api/books/${id}`);
      setBooks(updatedBooks);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button className="bg-sky-300 hover:bg-sky-500 px-4 py-1 rounded-lg" onClick={()=>setShowType('table')}>
          Table
        </button>
        <button className="bg-sky-300 hover:bg-sky-500 px-4 py-1 rounded-lg" onClick={()=>setShowType('card')}>
          Card
        </button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List</h1>
        <Link to="/book/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : ( showType === 'table' ? (
        <BooksTable books={books} handleDelete={handleDelete}  />
      ) : (<BookCard books={books} handleDelete={handleDelete}/>)
      )}
    </div>
  );
};

export default Home;
