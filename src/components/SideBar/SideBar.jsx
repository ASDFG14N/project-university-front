import "./SideBar.css";
import { Link } from "react-router-dom";
function SideBar() {
  return (
    <nav className="sidebar h-[100vh] w-[30rem] pt-[3rem] pr-[1rem] pb-0 pl-[1rem] bg-[#000b31]">
      <header className="header-nav">
        <div className="image-text flex">
          <span className="min-w-[60px] flex justify-center items-center">
            <img
              className="w-[45px]"
              src="/src/assets/img/icon-nj.png"
              alt="logo"
            />
          </span>
          <div className="text header-text flex flex-col">
            <span className="text-3xl font-extrabold">Panel de control</span>
            <span className="profession">Administrador</span>
          </div>
        </div>
      </header>
      <div className="h-[85%] flex justify-between flex-col">
        <div className="mt-20">
          <ul className="menu-links">
            <li className="flex h-[50px] items-center mt-[10px]">
              <a
                href="#"
                className="w-full h-full rounded-xl flex items-center"
              >
                <i className="fa-solid fa-house flex justify-center min-w-[60px]"></i>
                <span className="text">Inicio</span>
              </a>
            </li>
            <li className="flex h-[50px] items-center mt-[10px]">
              <a
                href="#"
                className="w-full h-full rounded-xl flex items-center"
              >
                <i className="fa-solid fa-clock-rotate-left flex justify-center min-w-[60px]"></i>
                <span className="text nav-text">Historial</span>
              </a>
            </li>
            <li className="flex h-[50px] items-center mt-[10px]">
              <a
                href="#"
                className="w-full h-full rounded-xl flex items-center"
              >
                <i className="fa-solid fa-gear flex justify-center min-w-[60px]"></i>
                <span className="text nav-text">Configuracion</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="bottom-content">
          <li className="flex h-[50px] items-center mt-[10px] list-none">
            <Link
              to="/login"
              className="w-full h-full rounded-xl flex items-center"
            >
              <i className="fa-solid fa-right-from-bracket flex justify-center min-w-[60px]"></i>
              <span className="text nav-text">Salir</span>
            </Link>
          </li>
        </div>
      </div>
    </nav>
  );
}

export default SideBar;
