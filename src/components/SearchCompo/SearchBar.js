import React, { useState } from "react";
import './SearchBar.css';
const SearchInput = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    onSearch(input);
  };
  return (
    <form className="form_body" onSubmit={submitHandler}>
      <input
        className="writing-input"
        type="text"
        placeholder="write here country name..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <input className="submit-input" type="submit" style={{ margin: 5 }} />
    </form>
  );
};

export default SearchInput;
