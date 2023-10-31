import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const BooksTable = ({ books, handleDelete }) => {
  return (
    <>
      <table className="w-full border-separate border-spacing-2">
        <thead>
          <tr>
            <th className="border border-slate-600 rounder-md">No</th>
            <th className="border border-slate-600 rounder-md">Title</th>
            <th className="border border-slate-600 rounder-md mx-md:hidden">
              Author
            </th>
            <th className="border border-slate-600 rounder-md mx-md:hidden">
              Publish Year
            </th>
            <th className="border border-slate-600 rounder-md">Operations</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr className="h-8" key={book._id}>
              <td className="border border-slate-700 rounded-md text-center">
                {index + 1}
              </td>
              <td className="border border-slate-700 rounded-md text-center">
                {book.name}
              </td>
              <td className="border border-slate-700 rounded-md text-center mx-md:hidden">
                {book.author}
              </td>
              <td className="border border-slate-700 rounded-md text-center mx-md:hidden">
                {book.publishYear}
              </td>
              <td className="border border-slate-700 rounded-md text-center">
                <div className="flex justify-center gap-x-4">
                  <Link to={`/book/details/${book._id}`}>
                    <BsInfoCircle className="text-2xl text-green-800" />
                  </Link>
                  <Link to={`/book/edit/${book._id}`}>
                    <AiOutlineEdit className="text-2xl text-yellow-800" />
                  </Link>
                  <Link onClick={() => handleDelete(book._id)}>
                    <MdOutlineDelete className="text-2xl text-red-800" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default BooksTable;
