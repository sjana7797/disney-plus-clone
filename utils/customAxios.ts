import axios from "axios";

const customAxios = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

customAxios.interceptors.request.use((config) => {
  const URL = `${config.url}?api_key=${process.env.MOVIE_API_KEY}`;
  config.url = URL;
  return config;
});

export { customAxios };
