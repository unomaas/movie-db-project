"use client";

import React, { useState } from "react";
import { searchMovies } from "@/services/movie.service";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";

const genres: { id: number; name: string }[] = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

function generatePaginationArray(page: number, totalPages: number) {
  const paginationArray: number[] = [];

  for (let i = 1; i <= totalPages; i++) {
    paginationArray.push(i);
  } // End for

  return paginationArray;
} // End generatePaginationArray

const MovieSearch = () => {
  const [state, setState] = useState({
    movies: [],
    page: 1,
    totalPages: 1,
    loading: false,
    searched: false,
  });

  const [query, setQuery] = useState("");

  const handleSearch = async (query: string, page: number = 1) => {
    setState((prevState) => ({ ...prevState, loading: true }));

    const result = await searchMovies(query, page);

    setState({
      searched: true,
      movies: result.results,
      page: result.page,
      totalPages: result.total_pages,
      loading: false,
    });
  }; // End handleSearch

  const handlePageChange = (query: string, page: number) => {
    handleSearch(query, page);
  };

  const { movies, page, totalPages, loading, searched } = state;

  const pagesArray = generatePaginationArray(page, totalPages);

  return (
    <div>
      <SearchBar
        handleSearch={handleSearch}
        query={query}
        setQuery={setQuery}
      />

      {searched && (
        <div className="flex items-center justify-center w-screen max-w-lg px-4 mx-auto">
          {pagesArray.map((pageNumber) => (
            <Button
              key={pageNumber}
              variant={pageNumber === page ? "destructive" : "outline"}
              size="sm"
              className="ml-2"
              value={pageNumber}
              onClick={() => handlePageChange(query, pageNumber)}
            >
              {pageNumber}
            </Button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {loading
          ? Array(20)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="p-4 rounded shadow">
                  <Skeleton className="xs:h-[550px] xs:w-[367px] mb-4 h-64 w-full rounded 2xl:h-[465px] 2xl:w-[310px]" />
                  <Skeleton className="w-full h-6 mb-2" />
                  <Skeleton className="w-full h-4 mb-2" />
                  <Skeleton className="w-full h-4" />
                </div>
              ))
          : movies.map((movie: any) => (
              <MovieCard key={movie.id} movie={movie} genres={genres} />
            ))}
        {/* {movies.map((movie: any) => (
          <MovieCard key={movie.id} movie={movie} genres={genres} />
        ))} */}
      </div>
    </div>
  ); // End return
}; // End MovieSearch

export default MovieSearch;
