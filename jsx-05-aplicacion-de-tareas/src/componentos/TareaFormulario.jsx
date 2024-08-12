import React from 'react';
import '../hojas-de-estilo/TareaFormulario.css';

const TareaFormulario = (props) => {
  return (
    <form className="tarea-formulario">
      <input
        type="text"
        name="texto"
        id=""
        className="tarea-input"
        placeholder="Escribe una Tarea"
      />
      <button className="tarea-boton">Agregar Tarea</button>
    </form>
  );
};

export default TareaFormulario;
