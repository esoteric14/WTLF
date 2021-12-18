import React, { useState } from "react";
import "./Search.css";

const Search = ({ setPage }) => {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(Number(event.target.value));
  };
  const handleClick = () => {
    setPage(value);
  };

  return (
    <div className="search_container">
      <input
        onChange={handleChange}
        value={value}
        type="number"
        id="search_face"
        name="search_face"
        min="1"
        max="5"
        placeholder="Search from 1-10000"
      />

      <button onClick={handleClick} id="search_btn">
        Search
      </button>
    </div>
  );
};

export default Search;
