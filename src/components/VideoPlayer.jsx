/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import "./VideoPlayer.css";
import { Link } from "react-router-dom";
import pruebaImg from "../assets/img/prueba.jpg";

function VideoPlayer({ video_url }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  //Referencias
  const videoRef = useRef(null);
  const currentTimeRef = useRef(null);
  const videoDurationRef = useRef(null);
  const volumeSliderRef = useRef(null);
  const fullScreenRef = useRef(null);
  const progressBar = useRef(null);
  const containerPayer = useRef(null);
  const videoTimeline = useRef(null);
  const listEpisodes = useRef(null);

  const playPause = () => {
    const video = videoRef.current;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const muteUnmute = () => {
    const video = videoRef.current;

    if (video.muted) {
      video.muted = false;
      setIsMuted(false);
    } else {
      video.muted = true;
      setIsMuted(true);
    }
  };

  const setVolume = () => {
    const video = videoRef.current;
    const volumeSlider = volumeSliderRef.current;

    video.volume = volumeSlider.value / 100;
  };

  const toggleFullScreen = () => {
    containerPayer.current.classList.toggle("fullscreen");
    setIsFullScreen(!isFullScreen);
    if (document.fullscreenElement) {
      setIsFullScreen(!isFullScreen);
      return document.exitFullscreen();
    }
    containerPayer.current.requestFullscreen();
  };

  const formatTime = (time) => {
    let seconds = Math.floor(time % 60);
    let minutes = Math.floor(time / 60) % 60;
    let hours = Math.floor(time / 3600);

    seconds = seconds < 10 ? `0${seconds}` : seconds;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    hours = hours < 10 ? `0${hours}` : hours;

    if (hours == 0) {
      return `${minutes}:${seconds}`;
    }
    return `${hours}:${minutes}:${seconds}`;
  };

  let timer;

  const hideControls = () => {
    timer = setTimeout(() => {
      containerPayer.current.classList.remove("show-controls");
    }, 3000);
  };

  hideControls();

  return (
    // container
    <div
      className="w-[100%] h-[100vh] bg-black relative containerPlayer show-controls"
      ref={containerPayer}
      onMouseMove={() => {
        containerPayer.current.classList.add("show-controls");
        clearTimeout(timer);
        hideControls();
      }}
    >
      <div className="wrapper-video absolute left-0 right-0 bottom-[0px] pointer-events-none opacity-0 z-10">
        <div
          ref={videoTimeline}
          onClick={(e) => {
            const video = videoRef.current;
            const timelineWidth = e.target.clientWidth;
            const rect = e.target.getBoundingClientRect();
            const offsetX = e.clientX - rect.left;
            let newTime = (offsetX / timelineWidth) * video.duration;
            video.currentTime = newTime;
          }}
          className="video-timeline"
        >
          <div className="progress-area">
            <span ref={currentTimeRef}>00:00</span>
            <div className="progress-bar" ref={progressBar}></div>
          </div>
        </div>
        <ul className="video-controls px-5 py-2 flex items-center justify-center">
          {/* Controles de la izquierda */}
          <li className="w-full flex items-center justify-start">
            <button
              onClick={playPause}
              className="h-[4rem] w-[4rem] border-none px-3 py-2 flex items-center justify-center text-5xl"
            >
              {isPlaying ? (
                <i className="fa-solid fa-pause"></i>
              ) : (
                <i className="fa-solid fa-play"></i>
              )}
            </button>
            <button
              className="h-[4rem] w-[4rem] border-none px-3 py-2 flex items-center justify-center text-5xl"
              onClick={() => {
                videoRef.current.currentTime -= 5;
              }}
            >
              <i className="fa-solid fa-arrow-rotate-left"></i>
            </button>
            <button
              className="h-[4rem] w-[4rem] border-none px-3 py-2 flex items-center justify-center text-5xl"
              onClick={() => {
                videoRef.current.currentTime += 5;
              }}
            >
              <i className="fa-solid fa-arrow-rotate-right"></i>
            </button>
            <button
              onClick={muteUnmute}
              className="h-[4rem] w-[4rem] border-none px-3 py-2 flex items-center justify-center text-5xl"
            >
              {isMuted ? (
                <i className="fa-solid fa-volume-high"></i>
              ) : (
                <i className="fa-solid fa-volume-xmark"></i>
              )}
            </button>
            <input
              type="range"
              ref={volumeSliderRef}
              onChange={setVolume}
              max={100}
              className="w-[10rem]"
            />
          </li>
          {/* Controles del centro */}
          <li className="w-full flex items-center justify-center">
            <p className="text-3xl">
              Capitulo 1 del anime elite of the classroom
            </p>
          </li>
          {/* Controles de la derecha */}
          <li className="w-full flex items-center justify-end">
            <div className="flex">
              <span ref={videoDurationRef} className="ml-2">
                00:00
              </span>
            </div>
            <button className="h-[4rem] w-[4rem] border-none px-3 py-2 flex items-center justify-center text-5xl">
              <i className="fa-solid fa-forward-step"></i>
            </button>
            <button
              className="btn-list h-[4rem] w-[4rem] border-none px-3 py-2 flex items-center justify-center text-5xl"
              onClick={() => {
                listEpisodes.current.classList.toggle("show");
              }}
            >
              <i className="fa-solid fa-list"></i>
            </button>
            <ul
              className="list-episodes absolute bg-white text-black bottom-28 w-auto rounded-md 
              max-h-[330px] overflow-y-auto"
              ref={listEpisodes}
            >
              <li className="hover:bg-slate-800 transition-colors p-5">
                <Link>
                  <div className="flex gap-3 items-center">
                    <img
                      src={pruebaImg}
                      alt=""
                      className="w-[15rem] bg-cover"
                    />
                    <p>Capitulo 1</p>
                  </div>
                </Link>
              </li>
              <li className="hover:bg-slate-800 transition-colors p-5">
                <Link>
                  <div className="flex gap-3 items-center">
                    <img
                      src={pruebaImg}
                      alt=""
                      className="w-[15rem] bg-cover"
                    />
                    <p>Capitulo 1</p>
                  </div>
                </Link>
              </li>
              <li className="hover:bg-slate-800 transition-colors p-5">
                <Link>
                  <div className="flex gap-3 items-center">
                    <img
                      src={pruebaImg}
                      alt=""
                      className="w-[15rem] bg-cover"
                    />
                    <p>Capitulo 1</p>
                  </div>
                </Link>
              </li>
              <li className="hover:bg-slate-800 transition-colors p-5">
                <Link>
                  <div className="flex gap-3 items-center">
                    <img
                      src={pruebaImg}
                      alt=""
                      className="w-[15rem] bg-cover"
                    />
                    <p>Capitulo 1</p>
                  </div>
                </Link>
              </li>
            </ul>
            <button
              onClick={toggleFullScreen}
              ref={fullScreenRef}
              className="h-[4rem] w-[4rem] border-none px-3 py-2 flex items-center justify-center text-5xl"
            >
              {isFullScreen ? (
                <i className="fa-solid fa-compress"></i>
              ) : (
                <i className="fa-solid fa-expand"></i>
              )}
            </button>
          </li>
        </ul>
      </div>
      <video
        className="w-full object-cover h-full"
        ref={videoRef}
        onTimeUpdate={(e) => {
          let { currentTime, duration } = e.target;
          let percent = (currentTime / duration) * 100;
          progressBar.current.style.width = `${percent}%`;
          currentTimeRef.current.innerText = formatTime(currentTime);
        }}
        onEnded={() => setIsPlaying(false)}
        onLoadedData={(e) => {
          videoDurationRef.current.innerText = formatTime(e.target.duration);
        }}
        onClick={playPause}
      >
        <source src={video_url} type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoPlayer;
