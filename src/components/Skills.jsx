import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNetworkWired,
  faLayerGroup,
  faAsterisk,
  faLaptop,
  faUserGear,
  faMedal,
} from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  return (
    // <section id="skills" className="p-20 bg-gray-100 text-center">
    //   <h2 className="text-3xl font-bold mb-4">Habilidades</h2>
    //   <div className="flex justify-center space-x-10 p-10">
    //     <span className="p-4 bg-blue-500 text-white rounded">JavaScript</span>
    //     <span className="p-4 bg-green-500 text-white rounded">React</span>
    //     <span className="p-4 bg-purple-500 text-white rounded">Node.js</span>
    //     <span className="p-4 bg-yellow-500 text-white rounded">MongoDB</span>
    //   </div>
    // </section>

    <section id="skills" className="bg-gray-100 py-24">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Certificaciones */}
          <div className="p-6 bg-white shadow-lg rounded-lg transition-transform hover:scale-105 duration-300">
            <i className="material-symbols-outlined text-blue-500 text-6xl">
              workspace_premium
            </i>
            <p className="text-xl font-semibold mt-4 mb-6">Certificaciones</p>
            <ul className="space-y-4 text-justify">
              <li className="text-gray-700">
                <FontAwesomeIcon icon={faNetworkWired} size="1" /> MTCNA de
                MikroTik: Experto en redes y administración de equipos MikroTik.
              </li>
              <li className="text-gray-700">
                <FontAwesomeIcon
                  icon={faLayerGroup}
                  size="1"
                  className="pr-1"
                />
                Programador Full Stack: Habilidades avanzadas en el desarrollo
                de aplicaciones web.
              </li>
              <li className="text-gray-700">
                <FontAwesomeIcon icon={faUserGear} size="1" className="pr-1" />{" "}
                ITILv3: Certificación en IT Service Management para optimizar
                procesos y mejorar la entrega de servicios.
              </li>
              <li className="text-gray-700">
                <FontAwesomeIcon icon={faAsterisk} size="1" className="pr-1" />{" "}
                Asterisk: Especialista en implementación y configuración de
                sistemas de telefonía VoIP.
              </li>
              <li className="text-gray-700">
                <FontAwesomeIcon icon={faLaptop} size="1" className="pr-1" />
                Linux: Amplios conocimientos en administración y configuración
                de sistemas Linux.
              </li>
            </ul>
            <div className="flex flex-wrap justify-center mt-4 space-x-2 space-y-2">
              <span className="badge bg-blue-200 text-blue-800 px-3 py-1 rounded-full">
                Full Stack
              </span>
              <span className="badge bg-blue-200 text-blue-800 px-3 py-1 rounded-full">
                Mikrotik
              </span>
              <span className="badge bg-blue-200 text-blue-800 px-3 py-1 rounded-full">
                ITIL V3
              </span>
              <span className="badge bg-blue-200 text-blue-800 px-3 py-1 rounded-full">
                Linux
              </span>
              <span className="badge bg-blue-200 text-blue-800 px-3 py-1 rounded-full">
                CCTV y Alarmas
              </span>
            </div>
          </div>

          {/* Estudios */}
          <div className="p-6 bg-white shadow-lg rounded-lg transition-transform hover:scale-105 duration-300">
            <i className="material-symbols-outlined text-blue-500 text-6xl">
              menu_book
            </i>
            <p className="text-xl font-semibold mt-4 mb-6">Estudios</p>
            <p className="text-gray-700">
              <p>
                <FontAwesomeIcon icon={faMedal} size="1" className="pr-1" />
                Ingenieria Electronica / 2011
              </p>{" "}
              <br />{" "}
              <p>
                <FontAwesomeIcon icon={faMedal} size="1" className="pr-1" />{" "}
                Diplomado en Programacion / 2023
              </p>
            </p>
            <div className="flex flex-wrap justify-center mt-4 space-x-2 space-y-2">
              <span className="badge bg-blue-200 text-blue-800 px-3 py-1 rounded-full">
                Ingeniería
              </span>
              <span className="badge bg-blue-200 text-blue-800 px-3 py-1 rounded-full">
                Frontend & Backend
              </span>
              <span className="badge bg-blue-200 text-blue-800 px-3 py-1 rounded-full">
                Linux Operator
              </span>
            </div>
          </div>

          {/* Desarrollo */}
          <div className="p-6 bg-white shadow-lg rounded-lg transition-transform hover:scale-105 duration-300">
            <i className="material-symbols-outlined text-blue-500 text-6xl">
              laptop_chromebook
            </i>
            <p className="text-xl font-semibold mt-4 mb-6">Desarrollo</p>
            <p className="text-gray-700 text-justify">
              Soy un apasionado desarrollador con experiencia en la creación de
              soluciones web integrales. Destaco en el desarrollo frontend,
              utilizando React, HTML, CSS, Bootstrap y Tailwind para diseñar
              interfaces atractivas. En el backend, me especializo en Node.js,
              construyendo aplicaciones eficientes y escalables. Mi experiencia
              abarca tecnologías clave como JavaScript, potenciando
              interactividad y dinamismo. Además, soy experto en implementar
              soluciones avanzadas de Asterisk y sistemas de Respuesta de Voz
              Interactiva (IVR), fusionando desarrollo y comunicaciones.
            </p>
            <div className="flex flex-wrap justify-center mt-4 space-x-2 space-y-2">
              <span className="badge bg-blue-200 text-blue-800 px-3 py-1 rounded-full">
                HTML
              </span>
              <span className="badge bg-blue-200 text-blue-800 px-3 py-1 rounded-full">
                CSS
              </span>
              <span className="badge bg-blue-200 text-blue-800 px-3 py-1 rounded-full">
                Bootstrap
              </span>
              <span className="badge bg-blue-200 text-blue-800 px-3 py-1 rounded-full">
                Tailwind
              </span>
              <span className="badge bg-blue-200 text-blue-800 px-3 py-1 rounded-full">
                JavaScript
              </span>
              <span className="badge bg-blue-200 text-blue-800 px-3 py-1 rounded-full">
                Node JS
              </span>
              <span className="badge bg-blue-200 text-blue-800 px-3 py-1 rounded-full">
                Asterisk
              </span>
              <span className="badge bg-blue-200 text-blue-800 px-3 py-1 rounded-full">
                IVRs Avanzados
              </span>
              <span className="badge bg-blue-200 text-blue-800 px-3 py-1 rounded-full">
                Frontend
              </span>
              <span className="badge bg-blue-200 text-blue-800 px-3 py-1 rounded-full">
                Backend
              </span>
              <span className="badge bg-blue-200 text-blue-800 px-3 py-1 rounded-full">
                React - Vite
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
