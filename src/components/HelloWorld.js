import React, { useState } from "react";
import axios from "axios";

const HelloWorld = () => {
  const [mensaje, setMensaje] = useState("");

  const obtenerMensaje = async () => {
    try {
      const response = await axios.get("https://localhost:7075/api/HelloWorld"); 
      setMensaje(`${response.data.texto} - ${new Date(response.data.fechaHora).toLocaleString()}`);
    } catch (error) {
      console.error("Error al obtener el mensaje", error);
    }
  };

  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-semibold text-white mb-6">React con .NET 8</h1>
      <button
        onClick={obtenerMensaje}
        className="px-6 py-3 bg-blue-600 text-white text-xl font-semibold rounded-lg shadow-lg hover:bg-blue-700 transform hover:scale-105 transition duration-200 ease-in-out"
      >
        Obtener Mensaje
      </button>
      {mensaje && (
        <p className="mt-6 text-lg text-white font-medium">
          {mensaje}
        </p>
      )}
    </div>
  );
};

export default HelloWorld;
