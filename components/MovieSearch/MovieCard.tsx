interface MovieCardProps {
  title: string;
  overview: string;
  posterPath: string;
} // End MovieCardProps

export default function MovieCard({
  title,
  overview,
  posterPath,
}: MovieCardProps) {
  const imageURL = posterPath
    ? `https://image.tmdb.org/t/p/w500${posterPath}`
    : `https://via.placeholder.com/`;

  return (
    <div className="p-4 rounded shadow">
      <img src={imageURL} alt={title} className="w-full mb-4 rounded" />
      <h2 className="mb-2 text-xl font-bold">{title}</h2>
      <p className="text-base text-gray-700">{overview}</p>
    </div>
  );
}
