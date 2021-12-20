import React, { useState, useRef } from "react";
import "./Search.css";

const Search = ({ setPage, setIsLoading }) => {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    let value = event.target.value;
    if (value.length > 0) {
      let num = Number(event.target.value);
      setValue((_) => num);
    } else {
      setValue((_) => "");
    }
  };
  const handleClick = () => {
    setIsLoading(true);
    setPage((_) => Math.floor(value));
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    setPage((_) => Math.floor(value));
  };
  const inputRef = useRef(null);

  return (
    <form className="search_container" onSubmit={onSubmit}>
      <input
        onChange={handleChange}
        value={value}
        type="number"
        id="search_face"
        name="avatarName"
        min="1"
        max="10000"
        placeholder="Search from 1-10000"
        ref={inputRef}
      />

      <button onClick={handleClick} id="search_btn" type="button">
        Search
      </button>
    </form>
  );
};

export default Search;
