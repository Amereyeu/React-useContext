import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Faker from "faker";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const createUser = () => {
    return {
      author: Faker.internet.userName(),
      image: Faker.internet.avatar(),
      title: Faker.lorem.paragraph(),
      id: uuidv4().slice(0, 5),
    };
  };

  const createUsers = (numUsers = 1) => {
    return Array.from({ length: numUsers }, createUser);
  };

  let fakeUsers = createUsers(2);

  const [books, setBooks] = useState([]);
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    setBooks(fakeUsers);
  }, []);

  //add book
  const addBook = (author, title) => {
    setBooks([
      ...books,
      {
        author,
        title,
        image: Faker.internet.avatar(),
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
