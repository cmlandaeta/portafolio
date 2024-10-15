import picture from "../assets/react.svg";
import TypedFadeComponent from "./Types";

const Hero = () => {
  return (
    // <section className="h-screen flex flex-row justify-center items-center bg-gradient-to-r from-blue-500 via-purple-500 to-gray-400 text-white">
    //   <div className="basis-1/4">
    //     <img
    //       src={picture}
    //       alt="Tu Foto"
    //       className="rounded-full w-48 h-48 mb-6 "
    //     />

    //     <hr className="divider" />
    //     <h1 className="text-4xl font-bold">Hola, soy Carlos Landaeta</h1>
    //   </div>

    //   <div className="basis-1/2">
    //     <p className="text-xl mt-4">
    //       <span className="">
    //         <TypedFadeComponent />
    //       </span>
    //     </p>
    //   </div>

    //   <a href="#about">
    //     <button
    //       type="button"
    //       className=" mt-9 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-transparent rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
    //     >
    //       Conocer más
    //     </button>
    //   </a>
    // </section>

    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-950 via-blue-950 to-blue-900 text-white">
      <div className="flex flex-col items-center mb-8">
        {/* Primera fila: Imagen y texto "Hola, soy Carlos..." */}
        <img
          src={picture}
          alt="Tu Foto"
          className="rounded-full w-48 h-48 mb-6 shadow-lg border-4 border-white"
        />
        <h1 className="text-4xl text-slate-300 font-bold mb-4">
          Hola, soy Carlos Landaeta
        </h1>
        <hr className="w-32 border-t-2 border-white opacity-50 mt-2" />
      </div>

      {/* Segunda fila: Componente TypedFadeComponent con línea divisoria */}
      <div className="flex flex-row items-center space-x-4">
        <div className="flex-grow text-center">
          <p className="text-xl">
            <TypedFadeComponent />
          </p>
        </div>
      </div>

      {/* Botón "Conocer más" */}
      <a href="#about" className="mt-8">
        <button
          type="button"
          className="py-2.5 px-6 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-300 shadow-md hover:bg-gray-200 hover:text-blue-700 transition-all duration-300"
        >
          Conocer más
        </button>
      </a>
    </section>
  );
};

export default Hero;
