import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

const NewBookForm = () => {
  const { addBook } = useContext(BookContext);
  const [userName, setUserName] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
console.log(userName, text);
    addBook(userName, text);
    setUserName("");
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="User Name"
        required
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Text"
        required
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input type="submit" value="Add" className="button" />
    </form>
  );
};

export default NewBookForm;
