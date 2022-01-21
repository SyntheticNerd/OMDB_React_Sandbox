import { useState, useEffect } from "react";
import { getMovies } from "./utils";
import MovieCard from "./MovieCard";

export const HomePage = () => {
  let [tempMovie, setTempMovie] = useState([]);

  useEffect(() => {
    let tempData = getMovies();
    if (tempData.length) {
      setTempMovie(tempData);
    }
  }, []);

  return (
    <MovieCard
      poster={tempMovie.Poster}
      title={tempMovie.Title}
      type={tempMovie.Type}
    />
  );
};
