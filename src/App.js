import React from "react";
import useFormulario from "./hooks/useFormulario";

const App = () => {
  const estadoInicial = { nombre: "", email: "" };
  const [formulario, actualizarFormulario, resetFormulario] =
    useFormulario(estadoInicial);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(formulario);
      }}
    >
      <div>
        <label htmlFor="nombre">Nombre</label>
        <input
          id="nombre"
          name="nombre"
          placeholder="Nombre"
          value={formulario.nombre}
          onChange={actualizarFormulario}
        ></input>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default App;
