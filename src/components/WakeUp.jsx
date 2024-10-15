import { useEffect } from "react";

const Wakeup = () => {
  useEffect(() => {
    // Esto se ejecutará cuando el componente se monte
    const activarOtroFrontend = async () => {
      try {
        // Enviando una petición GET al otro frontend
        const response = await fetch(
          "https://front-ivr-web-react1.onrender.com",
          {
            method: "GET",
          }
        );

        const response2 = await fetch(
          "https://fr-assistant-interactive-profile.onrender.com/",
          {
            method: "GET",
          }
        );

        // Si quieres manejar la respuesta:
        const data = await response.json();
        console.log("Respuesta del otro frontend:", data);
      } catch (error) {
        console.error("Error al activar el otro frontend:", error);
      }
    };

    // Llamar la función para activar el otro frontend
    activarOtroFrontend();
  }, []); // Este efecto se ejecutará solo una vez cuando el componente se monte

  return <div>Activando otro frontend...</div>;
};

export default Wakeup;
