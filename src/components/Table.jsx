/* eslint-disable react/prop-types */
import RowContainer from "../containers/RowContainer";

function Table({ animes, query }) {
  return (
    <table className="w-full text-left rtl:text-right text-white dark:text-gray-400">
      <thead className="text-2xl uppercase sticky top-0 bg-[#000b31]">
        <tr>
          <th scope="col" className="p-4">
            ID
          </th>
          <th scope="col" className="px-6 py-3">
            Poster
          </th>
          <th scope="col" className="px-6 py-3">
            Nombre
          </th>
          <th scope="col" className="px-6 py-3">
            Tipo
          </th>
          <th scope="col" className="px-6 py-3">
            Modificación
          </th>
          <th scope="col" className="px-6 py-3">
            Editar
          </th>
          <th scope="col" className="px-6 py-3">
            Eliminar
          </th>
        </tr>
      </thead>
      <tbody>
        {animes
          .filter((anime) => anime.title.toLowerCase().includes(query))
          .map((anime, index) => (
            <RowContainer key={index} data={anime} />
          ))}
      </tbody>
    </table>
  );
}
export default Table;
