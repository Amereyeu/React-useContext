import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Faker from "faker";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const createUser = () => {
    return {
      userName: Faker.internet.userName(),
      image: Faker.internet.avatar(),
      text: Faker.lorem.paragraph(),
      id: uuidv4().slice(0, 5),
    };
  };

  const createUsers = (numUsers = 2) => {
    return Array.from({ length: numUsers }, createUser);
  };

  let fakeUsers = createUsers(7);

  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(fakeUsers);
  }, []);

  const addBook = (userName, text) => {
    setBooks([
      ...books,
      {
        userName,
        text,
        image: Faker.internet.avatar(),
        id: uuidv4().slice(0, 5),
      },
    ]);
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
