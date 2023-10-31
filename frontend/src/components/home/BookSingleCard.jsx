import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";

const BookSingleCard = ({item, handleDelete}) => {
  return (
    <div
      className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl"
    >
      <h2 className="absolute top-4 right-2 px-4 py-1 bg-red-300 rounded-lg">
        {item.publishYear}
      </h2>
      <h4 className="my-2 text-gray-500">{item._id}</h4>
      <div className="flex justify-start items-center gap-x-2">
        <PiBookOpenTextLight className="text-red-300 text-2xl" />
        <h2 className="my-1">{item.name}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <BiUserCircle className="text-red-300 text-2xl" />
        <h2 className="my-1">{item.author}</h2>
      </div>
      <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
        <Link to={`/book/details/${item._id}`}>
          <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
        </Link>
        <Link to={`/book/edit/${item._id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-800 hover:text-black" />
        </Link>
        <Link onClick={() => handleDelete(item._id)}>
          <MdOutlineDelete className="text-2xl text-red-800 hover:text-black" />
        </Link>
      </div>
    </div>
  );
};

export default BookSingleCard;
