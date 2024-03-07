import axios from "../api";

export const getAnimesRequest = () => axios.get(`/animes`);
export const getAnimeRequest = (id) => axios.get(`/anime/?id=${id}`);
export const createAnimeRequest = (anime) => axios.post(`/animes`, anime);
export const updateAnimeRequest = (anime) =>
  axios.put(`/animes/${anime.id}`, anime);
export const deleteAnimeRequest = (id) => axios.delete(`/animes/${id}`);