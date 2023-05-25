"use client";

import React, { useState } from "react";
import { getMovie } from "@/services/movie.service";

import MovieCard from "./MovieCard";

const MovieSearch = () => {
  const [movie, setMovies] = useState([]);

  const handleSearch = async (query: string) => {
    const data = await getMovie(query);
    setMovies(data.results);
  }; // End handleSearch

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {movie.map((movie: any) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          overview={movie.overview}
          posterPath={movie.posterPath}
        />
      ))}
    </div>
  );
};

export default MovieSearch;
