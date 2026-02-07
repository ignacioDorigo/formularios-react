import { useState } from "react";

export const useFormulario = (estadoInicial) => {
  const [formulario, setFormulario] = useState(estadoInicial);

  const actualizarForm = (e) => {
    const { target } = e;
    const { name, value } = target;
    setFormulario({
      ...formulario,
      [name]: value,
    });
    // console.log(formulario);
  };

  const resetFormulario = (estadoInicial) => {
    setFormulario(estadoInicial);
  };

  return { formulario, actualizarForm, resetFormulario };
};
