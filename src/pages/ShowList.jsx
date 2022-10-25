import React from "react";
import { Link } from "react-router-dom";

import "../global.css";

const ShowList = ({ shows }) => {
  return (
    <div className="list-container">
      {shows.map((show) => {
        return (
          <Link to="info" key={show.show.id} state={{ show }}>
            <img src={show.show.image.medium} />{" "}
          </Link>
        );
      })}
    </div>
  );
};

export default ShowList;
