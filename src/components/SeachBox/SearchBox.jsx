import "./SearchBox.css";

function SearchBox() {
  return (
    <div className="search">
      <input
        type="text"
        className="text-black search-text"
        placeholder="Buscar..."
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
