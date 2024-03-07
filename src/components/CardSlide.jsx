/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function CardSlide({ img }) {
  return (
    <div className="min-w-[230px] h-full">
      <Link className="m-0 p-0" to="/watch">
        <img src={img} alt="" className="h-full object-cover rounded-2xl" />
      </Link>
    </div>
  );
}

export default CardSlide;
