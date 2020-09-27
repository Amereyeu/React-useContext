import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const BookDetails = ({ book }) => {
  const { removeBook, findBook } = useContext(BookContext);
  return (
    <li>
      <div className="post">
        <div>
          <div className="id" onClick={() => removeBook(book.id)}>
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
