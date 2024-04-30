import { useEffect, useState } from "react";
import MainScreen from "./Screens/MainScreen";
import LoadingSpinner from "./ui/LoadingSpinner";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchMovieData() {
      try {
        const response = await fetch("http://localhost:8000/movieList");
        if (!response.ok) {
          throw new Error("Failed to fetch movie data");
        }
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovieData();
  }, []);

  return (
    <div>{isLoading ? <LoadingSpinner /> : <MainScreen movies={movies} />}</div>
  );
}
