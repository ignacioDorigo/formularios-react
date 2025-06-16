import React, { useState } from "react";

const useContador = (estadoInicial) => {
  const [contador, setContador] = useState(estadoInicial);

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    setContador(contador - 1);
  };

  const resetContador = (estadoInicial) => {
    setContador(estadoInicial);
  };

  return [contador, sumar, restar, resetContador];
};

export default useContador;
