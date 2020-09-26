import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const BookDetails = ({ book }) => {
  const { removeBook, findBook } = useContext(BookContext);
  return (
    <li>
      <div className="post">
        <img src={book.image} alt="" onClick={() => removeBook(book.id)} />
        <div>
          <div className="id">
            <small>{book.id}</small>
          </div>
          <div className="user" onClick={() => findBook(book.id)}>
            {book.author}
          </div>
          <div className="text">{book.title}</div>
        </div>
      </div>
    </li>
  );
};

export default BookDetails;
