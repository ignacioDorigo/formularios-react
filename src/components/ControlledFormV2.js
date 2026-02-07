import React, { useState } from "react";

export default function ControlledFormV1() {
  const estadoInicial = { email: "", password: "" };
  const [formulario, setFormulario] = useState(estadoInicial);

  const actualizarFormulario = (e) => {
    const { target } = e;
    const { name, value } = target;

    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  const enviarFormulario = (e) => {
    e.preventDefault();
    console.log(formulario);
  };

  return (
    <form onSubmit={enviarFormulario} className="formulario" method="POST">
      <h1>Formulario Controlled V1</h1>

      <div className="formulario__campos">
        <div className="formulario__campo">
          <label htmlFor="email" className="formulario__label">
            Email
          </label>
          <input
            className="formulario__input"
            id="email"
            name="email"
            value={formulario.email}
            onChange={(e) => actualizarFormulario(e)}
            type="email"
            placeholder="Ingrese su correo"
            required
          ></input>
        </div>

        <div className="formulario__campo">
          <label htmlFor="password" className="formulario__label">
            Contraseña
          </label>
          <input
            className="formulario__input"
            id="password"
            name="password"
            value={formulario.password}
            onChange={(e) => actualizarFormulario(e)}
            type="password"
            placeholder="Ingrese su contraseña"
            autoComplete="true"
            required
          ></input>
        </div>
      </div>
      <button type="submit" className="formulario__boton">
        Enviar
      </button>
    </form>
  );
}
