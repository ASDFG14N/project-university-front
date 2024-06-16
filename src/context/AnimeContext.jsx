/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import {
  getAnimesRequest,
  getAnimeRequest,
  createAnimeRequest,
  deleteAnimeRequest,
  updateAnimeRequest,
  getMoviesRequest,
  getChaptersByIdRequest,
} from "../services/api/animesRequest";

export const AnimeContext = createContext();

export function AnimeProvider({ children }) {
  const [animes, setAnimes] = useState([]);
  const [movies, setMovies] = useState([]);
  const [anime, setAnime] = useState();
  const [chapters, setChapers] = useState([]);

  const getAnimes = async () => {
    try {
      const res = await getAnimesRequest();
      setAnimes(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getMovies = async () => {
    try {
      const res = await getMoviesRequest();
      setMovies(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAnime = async (id) => {
    try {
      const res = await getAnimeRequest(id);
      setAnime(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getChapters = async (id) => {
    try {
      const res = await getChaptersByIdRequest(id);
      setChapers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createAnime = async (anime) => {
    const res = await createAnimeRequest(anime);
    console.log(res);
  };

  const updateAnime = async (anime) => {
    const res = await updateAnimeRequest(anime);
    console.log(res);
  };

  const deleteAnime = async (id) => {
    const res = await deleteAnimeRequest(id);
    console.log(res);
  };

  return (
    <AnimeContext.Provider
      value={{
        anime,
        animes,
        movies,
        chapters,
        getAnimes,
        getMovies,
        getAnime,
        createAnime,
        updateAnime,
        deleteAnime,
        getChapters,
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
}
