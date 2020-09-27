import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem("books")) || [];

  const [books, setBooks] = useState(initialState);
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  });

  //add book
  const addBook = (author, title) => {
    setBooks([
      ...books,
      {
        author,
        title,
        id: uuidv4().slice(0, 5),
      },
    ]);
  };

  // Find book
  const findBook = (id) => {
    const item = books.find((book) => book.id === id);

    setEditItem(item);
  };

  // Edit book
  const editBook = (author, title, id) => {
    const newBooks = books.map((book) =>
      book.id === id ? { author, title, id } : book
    );

    setBooks(newBooks);
    setEditItem(null);
  };

  //Remove book
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider
      value={{ books, addBook, removeBook, editBook, findBook, editItem }}
    >
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
