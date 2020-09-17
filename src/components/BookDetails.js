import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const BookDetails = ({ book }) => {
  const { removeBook } = useContext(BookContext);
  return (
    <li onClick={() => removeBook(book.id)}>
      <div className="post">
        <img src={book.image} alt="" />
        <div>
          <div className="id">
            <small>{book.id}</small>
          </div>
          <div className="user">{book.userName}</div>
          <div className="text">{book.text}</div>
        </div>
      </div>
    </li>
  );
};

export default BookDetails;
