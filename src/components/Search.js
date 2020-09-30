import React, { useContext } from "react";
//import { BookContext } from "../contexts/BookContext";

const Search = ({ setSearch  }) => {
  //const { removeBook, findBook } = useContext(BookContext);

  return (
    <div className="search">
      <label htmlFor="search">Search:</label>
      <input
        type="text"
        name="search"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
