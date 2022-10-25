import React from "react";
import { useLocation } from "react-router-dom";

const InfoPage = () => {
  const location = useLocation();
  const { show } = location.state;
  const { image, name, language, genres, status, premiered, ended, rating } =
    show.show;

  return (
    <div>
      <img src={image.medium} alt={show.show.name} />
      <h1>Title: {name}</h1>
      <h2>Language: {language}</h2>
      <h2>Genres: {genres.join(",")}</h2>
      <h2>Status: {status}</h2>
      <h2>Release Date: {premiered}</h2>
      <h2>Finishing Date: {ended}</h2>
      <h2>Rating: {rating.average}</h2>
    </div>
  );
};
//name, language, genres, status, first aired, last aired, rating
export default InfoPage;
