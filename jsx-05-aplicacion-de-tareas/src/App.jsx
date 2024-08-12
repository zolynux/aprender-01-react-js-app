import React from 'react';
import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import TareaFormulario from './componentos/TareaFormulario';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="freecodecamp-logo-contenedor">
        <img
          src={freeCodeCampLogo}
          alt="Logo de freeCodeCamp"
          className="freecodecamp-logo"
        />
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis Tareas 📝</h1>

        <TareaFormulario />
      </div>
    </div>
  );
}

export default App;
