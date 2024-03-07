/* eslint-disable react/prop-types */
import PrimaryNav from "./PrimaryNav";
import SecundaryNavContainer from "../containers/SecundaryNavContainer";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <header
      style={{
        background:
          isScrolled
            ? "#000b31"
            : "linear-gradient(to top, transparent 0%, rgb(0, 0, 0, 0.4) 50%)",
      }}
      className="bg-[#000b31] py-4 fixed z-20 top-0 left-0 right-0"
    >
      <nav className="w-[95%] flex items-center mx-auto">
        <NavLink to="/">
          <img
            src="/src/assets/img/logo-ninja.png"
            alt=""
            className="max-w-36"
          />
        </NavLink>
        <ul id="navbar" className="flex items-center justify-between w-[95%]">
          <PrimaryNav />
          <SecundaryNavContainer />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
