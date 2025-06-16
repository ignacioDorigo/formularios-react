import React, { useState } from "react";

const useFormulario = (estadoInicial) => {
  const [formulario, setFormulario] = useState(estadoInicial);

  const actualizarFormulario = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const resetFormulario = (estadoInicial) => {
    setFormulario(estadoInicial);
  };

  return [formulario, actualizarFormulario, resetFormulario];
};

export default useFormulario;
