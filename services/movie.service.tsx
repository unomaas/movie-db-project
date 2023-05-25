import axios from "axios";

const movieURL = process.env.MOVIE_DB_API_URL_V3;
const movieKey = process.env.MOVIE_DB_KEY_V3;

const client = axios.create({
  baseURL: movieURL,
  params: { api_key: movieKey },
}); // End client

export const getMovie = async (query: string) => {
  try {
    const { data } = await client.get(`/search/movie`, {
      params: { query },
    }); // End data

    console.log(`Ryan Here: getMovie service \n `, { data });

    return data;
  } catch (error) {
    console.error(error);
    return [];
  } // End try/catch
}; // End getMovie
