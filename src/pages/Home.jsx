import React from "react";
import Search from "../components/Search";
import ShowList from "../components/ShowList";

require("regenerator-runtime/runtime");

export const Home = (props) => {
  const { onSubmit, onChange, value, shows } = props;

  return (
    <>
      <Search onSubmit={onSubmit} onChange={onChange} value={value} />
      <ShowList shows={shows} />
      <div
        className="App"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          rowGap: "10px",
          columnGap: "20px",
        }}
      ></div>
    </>
  );
};

export default Home;
