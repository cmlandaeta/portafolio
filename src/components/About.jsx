import React from "react";

const About = () => {
  return (
    <section id="about" className="p-24 text-center flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4">Conoce más de mí</h2>

      <p className=" text-lg  max-w-2xl text-justify">
        Soy Ingeniero Electronico, 15 años de experiencia en áreas de{" "}
        <span className="font-semibold">
          VOIP, redes, telecomunicaciones, Linux y seguridad informática, con
          habilidades en desarrollo full stack en ReactJs, NodeJs, Pyhton,
          MongoDB, Mysql y administración de sistemas.
        </span>{" "}
        Este recorrido profesional me ha permitido evolucionar hacia un perfil
        de Desarrollo y Operaciones por lo que actualmente, estoy integrando
        prácticas de{" "}
        <span className="font-semibold">
          {" "}
          DevOps, como gestión de infraestructura con herramientas como Docker,
          CI/CD, Despliegue y monitoreo.
        </span>{" "}
        Lo que contribuye con mi pasión por mejorar procesos de desarrollo,
        aumentar la confianza en las aplicaciones, responder mejor a las
        necesidades de los clientes y alcanzar los objetivos comerciales más
        rápido.
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
