import React from "react";
import ivr from "../assets/img/IVRweb.png";
import virtual from "../assets/img/asistente.png";
import desp from "../assets/img/Despliegue.png";
import ProjectLinks from "./DespliegueProjects";

const Projects = () => {
  const handleClick = (pn) => {
    switch (pn) {
      case 1:
        window.open(
          "https://front-ivr-web-react1.onrender.com/",
          "_blank",
          "noopener,noreferrer"
        );
        break;

      case 2:
        window.open(
          "https://fr-assistant-interactive-profile.onrender.com/",
          "_blank",
          "noopener,noreferrer"
        );
        break;

      case 3:
        // window.open(
        //   "https://search-gif.onrender.com/",
        //   "_blank",
        //   "noopener,noreferrer"
        window.open(
          "soft-web-production.up.railway.app",
          "_blank",
          "noopener,noreferrer"
        );
        break;

      case 4:
        window.open(
          "https://github.com/cmlandaeta",
          "_blank",
          "noopener,noreferrer"
        );
        break;

      case 5:
        window.open(
          "https://www.linkedin.com/posts/carlos-landaeta-dev_reactjs-nodejs-docker-activity-7270505212866400256-Dv-X?utm_source=share&utm_medium=member_desktop",
          "_blank",
          "noopener,noreferrer"
        );
        break;

      default:
        break;
    }
  };
  return (
    <section id="projects" className="p-24 text-center bg-gray-100">
      <h2 className="text-4xl font-bold mb-4 pb-10 text-gray-700">
        Proyectos Recientes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Proyecto 1*/}
        <div className="border p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 bg-white">
          <h3 className="text-2xl font-bold text-gray-700 mb-2">
            App de Registro de Extension Telefónica (Softphone Web)
          </h3>
          <p className="mt-2 text-justify text-gray-600 mb-6">
            Aplicacion web diseñada para gestionar usuarios y extensiones de
            telefonía utilizando tecnologías de WebRTC y comunicación en tiempo
            real. En este Proyecto implemento herramientas y metodologías
            modernas, destacando mi experiencia en Docker, microservicios, y la
            gestión de infraestructura en la nube, pilares esenciales para
            soluciones escalables y eficientes.
          </p>
          <br />
          <p>
            <a
              onClick={() => handleClick(5)}
              className="cursor-pointer hover:underline text-blue-600"
            >
              Mira el Demo Aquí
            </a>
          </p>
          <img className="py-20" src={desp} alt="ivr-autogestion" />
          <div className="mt-4 flex justify-center">
            <a
              onClick={() => handleClick(3)}
              className="px-4 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Ver Despliegue
            </a>
          </div>
        </div>
        {/* Proyecto 2 */}
        <div className="border p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 bg-white">
          <h3 className="text-2xl font-bold text-gray-700 mb-2">
            IVR de Autogestion
          </h3>
          <p className="mt-2 text-justify text-gray-600 mb-24">
            Autogestion de tickets a traves de un IVR (Voz de Respuesta
            Interactiva), se solicita el ID del cliente y se responde a traves
            de Voz la creacion del ticket. La version completa esta disenada
            para funcionar como click to talk en una pagina web y hacer
            consultas a cualquier servicio de los clientes como PBX, CRM,
            Sistemas de Citas, Reservaciones, etc...
          </p>

          <img src={ivr} alt="ivr-autogestion" />
          <div className="mt-4 flex justify-center">
            <a
              onClick={() => handleClick(1)}
              className="px-4 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Ver Despliegue
            </a>
          </div>
        </div>

        {/* Proyecto 3*/}
        <div className="border p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 bg-white">
          <h3 className="text-2xl font-bold text-gray-700 mb-2">
            Asistente Virtual
          </h3>
          <p className="mt-2 text-gray-600 text-justify mb-16">
            Este asistente permite enviar mensajes a mi correo personal a través
            de opciones seleccionadas, brindando una comunicación rápida y
            eficiente. Además, puede ser fácilmente adaptado para agendar
            reuniones o acceder a salas de conferencias virtuales, ofreciendo
            una experiencia más personalizada y conveniente. Esta versión es más
            fluida y resalta la adaptabilidad del asistente.
          </p>

          <img src={virtual} alt="ivr-autogestion" />
          <div className="mt-4 flex justify-center">
            <a
              onClick={() => handleClick(2)}
              className="px-4 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Ver Despliegue
            </a>
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-center">
        <a>
          <ProjectLinks />
        </a>
      </div>

      <div className="mt-4 flex justify-center">
        <a
          onClick={() => handleClick(4)}
          className="px-8 py-2 mt-9 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition-colors cursor-pointer"
        >
          Ver + Proyectos
        </a>
      </div>
    </section>
  );
};

export default Projects;
