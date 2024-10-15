import React, { useState, useEffect } from "react";
import CV from "../assets/cv/cv.pdf";
import logo from "../assets/react.svg";

import "../App.css";

const Navbar = () => {
  // Estado para controlar si el menú está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const [isColor, setIsColor] = useState("scroll-off");

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsShrunk(false); // Si estamos en la parte superior, no hacer "shrink"
      setIsColor("scroll-off");
    } else {
      setIsShrunk(true); // Si hay desplazamiento, aplicar "shrink"
      setIsColor("scroll-on");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Limpiar el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Solo se ejecuta al montar y desmontar

  return (
    <nav
      id="mainNav"
      className={`fixed w-full z-10 transition-all duration-300 p-5 ${
        isShrunk ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <img
          className="h-15  p-2 will-change-filter transition-all duration-300 ease-in-out filter hover:drop-shadow-[0_0_2em_#61dafbaa] animate-spin-slow"
          src={logo}
          alt="logo react"
        />

        {/* Botón de menú hamburguesa, solo visible en pantallas pequeñas */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none bg-transparent border border-cyan-300 hover:border hover:border-slate-400 "
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Enlaces del menú, visibles en pantallas grandes */}
        <ul className="hidden md:flex space-x-6 mr-10">
          <li>
            <a
              href="#about"
              className={`hover:text-blue-500 nav-link ${isColor}`}
            >
              Acerca de mi
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={`hover:text-blue-500 nav-link ${isColor}`}
            >
              Habilidades
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`hover:text-blue-500 nav-link ${isColor}`}
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`hover:text-blue-500 nav-link ${isColor}`}
            >
              Contactame
            </a>
          </li>
          <li>
            <a
              href={CV}
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:text-blue-500 nav-link ${isColor}`}
            >
              CV
            </a>
          </li>
        </ul>
      </div>

      {/* Menú desplegable para pantallas pequeñas */}
      {isOpen && (
        <ul className="md:hidden mt-2 flex aling-end  justify-center space-x-4 space-y-4">
          <li>
            <a
              href="#about"
              className="block text-lg text-gray-700 hover:text-blue-500 text-center"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="block text-lg text-gray-700 hover:text-blue-500 text-center"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="block text-lg text-gray-700 hover:text-blue-500 text-center"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block text-lg text-gray-700 hover:text-blue-500 text-center "
            >
              Contact
            </a>
          </li>

          <li>
            <a
              onClick={CV}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 nav-link"
            >
              CV
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
