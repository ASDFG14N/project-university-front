/* eslint-disable react/prop-types */

function Row({ data, handleEditButton, handleDeleteButton }) {
  let type;
  switch (data.type) {
    case 0:
      type = "TV";
      break;
    case 1:
      type = "Pelicula";
      break;
    case 2:
      type = "OVA";
      break;
    default:
      break;
  }
  return (
    <tr className="border-b bg-[#1f284a] hover:bg-[#1f284a8c] border-gray-700">
      <td className="w-4 p-4">{data.anime_id}</td>
      <td className="pl-[14px]">
        <img
          src={`/src/assets/posters/${data.poster_url}`}
          alt=""
          className="object-cover w-[60px] h-[85px]"
        />
      </td>
      <td className="px-6 py-4 font-medium whitespace-nowrap text-white max-w-[330px] text-ellipsis overflow-hidden">
        {data.title}
      </td>
      <td className="py-4 px-6">{type}</td>
      <td className="px-6 py-4">{data.creation_date}</td>
      <td className="px-6 py-4">
        <button
          onClick={handleEditButton}
          className="bg-[#0072fa] rounded-md text-white py-[5px] px-[5px] text-2xl"
          value={data.anime_id}
        >
          <i className="fa-solid fa-pen-to-square mr-2"></i>Editar
        </button>
      </td>
      <td className="px-6 py-4">
        <button
          className="bg-red-600 rounded-md items-center text-white py-[5px] px-[5px] text-2xl"
          onClick={handleDeleteButton}
        >
          <i className="fa-solid fa-trash mr-2"></i>Eliminar
        </button>
      </td>
    </tr>
  );
}

export default Row;
