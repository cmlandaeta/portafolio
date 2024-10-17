import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const handleClick = () => {
    window.open(
      "https://fr-assistant-interactive-profile.onrender.com/",
      "_blank",
      "noopener,noreferrer"
    );
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
          <div className="mb-6 md:mb-0 md:w-1/3">
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
              onClick={handleClick}
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
          href="https://github.com/cmlandaeta"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-black transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/carlos-landaeta-dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>

        {/* Email */}
        <a
          href="mailto:venezziolatelecomtic@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-red-600 transition-colors duration-300"
        >
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
