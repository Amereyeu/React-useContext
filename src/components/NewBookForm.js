import React, { useContext, useState, useEffect } from "react";
import { BookContext } from "../contexts/BookContext";

const NewBookForm = () => {
  const { addBook, editBook, editItem } = useContext(BookContext);
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editItem) {
      addBook(author, title);
      setAuthor("");
      setTitle("");
    } else {
      editBook(author, title, editItem.id);
    }
  };

  useEffect(() => {
    if (editItem) {
      setAuthor(editItem.author);
      setTitle(editItem.title);
    } else {
      setAuthor("");
      setTitle("");
    }
  }, [editItem]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="title"
        placeholder="Author"
        required
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="title"
        placeholder="Book Title"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className="button">
        {editItem ? "Edit Book" : "Add Book"}
      </button>
    </form>
  );
};

export default NewBookForm;
