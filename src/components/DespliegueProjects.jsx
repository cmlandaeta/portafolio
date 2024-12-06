import React, { useState } from "react";

const ProjectLinks = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks((prev) => !prev);
  };

  const projects = [
    { name: "Sistema Pos", url: "https://system-pos.onrender.com/" },
    { name: "Buscador de Clima", url: "https://appsearchclima.netlify.app/" },
    { name: "Buscador de Gitfs", url: "https://search-gif.onrender.com/" },
  ];

  return (
    <div className="project-links-container">
      <button
        onClick={toggleLinks}
        className="px-8 py-2 mt-9 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition-colors cursor-pointer"
      >
        {showLinks ? "Ocultar Proyectos" : "Ver + Despliegues"}
      </button>
      {showLinks && (
        <ul className="mt-4 space-y-2">
          {projects.map((project, index) => (
            <li key={index}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {project.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProjectLinks;
