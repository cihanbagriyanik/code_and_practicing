import React from "react";
import MovieCard from "../components/MovieCard";




const Main = () => {
 
  return (
    <>
    MAİN
      <form className="flex justify-center p-2" >
        <input
          type="search"
          className="w-80 h-8 rounded-md p-1 m-2"
          placeholder="Search a movie..."
        
        />
        <button className="btn-danger-bordered" type="submit">
          Search
        </button>
      </form>
      <div className="flex justify-center flex-wrap">
        {"" ? (
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600 mt-52"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          [].map((movie) => <MovieCard  />)
        )}
      </div>
    </>
  );
};

export default Main;
