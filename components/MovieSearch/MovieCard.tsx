import Image from "next/image";

interface MovieCardProps {
	movie: {
		title: string;
		overview: string;
		poster_path: string;
		release_date: string;
		vote_average: number;
		vote_count: number;
		genre_ids: number[];
	};
	genres: {
		id: number;
		name: string;
	}[];
} // End MovieCardProps

function buildGenreArray(genreIds: number[], genres: { id: number; name: string }[]) {
	const genreArray: string[] = [];

	genreIds.forEach((id) => {
		const genre = genres.find((genre) => genre.id === id);

		if (genre) {
			genreArray.push(genre.name);
		} // End if
	}); // End forEach

	return genreArray;
} // End buildGenreArray


export default function MovieCard({ movie, genres }: MovieCardProps) {
	const { title, overview, poster_path } = movie;
	const imageURL = poster_path
		? `https://image.tmdb.org/t/p/w500${poster_path}`
		: `https://picsum.photos/500`;

	const movieGenres = buildGenreArray(movie.genre_ids, genres);

	return (
		<div className="p-4 rounded shadow">
			<Image
				src={imageURL}
				alt={title}
				className="w-full mb-4 rounded"
				width={500}
				height={500}
				sizes="max-width: 500px"
			/>
			<h2 className="mb-2 text-xl font-bold">{title}</h2>
			<b className="text-base text-gray-600 dark:text-gray-200">
				Rating: {movie.vote_average.toFixed(1)}/10 ({movie.vote_count.toLocaleString()} Votes)
			</b>
			<p className="text-base text-gray-500 dark:text-gray-500">Genres: {movieGenres.join(", ")}</p>
			<p className="text-base text-gray-700">{overview}</p>
		</div>
	);
}
