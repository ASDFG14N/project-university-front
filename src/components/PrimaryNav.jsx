/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import React from 'react';

function PrimaryNav() {
  const links = [
    { name: "Inicio", link: "/" },
    { name: "Animes", link: "/animes" },
    { name: "Películas", link: "/peliculas" },
    { name: "Populares", link: "/populares" },
    { name: "Acerca", link: "/about" },
  ];

  return (
    <div className="flex">
      {links.map(({ name, link }) => (
        <li  className="flex py-0 px-7 hover:text-gray-400 transition-colors" key={name}>
          <Link className="items-center text-2xl font-semibold" to={link}>{name}</Link>
        </li>
      ))}
    </div>
  );
}

export default PrimaryNav;
