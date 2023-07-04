import axios from "axios";

const movieURL = process.env.NEXT_PUBLIC_MOVIE_DB_API_URL_V3;
const movieKey = process.env.NEXT_PUBLIC_MOVIE_DB_KEY_V3;

const client = axios.create({
  baseURL: movieURL,
  params: { api_key: movieKey },
}); // End client

export const searchMovies = async (query: string) => {
  try {
    const { data } = await client.get(`/search/movie`, {
      params: { query },
    }); // End data

    console.log(`Ryan Here: searchMovies \n `, { data });

    return data;
  } catch (error) {
    console.error(error);
    return [];
  } // End try/catch
}; // End getMovie
