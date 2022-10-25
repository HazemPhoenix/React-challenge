import React from "react";
import { useLocation } from "react-router-dom";

import "../global.css";

const InfoPage = () => {
  const location = useLocation();
  const { show } = location.state;
  const { image, name, language, genres, status, premiered, ended, rating } =
    show.show;

  return (
    <div className="info-container">
      <img src={image.medium} alt={show.show.name} />
      <h1>Title: {name}</h1>
      <h2>Language: {language}</h2>
      <h2>
        Genres: {genres.join(", ") ? genres.join(", ") : "No Genres Found"}
      </h2>
      <h2>Status: {status}</h2>
      <h2>First Aired: {premiered}</h2>
      <h2>Finished Airing: {ended ? ended : "Still Airing"}</h2>
      <h2>Rating: {rating.average ? rating.average : "No Rating Found"}</h2>
    </div>
  );
};
//name, language, genres, status, first aired, last aired, rating
export default InfoPage;
