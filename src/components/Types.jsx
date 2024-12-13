import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";

const TypedFadeComponent = () => {
  const typedElement = useRef(null);
  const [fadeClass, setFadeClass] = useState("fade-in");

  useEffect(() => {
    const options = {
      strings: [
        "Desarrollador Frontend y Backend.",
        "Además, soy experto en implementar soluciones avanzadas de VOIP.",
        "Integrando prácticas DevOps como gestión de infraestructura con herramientas como Docker, CI/CD, Despliegue y monitoreo.",
        "Fusionando desarrollo y comunicaciones para Contact Center y IPPBX.",
      ],
      typeSpeed: 50,
      backSpeed: 85,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      preStringTyped: (arrayPos, self) => {
        // Antes de cambiar la palabra, aplicamos la clase fade-out
        setFadeClass("fade-out");
      },
      onStringTyped: (arrayPos, self) => {
        // Cuando la palabra está completamente escrita, aplicamos la clase fade-in
        setFadeClass("fade-in");
      },
    };

    const typed = new Typed(typedElement.current, options);

    // Limpiar el efecto Typed al desmontar el componente
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className={`text-2xl font-bold ${fadeClass}`}>
      <span className="typed-text typed-cursor" ref={typedElement}></span>
    </div>
  );
};

export default TypedFadeComponent;
