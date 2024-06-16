import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function VideoPreview({ img_src, amimeName, chapterTitle, to }) {
  return (
    <Link to={to}>
      <div className="mb-7 bg-[#242a3f]">
        <img src={img_src} alt="" className="w-[40rem] h-[15rem] object-fill" />
        <div className="p-4">
          <span className="text-gray-500 font-sans text-lg font-bold">
            {amimeName}
          </span>
          <p>S1 E1 - {chapterTitle}</p>
          <p className="text-gray-500 font-sans text-xl">Dob | Sub</p>
        </div>
      </div>
    </Link>
  );
}

export default VideoPreview;
