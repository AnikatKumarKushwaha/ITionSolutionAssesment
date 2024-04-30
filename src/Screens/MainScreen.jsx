import React, { useEffect, useState } from "react";
import Header from "../features/MainScreen/Header";
import SingleMovieCard from "../features/MainScreen/SingleMovieCard";

export default function MainScreen({ movies }) {
  const [movieLanguage, setMovieLanguage] = useState([]);
  const [movieCountry, setMovieCountry] = useState([]);
  const [movieGenre, setMovieGenre] = useState([]);
  const [moviesData, setMoviesData] = useState([]);

  ///////////////handel functions//////////////////
  function handelLanguage(data) {
    setMovieLanguage(data);
  }
  function handelCountry(data) {
    setMovieCountry(data);
  }
  function handelGenre(data) {
    setMovieGenre(data);
  }

  useEffect(() => {
    let filteredMovies = movies;

    // Check if any filter is active
    const anyFilterActive =
      movieLanguage.length > 0 ||
      movieCountry.length > 0 ||
      movieGenre.length > 0;

    if (anyFilterActive) {
      // Apply language filter
      if (movieLanguage.length !== 0) {
        filteredMovies = filteredMovies.filter((movie) =>
          movieLanguage.some((lang) => movie.movielanguages.includes(lang))
        );
      }
      // Apply country filter
      if (movieCountry.length !== 0) {
        filteredMovies = filteredMovies.filter((movie) =>
          movieCountry.some((country) => movie.moviecountries.includes(country))
        );
      }
      // Apply genre filter
      if (movieGenre.length !== 0) {
        filteredMovies = filteredMovies.filter((movie) =>
          movieGenre.some((genre) => movie.moviegenres.includes(genre))
        );
      }
    }

    // Set the filtered movies
    setMoviesData(filteredMovies);
  }, [movies, movieLanguage, movieCountry, movieGenre]);

  return (
    <>
      <Header
        handelLanguage={handelLanguage}
        handelCountry={handelCountry}
        handelGenre={handelGenre}
      />
      <div className="mx-5 sm:mx-10 md:mx-14 bg-slate-100 h-screen overflow-auto ">
        {moviesData.length === 0 ? (
          <div className="flex justify-center items-center font-bold uppercase h-full text-3xl">
            No Data Available for selected category 😢
          </div>
        ) : (
          <div className=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10 justify-items-center my-10">
            {moviesData.map((item, index) => (
              <SingleMovieCard movieData={item} key={index} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
