import React from "react";

const Search = (props) => {
  const { onSubmit, onChange, value } = props;
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="enter the title of the movie"
        onChange={onChange}
        value={value}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
