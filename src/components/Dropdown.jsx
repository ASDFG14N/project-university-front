/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
function Dropdown({ isVisible }) {
  const { logout } = useAuth();

  return (
    <div className={`${isVisible ? "block" : "hidden"}`}>
      <div className="absolute right-[20px] top-[70px] bg-white flex flex-col">
        <div className="flex items-center p-[1rem] text-white text-[15px] bg-[#000b31]">
          Bienvenido: Admin
        </div>
        <Link className="transition-colors hover:text-white hover:bg-[#000b31] text-black text-[17px]">
          <div className="flex items-center p-[1rem]">
            <i className="fa-solid fa-user mr-7"></i>Preferencias
          </div>
        </Link>
        <Link className="transition-colors hover:text-white hover:bg-[#000b31] text-black text-[17px]">
          <div className="flex items-center p-[1rem]">
            <i className="fa-solid fa-user mr-7"></i>Cuenta
          </div>
        </Link>
        <Link className="transition-colors hover:text-white hover:bg-[#000b31] text-black text-[17px]">
          <div className="flex items-center p-[1rem]">
            <i className="fa-solid fa-circle-question mr-7"></i>Centro de ayuda
          </div>
        </Link>
        <hr />
        <Link
          to="/"
          onClick={() => {
            logout();
          }}
          className="transition-colors hover:text-white hover:bg-[#000b31] text-black text-[17px]"
        >
          <div className="flex items-center p-[1rem]">
            <i className="fa-solid fa-power-off mr-7"></i>Cerrar Session
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Dropdown;
