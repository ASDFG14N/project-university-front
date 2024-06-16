/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";

function CardContainer({id, title, poster_url }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="card">
      <div
        className="relative h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={poster_url} alt="" className="max-w-full rounded-xl h-full" />
        <div
          className={`${
            isHovered ? "opacity-100 pointer-events-auto" : ""
          } absolute top-0 w-full rounded-xl h-full opacity-0 flex 
        items-center justify-center pointer-events-none flex-col bg-[#000000be]`}
        >
          <h3 className="title mb-10 px-5">{title}</h3>
          <div className="flex mb-10">
            <Link to={`details/${id}`}>
              <i className="fa-solid fa-circle-play mr-6 text-[3rem]"></i>
            </Link>
            <div>
              <i className="fa-solid fa-circle-plus mr-6 text-[3rem]"></i>
            </div>
            <div>
              <i className="fa-solid fa-thumbs-up mr-6 text-[3rem]"></i>
            </div>
          </div>
          <div className="flex text-[1.4rem] gap-10 mb-10">
            <label className="text-green-600 font-bold">Nuevo</label>
            <div className="border border-solid border-gray-300 py-0 px-1">
              16+
            </div>
            <div className="episodes">13 episodios</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardContainer;
