import React from "react";

export default function SingleMovieCard({ movieData }) {
  let slicedMovie =
    movieData.movietitle.length > 15
      ? `${movieData.movietitle.slice(0, 14)}...`
      : movieData.movietitle;
  return (
    <button className="border border-slate-400  w-40 h-64 relative rounded-sm shadow-xl hover:scale-105 transition-all duration-200 delay-75">
      <img src={movieData.moviemainphotos} alt="movieImage" />
      <div className="text-center text-sm font-semibold">{slicedMovie}</div>
      <div className="text-xs absolute top-2 right-2 bg-yellow-300 shadow-md rounded-md px-1 py-[2px]">
        {movieData.imdbmovieid}
      </div>
    </button>
  );
}
