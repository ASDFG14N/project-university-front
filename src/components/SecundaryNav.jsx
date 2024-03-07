/* eslint-disable react/prop-types */
import SearchBox from "../components/SeachBox/SearchBox";
import Dropdown from "../components/Dropdown";

function SecundaryNav({ isHovered, handleMouseEnter, handleMouseLeave }) {
  return (
    <div className="flex items-center gap-16">
      <SearchBox />
      <div className="cursor-pointer">
        <i className="fa-regular fa-bell text-4xl ml-28"></i>
      </div>
      <div
        className="h-[6rem] flex items-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          className="avatar w-14 h-14 rounded-lg cursor-pointer"
          src="/src/assets/img/avatar.png"
          alt="avatar"
        />
        <i className="fa-solid fa-caret-down text-xl ml-5"></i>
        <Dropdown isVisible={isHovered}></Dropdown>
      </div>
    </div>
  );
}

export default SecundaryNav;
