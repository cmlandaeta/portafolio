import React, { useState, useEffect } from "react";
import { createBot } from "botui";
import { BotUI, BotUIMessageList, BotUIAction } from "@botui/react";
import axios from "axios";

//const myBot = createBot();

// const ChatWithBot = () => {
//   const [botui, setBotUI] = useState(null);

//   useEffect(() => {
//     myBot
//       .wait({ waitTime: 1000 })
//       .then(() => myBot.message.add({ text: "hello, what is your name?" }))
//       .then(() =>
//         myBot.action.set(
//           {
//             options: [
//               { label: "John", value: "john" },
//               { label: "Jane", value: "jane" },
//             ],
//           },
//           { actionType: "select" }
//         )
//       )
//       .then((data) =>
//         myBot.message.add({ text: `nice to meet you ${data.selected.label}` })
//       );
//   }, []);

//   const askBot = async (question) => {
//     const response = await fetch("http://localhost:3001/ask-discord-bot", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ question }),
//     });

//     const data = await response.json();
//     botui.message.add({ content: data.answer });
//   };

//   return (
//     <div>
//       <div id="botui-app"></div>
//       <input
//         type="text"
//         onKeyDown={(e) => {
//           if (e.key === "Enter") askBot(e.target.value);
//         }}
//         placeholder="Escribe tu pregunta aquí"
//         className="border p-2 rounded-md w-full shadow-sm focus:ring focus:ring-blue-300"
//       />
//     </div>
//   );
// };

// const ChatWithBot = () => {
//   const myBot = createBot();

//   useEffect(() => {
//     myBot
//       .wait({ waitTime: 1000 })
//       .then(() => myBot.message.add({ text: "¡Hola! ¿Cuál es tu nombre?" }))
//       .then(() =>
//         myBot.action.set(
//           {
//             options: [
//               { label: "John", value: "john" },
//               { label: "Jane", value: "jane" },
//             ],
//           },
//           { actionType: "select" }
//         )
//       )
//       .then((data) => {
//         const question = "¿Cuál es tu nombre?";
//         const answer = `¡Mucho gusto, ${data.selected.label}!`;
//         myBot.message.add({ text: answer });

//         // Llamar al backend para guardar la pregunta y respuesta usando Axios
//         askBot(question, answer);
//       });
//   }, []);

//   // Función para enviar los datos al backend y guardarlos en la BD usando Axios
//   const askBot = async (question, answer) => {
//     try {
//       const response = await axios.post(
//         "http://localhost:8001/ask-discord-bot",
//         {
//           question, // Enviamos la pregunta
//           answer, // Enviamos la respuesta
//         }
//       );

//       console.log(response.data.message); // Mensaje del backend
//     } catch (error) {
//       console.error("Error al guardar en la BD", error);
//     }
//   };

//   return (
//     <div>
//       <BotUI bot={myBot}>
//         <BotUIMessageList /> {/* Lista de mensajes */}
//         <BotUIAction /> {/* Acciones del bot */}
//       </BotUI>
//     </div>
//   );
// };

const ChatWithBot = () => {
  const myBot = createBot();
  const [userInput, setUserInput] = useState(""); // Estado para almacenar la pregunta del usuario

  useEffect(() => {
    myBot
      .wait({ waitTime: 1000 })
      .then(() =>
        myBot.message.add({ text: "¡Hola! ¿Tienes alguna pregunta?" })
      );
  }, []);

  // Función para enviar los datos al backend y guardarlos en la BD usando Axios
  const askBot = async (question) => {
    try {
      const response = await axios.post(
        "http://localhost:8001/ask-discord-bot",
        {
          question, // Enviamos la pregunta
        }
      );

      const answer = response.data.answer;
      myBot.message.add({ text: answer }); // Mostrar la respuesta en BotUI
    } catch (error) {
      console.error("Error al guardar en la BD", error);
    }
  };

  // Función para manejar la entrada del usuario y enviar la pregunta al bot al presionar Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && userInput.trim() !== "") {
      askBot(userInput); // Llamamos a la función con la pregunta del usuario
      setUserInput(""); // Limpiamos el input después de enviar la pregunta
    }
  };

  return (
    <div>
      <BotUI bot={myBot}>
        <BotUIMessageList /> {/* Lista de mensajes */}
      </BotUI>
      <div className="mt-4">
        <input
          type="text"
          value={userInput}
          onChange={(e) =>
            setUserInput(e.target.value)
          } /* Actualizar estado del input */
          onKeyDown={handleKeyDown} /* Enviar pregunta al presionar Enter */
          placeholder="Escribe tu pregunta aquí"
          className="border p-2 rounded-md w-full shadow-sm focus:ring focus:ring-blue-300"
        />
      </div>
    </div>
  );
};

export default ChatWithBot;
