import React from 'react';
import '../hojas-de-estilos/Contador.css';

const Contador = ({ numClics }) => {
  return <div className="contador">{numClics}</div>;
};

export default Contador;
