import Table from "../components/Table";
import SideBar from "../components/SideBar/SideBar";
import FormAnime from "../components/FormAnime/FormAnime";
import { formVisibility } from "../components/formVisibility";
import { useEffect, useState } from "react";
import { useAnimes } from "../hooks/useAnimes";

function AdminPage() {
  const { animes, getAnimes } = useAnimes();
  //Cuando recarga la pagina hace la peticion al backend
  useEffect(() => {
    getAnimes();
  }, [getAnimes]);

  const [query, setQuery] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    document.getElementsByName("name")[0].value = "";
    document.getElementsByName("type")[0].selectedIndex = 0;
    document.getElementsByName("status")[0].selectedIndex = 0;
    document.getElementsByName("year")[0].selectedIndex = 0;
    document.getElementsByName("synopsis")[0].value = "";
    //document.getElementsByName("genres")[0].value = "";
    formVisibility();
  };

  return (
    <div className="flex">
      {/* Parte izquierda */}
      <SideBar />
      {/* Solo se muestra caudno está activo */}
      <FormAnime />
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-[98%] h-[92%] max-w-[98%] max-h-[92%] bg-[#000b31]">
          <div className="flex justify-between px-16 py-5">
            <div>
              <span className="mr-8">Publicaciones</span>
              {/* Boton para agregar un nuevo anime */}
              <button
                className="bg-sky-600 px-5 py-1 
              rounded-md mr-8 hover:bg-sky-700 transition-colors"
                onClick={handleClick}
              >
                <i className="fa-solid fa-plus mr-2"></i>Nuevo
              </button>
              {/* Boton para ordenar la tabla*/}
              <button
                className="bg-purple-600 px-5 py-1 rounded-md hover:bg-purple-700 
              transition-colors"
              >
                <i className="fa-solid fa-sort mr-2"></i>Ordenar
              </button>
            </div>
            <div className="flex gap-4 items-center">
              <input
                type="text"
                className="text-black pl-3 py-1"
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
              />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <div className="w-full overflow-y-scroll max-h-[92%]">
            <Table animes={animes} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
