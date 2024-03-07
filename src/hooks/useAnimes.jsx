import { useContext } from "react";
import { AnimeContext } from "../context/AnimeContext";

export const useAnimes = () => {
  const context = useContext(AnimeContext);
  if (!context) {
    throw new Error("useAnime must be used within a AnimeProvider");
  }
  return context;
};
