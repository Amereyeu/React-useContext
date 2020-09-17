import React, { useContext } from "react";
import BookDetails from "../components/BookDetails";
import NewBookForm from "../components/NewBookForm";
import { BookContext } from "../contexts/BookContext";

const BookList = () => {
  const { books } = useContext(BookContext);

  return (
    <>
      {books.length ? (
        <div className="book-list">
          <ul>
            {books.map((book) => {
              return <BookDetails book={book} key={book.id} />;
            })}
          </ul>
        </div>
      ) : (
        <div className="empty">Nothing here.</div>
      )}

      <NewBookForm />
    </>
  );
};

export default BookList;
