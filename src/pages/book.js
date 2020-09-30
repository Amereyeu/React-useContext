import React, { useContext, useState, useEffect } from "react";
import BookDetails from "../components/BookDetails";
import NewBookForm from "../components/NewBookForm";
import Search from "../components/Search";
import { BookContext } from "../contexts/BookContext";

const BookList = () => {
  const { books } = useContext(BookContext);
  const [search, setSearch] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    setFilteredBooks(
      books.filter((book) => {
        return book.author.includes(search);
      })
    );
  }, [search, books]);

  return (
    <>
      <Search setSearch={setSearch} />

      {books.length ? (
        <div className="book-list">
          <ul>
            {filteredBooks.map((book) => {
              return <BookDetails book={book} key={book.id} />;
            })}
          </ul>
        </div>
      ) : (
        <div className="empty">
          <h2>Nothing here.</h2>
        </div>
      )}

      <NewBookForm />
    </>
  );
};

export default BookList;
