import BookSingleCard from "./BookSingleCard";

const BookCard = ({ books, handleDelete }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((item) => 
        <BookSingleCard key={item._id} item = {item} handleDelete={handleDelete} />
      )}
    </div>
  );
};

export default BookCard;
