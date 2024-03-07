import VideoPlayer from "../components/VideoPlayer";
import video from "../assets/video/Classroom of the Elite Season 3  OFFICIAL TRAILER.mp4";
//https://ok.ru/videoembed/6511019821764

function Watch() {
  return (
    <div className="bg-black">
      <VideoPlayer video_url={video} />
    </div>
  );
}

export default Watch;
