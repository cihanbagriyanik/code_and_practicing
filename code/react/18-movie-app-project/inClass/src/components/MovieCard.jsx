import React from "react";
const IMG_API = "https://image.tmdb.org/t/p/w1280";
const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

const MovieCard = () => {
 

  return (
    <div
      className="movie"
      id="container"
    >
      <img
        loading="lazy"
        src=""
        alt="movie-card"
      />
      <div className="flex align-baseline justify-between p-1 text-white">
        <h5>{}</h5>

       
          <span
            className=""
          >
            {}
          </span>
       
      </div>
      <div className="movie-over">
        <h2>Overview</h2>
        <p>{}</p>
      </div>
    </div>
  );
};

export default MovieCard;
