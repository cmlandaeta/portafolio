import React from "react";

const About = () => {
  return (
    <section id="about" className="p-24 text-center flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4">Conoce más de mí</h2>

      <p className=" text-lg  max-w-2xl text-justify">
        Soy Ingeniero Electronico con experiencia en telecomunicaciones y
        conocimientos sólidos en GNU/Linux, seguridad informática, redes IP y
        Telefonia IP. Cuento con habilidades como desarrollador web en React -
        Vite y Node.js para soluciones para IVR, VoIP, Asterisk y aplicaciones
        Web de voz. Puedo ayudarte implementar soluciones de comunicación de
        alta calidad en tu empresa. Puedo llevar tus soluciones de comunicación
        al siguiente nivel, la combinacion de mis habilidades en
        telecomunicaciones, seguridad informática y desarrollo de software te
        permitirá mejorar la eficiencia y efectividad de tus sistemas de
        comunicación de manera significativa.
      </p>
      <div>
        <hr className="w-32 border-t-2 border-slate-500 opacity-50 mt-2" />
      </div>

      <a href="#skills">
        <button
          type="button"
          className=" mt-9 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-blue-700 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Mis Habilidades
        </button>
      </a>
    </section>
  );
};

export default About;
