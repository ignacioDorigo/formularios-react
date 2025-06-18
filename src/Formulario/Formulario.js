import React, { useState } from "react";
import "./Formulario.css";

const Formulario = () => {
  const estadoInicial = { nombre: "", email: "", password: "" };
  const [formulario, setFormulario] = useState(estadoInicial);

  const actualizarFormulario = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const enviarFormulario = (e) => {
    e.preventDefault();
    console.log(formulario);
  };

  return (
    <form onSubmit={enviarFormulario} className="form">
      <h2 className="form__titulo">Formulario de Registro</h2>
      <div className="form__campos">
        <div className="form__campo">
          <label className="form__label" htmlFor="nombre">
            Nombre
          </label>
          <input
            className="form__input"
            placeholder="Nombre"
            id="nombre"
            name="nombre"
            value={formulario.nombre}
            onChange={actualizarFormulario}
            type="text"
          ></input>
        </div>

        <div className="form__campo">
          <label className="form__label" htmlFor="email">
            Email
          </label>
          <input
            name="email"
            className="form__input"
            placeholder="Correo electronico"
            id="email"
            value={formulario.email}
            onChange={actualizarFormulario}
            type="email"
          ></input>
        </div>

        <div className="form__campo">
          <label className="form__label" htmlFor="password">
            Password
          </label>
          <input
            name="password"
            className="form__input"
            placeholder="Contraseña"
            id="password"
            value={formulario.password}
            onChange={actualizarFormulario}
            type="password"
          ></input>
        </div>
      </div>
      <button type="submit" className="form__button">
        Enviar
      </button>
    </form>
  );
};

export default Formulario;
