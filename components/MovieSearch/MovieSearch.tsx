"use client";

import React, { useState } from "react";
import { searchMovies } from "@/services/movie.service";

import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";
import { Skeleton } from "@/components/ui/skeleton";

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

const MovieSearch = () => {
	const [movies, setMovies] = useState([]);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [loading, setLoading] = useState(false);

	const handleSearch = async (query: string) => {
		setLoading(true);

		const result = await searchMovies(query);

		setMovies(result.results);
		setPage(result.page);
		setTotalPages(result.total_pages);
		setLoading(false);
	}; // End handleSearch


	return (
		<div>
			<SearchBar onSearch={handleSearch} />

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{loading
					? Array(20).fill(0).map((_, i) => (
						<div key={i} className="p-4 rounded shadow" >
							<Skeleton className="w-full h-64 2xl:h-[465px] 2xl:w-[310px] mb-4 rounded" /> {/* Image */}
							<Skeleton className="w-full h-6 mb-2" /> {/* Title */}
							<Skeleton className="w-full h-4 mb-2" /> {/* Rating */}
							<Skeleton className="w-full h-4" /> {/* Overview */}
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
