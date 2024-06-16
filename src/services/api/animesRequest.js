import axios from "../api";

export const getAnimesRequest = () => axios.get(`/animes`);
export const getMoviesRequest = () => axios.get(`/movies`);
export const getAnimeRequest = (id) => axios.get(`/anime/${id}`);
export const createAnimeRequest = (anime) => axios.post(`/animes`, anime);
export const updateAnimeRequest = (anime) =>
  axios.put(`/animes/${anime.id}`, anime);
export const deleteAnimeRequest = (id) => axios.delete(`/animes/${id}`);

//Private endpoints
export const getAnimesByGenresRequest = () => axios.get("/genres");
export const getChaptersByIdRequest = (id) => axios.get(`/chapters/${id}`);