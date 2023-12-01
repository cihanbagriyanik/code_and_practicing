import React, { useContext } from "react";
import { AuthContextt } from "../context/AuthContext";
// const IMG_API = "https://image.tmdb.org/t/p/w1280";
// const defaultImage =
//   "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

const MovieCard = ({ title, overview, poster_path, vote_average, id }) => {
  const { currentUser } = useContext(AuthContextt);
  return (
    <div className="movie" id="container">
      <img
        loading="lazy"
        src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
        alt="movie-card"
      />
      <div className="flex align-baseline justify-between p-1 text-white">
        <h5>{title}</h5>

        {currentUser && (
          <span className={`tag ${vote_average > 7 ? "green" : "red"}`}>
            {vote_average}
          </span>
        )}
      </div>
      <div className="movie-over">
        <h2>Overview</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
