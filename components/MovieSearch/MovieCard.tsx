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
    <div className="rounded shadow p-4">
      <img src={imageURL} alt={title} className="w-full h-64 rounded mb-4" />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 text-base">{overview}</p>
    </div>
  );
}
