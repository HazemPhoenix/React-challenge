import React from "react";
import "../global.css";

const Search = (props) => {
  const { onSubmit, onChange, value } = props;
  return (
    <form onSubmit={onSubmit} className="form-container">
      <input
        type="text"
        placeholder="enter the title of the show"
        onChange={onChange}
        value={value}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
