/* eslint-disable react/prop-types */
import "./SearchBox.css";

function SearchBox({setQuery}) {

  return (
    <div className="search">
      <input
        type="text"
        className="text-black search-text"
        placeholder="Buscar..."
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <div
        className="absolute top-0 left-0 flex justify-center items-center 
      cursor-pointer w-[4rem] h-[4rem]"
      >
        <i className="fa-solid fa-magnifying-glass text-[2rem]"></i>
      </div>
    </div>
  );
}

export default SearchBox;
