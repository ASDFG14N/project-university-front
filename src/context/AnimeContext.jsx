/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import {
  getAnimesRequest,
  getAnimeRequest,
  createAnimeRequest,
  deleteAnimeRequest,
  updateAnimeRequest,
} from "../services/api/animesRequest";

export const AnimeContext = createContext();

export function AnimeProvider({ children }) {
  const [animes, setAnimes] = useState([]);

  const getAnimes = async () => {
    try {
      const res = await getAnimesRequest();
      setAnimes(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAnime = async (id) => {
    const res = await getAnimeRequest(id);
    return res.data
  };

  const createAnime = async (anime) => {
    await createAnimeRequest(anime);
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
        animes,
        getAnimes,
        getAnime,
        createAnime,
        updateAnime,
        deleteAnime,
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
}
