import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import ChatWithBot from "./Bot";

const Contact = () => {
  const handleClick = (pn) => {
    switch (pn) {
      case 1:
        window.open(
          "https://github.com/cmlandaeta",
          "_blank",
          "noopener,noreferrer"
        );
        break;

      case 2:
        window.open(
          "https://www.linkedin.com/in/carlos-landaeta-dev/",
          "_blank",
          "noopener,noreferrer"
        );
        break;

      case 3:
        window.open(
          "https://fr-assistant-interactive-profile.onrender.com",
          "_blank",
          "noopener,noreferrer"
        );
        break;

      case 4:
        window.open(
          "mailto:cmlandaeta@gmail.com",
          "_blank",
          "noopener,noreferrer"
        );
        break;

      default:
        break;
    }
  };
  return (
    // <section id="contact" classNameName="p-10 text-center bg-gray-100">
    //   <h2 classNameName="text-3xl font-bold mb-4">Contacto</h2>
    //   <a>
    //     <button
    //       type="button"
    //       onClick={handleClick}
    //       classNameName="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-20 py-5 text-center me-2 mb-2 transition-transform transform hover:scale-105 cursor-pointer"
    //     >
    //       Contactame Por mi Asistente Virtual
    //     </button>
    //   </a>
    // </section>

    <section id="contact" className="bg-gray-100 py-10">
      <div className="container mx-auto max-w-6xl px-6">
        {/* <!-- Rectángulo azul con contenido centrado --> */}
        <div className=" rounded-lg shadow-lg py-10 px-8 md:flex justify-between items-center">
          {/* <!-- Título --> */}
          <div className=" animate-fade-right animate-infinite animate-duration-500 mb-6 md:mb-0 md:w-1/3">
            <h2 className=" text-gray-700 text-4xl font-bold text-center md:text-left ">
              [ Hablemos ]
            </h2>
          </div>
          {/* <!-- Descripción --> */}
          <div className="md:w-1/3 text-gray-700 text-lg text-justify leading-relaxed mb-6 md:mb-0  md:text-center">
            <p>
              Contactame para iniciar tu Proyecto. Estoy seguro de que podemos
              trabajar juntos y generar proyectos increíbles.
            </p>
          </div>
          {/* <!-- Botón --> */}
          <div className="md:w-1/3 flex justify-center md:justify-end ">
            <button
              onClick={() => handleClick(3)}
              id="regbtn"
              type="button"
              className="animate-bounce animate-infinite animate-duration-700  bg-transparent border-2 border-blue-600 text-red-600 font-bold py-3 px-6 rounded-full hover:bg-white hover:text-blue-600  duration-300 ease-in-out transition-transform transform hover:scale-105 cursor-pointer"
            >
              Mi Asistente Virtual
              <i className="material-symbols-outlined ml-2 animate-bounce animate-infinite animate-duration-300">
                call
              </i>
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center space-x-6 mt-10">
        {/* GitHub */}
        <a
          onClick={() => handleClick(1)}
          className="text-gray-600 hover:text-black transition-colors duration-300 cursor-pointer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>

        {/* LinkedIn */}
        <a
          onClick={() => handleClick(2)}
          className="text-blue-600 hover:text-blue-800 transition-colors duration-300 cursor-pointer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>

        {/* Email */}
        <a
          onClick={() => handleClick(4)}
          className="text-gray-600 hover:text-red-600 transition-colors duration-300 cursor-pointer"
        >
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
        <a
          onClick={() => handleClick(5)}
          className="text-gray-600 hover:text-red-600 transition-colors duration-300 cursor-pointer"
        >
          <FontAwesomeIcon icon={faRobot} size="2x" />
        </a>
        <div className="fixed bottom-5 right-5 p-4 bg-white shadow-lg rounded-md">
          <ChatWithBot />
        </div>
      </div>
    </section>
  );
};

export default Contact;
