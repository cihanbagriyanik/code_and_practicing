import React, { useContext, useState } from "react";
import MovieCard from "../components/MovieCard";

import { MovieContext } from "../context/MovieContext";
import { toastWarnNotifY } from "../helpers/ToastNotify";

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Main = () => {
  const { movies, loading, getirMovies } = useContext(MovieContext);
  const [searcTerm, setSearcTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searcTerm) {
      getirMovies(SEARCH_API + searcTerm);
    } else {
      toastWarnNotifY("please enter a text");
    }
  };

  return (
    <>
      <form className="flex justify-center p-2" onSubmit={handleSubmit}>
        <input
          type="search"
          className="w-80 h-8 rounded-md p-1 m-2"
          placeholder="Search a movie..."
          onChange={(e) => setSearcTerm(e.target.value)}
        />
        <button className="btn-danger-bordered" type="submit">
          Search
        </button>
      </form>

      <div className="flex justify-center flex-wrap">
        {/* loading true ise (apiden veriler gelmeden önce) loading resmi görünsün, false olduğunda movies cardlar */}
        {loading ? (
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600 mt-52"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          movies.map((movie) => <MovieCard key={movie.id} {...movie} />)
        )}
      </div>
    </>
  );
};

export default Main;
