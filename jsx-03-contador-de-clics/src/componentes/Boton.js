import React from 'react';
import '../hojas-de-estilos/Boton.css';

const Boton = ({ texto, esBotonDeClic, manejarClic }) => {
  return (
    <button
      className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
      onClick={manejarClic}
    >
      {texto}
    </button>
  );
};

export default Boton;
