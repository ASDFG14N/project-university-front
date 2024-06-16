import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import VideoPreview from "../components/VideoPreview";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAnimes } from "../hooks/useAnimes";
import { genres } from "../constants/genres";
import { optionsType } from "../constants/types";
import { optionsStatus } from "../constants/status";
import LoadingPage from "./LoadingPage";
import { swbaseUrl } from "../constants/base_url";

function AnimeDetails() {
  const { id } = useParams();
  const { anime, getAnime, chapters, getChapters } = useAnimes();

  useEffect(() => {
    getAnime(id);
    getChapters(id);
  }, [id, getAnime, getChapters, chapters]);

  if (!anime) {
    return <LoadingPage />;
  }

  const getTypeByValue = (value) => {
    const option = optionsType.find((option) => option.value === value);
    return option ? option.label : null;
  };
  const getStatusByValue = (value) => {
    const option = optionsStatus.find((option) => option.value === value);
    return option ? option.label : null;
  };

  return (
    <>
      <Navbar></Navbar>
      <div>
        <div>
          {/* blur*/}
          <div className="blur-[0.5375rem] opacity-50 w-full">
            <picture>
              <img
                src={`/src/assets/posters/${anime.poster_url}`}
                alt=""
                className="w-full h-[30rem] object-cover"
              />
            </picture>
          </div>
          {/* content */}
          <div>
            <picture>
              <img
                src={`/src/assets/posters/${anime.poster_url}`}
                alt=""
                className="absolute w-[40rem] h-[22rem] object-fill top-72 left-1/2 translate-y-[-50%] translate-x-[-50%]"
              />
            </picture>
          </div>
        </div>
        {/* contenido wrapper */}
        <div className="bg-[#000b31] w-full h-full px-60 pb-8">
          <div className="flex justify-between">
            <div>
              <div className="flex my-16 justify-between">
                <h2 className="text-5xl">{anime.title}</h2>
                <i className="fa-solid fa-square-share-nodes flex justify-center items-center text-5xl"></i>
              </div>
              <div className="flex justify-around pb-8">
                <span className="text-gray-500 font-sans font-bold flex justify-center items-center">
                  14 . Sub | Dob
                </span>
                <span className="font-light font-sans bg-green-600 flex justify-center items-center px-4">
                  {getTypeByValue(anime.type)}
                </span>
                <span className="font-light font-sans bg-green-600 flex justify-center items-center px-4">
                  {getStatusByValue(anime.status)}
                </span>
                <span className="text-gray-500 font-sans font-bold flex justify-center items-center px-4">
                  {anime.year}
                </span>
              </div>

              {/* Estrellas */}
              <div className="text-gray-500 font-sans font-bold flex mb-8">
                <div className="gap-2 flex">
                  <i className="fa-regular fa-star text-4xl text-yellow-500"></i>
                  <i className="fa-regular fa-star text-4xl text-yellow-500"></i>
                  <i className="fa-regular fa-star text-4xl text-yellow-500"></i>
                  <i className="fa-regular fa-star text-4xl text-yellow-500"></i>
                  <i className="fa-regular fa-star text-4xl text-yellow-500 mr-2"></i>
                </div>
                | Puntuacion media: 4.8 | 280 reseñas
              </div>
              {/* botones */}
              <div className="flex gap-4 mb-8">
                <div className="border-solid border-2 py-2 px-5 rounded-md">
                  <i className="fa-regular fa-bookmark text-3xl mr-4"></i>
                  Añadir a favoritos
                </div>
                <div className="border-solid border-2 py-2 px-5 rounded-md">
                  <i className="fa-solid fa-plus text-3xl mr-4"></i>
                  Añadir a favoritos
                </div>
              </div>
              <p className="font-light font-sans mb-8 text-ellipsis">
                {anime.synopsis}
              </p>
              <div className="flex gap-5 mb-8">
                {anime.genres.map((genre) => (
                  <span
                    className="font-light font-sans bg-[#DA0040] px-4 py-1 pointer-events-none select-none"
                    key={genre}
                  >
                    {genres[genre - 1]}
                  </span>
                ))}
              </div>
            </div>
            <div className="ml-14 pt-16">
              <div className="w-[35rem] h-full flex items-start flex-col">
                <img
                  src={`/src/assets/posters/${anime.poster_url}`}
                  alt=""
                  className="w-full h-[20rem] object-fill"
                />
                {/* boton */}
                <div className="bg-[#DA0040] w-full mt-3 text-center py-5 text-3xl">
                  <i className="fa-solid fa-play text-3xl mr-4"></i>
                  Comenzar a ver
                </div>
              </div>
            </div>
          </div>
          <h3 className="">S1: [JAP] {anime.title}</h3>
          <div className="grid grid-cols-4 gap-4 mt-8">
            {chapters.map((chapter, index) => (
              <VideoPreview
                key={index}
                amimeName={anime.title.toUpperCase()}
                chapterTitle={chapter.title}
                img_src={`/src/assets/posters/${anime.poster_url}`}
                to={`${swbaseUrl}${chapter.video_url}`}
              />
            ))}
            <VideoPreview
              amimeName={anime.title.toUpperCase()}
              img_src={`/src/assets/posters/${anime.poster_url}`}
            />
            <VideoPreview
              amimeName={anime.title.toUpperCase()}
              img_src={`/src/assets/posters/${anime.poster_url}`}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AnimeDetails;
