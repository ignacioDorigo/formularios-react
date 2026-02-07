import React, { useState } from "react";

export default function ControlledFormV1() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const enviarFormulario = (e) => {
    e.preventDefault();
    const formulario = {};
    formulario.email = email;
    formulario.password = password;
    console.log(formulario);
  };

  const validarFormulario = (e) => [
    
  ]

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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
