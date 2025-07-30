import React, { useState } from "react";
import "./Formulario2.css";

const estadoInicial = { nombre: "", apellido: "", email: "", password: "" };

const Formulario2 = () => {
  const [formulario, setFormulario] = useState(estadoInicial);

  const actualizarFormulario = (eventito) => {
    const campoCambia = eventito.target.name;
    const nuevoValor = eventito.target.value;
    setFormulario({ ...formulario, [campoCambia]: nuevoValor });
  };

  const enviarFormulario = async (eventito) => {
    try {
      eventito.preventDefault();
      console.log(formulario);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="form" onSubmit={enviarFormulario}>
      <h2 className="form__titulo">Login Form</h2>
      <div className="form__campos">
        {/* Inicio campo */}
        <div className="form__campo">
          <label className="form__label" htmlFor="nombre">
            Nombre
          </label>
          <input
            className="form__input"
            id="nombre"
            placeholder="Nombre"
            onChange={actualizarFormulario}
            name={"nombre"}
            type="text"
            required
          ></input>
        </div>
        {/* Fin Campo */}

        {/* Inicio campo */}
        <div className="form__campo">
          <label className="form__label" htmlFor="apellido">
            Apellido
          </label>
          <input
            className="form__input"
            id="apellido"
            placeholder="Apellido"
            onChange={actualizarFormulario}
            name={"apellido"}
            type="text"
            required
          ></input>
        </div>
        {/* Fin Campo */}

        {/* Inicio campo */}
        <div className="form__campo">
          <label className="form__label" htmlFor="email">
            Email
          </label>
          <input
            className="form__input"
            id="email"
            placeholder="Email"
            onChange={actualizarFormulario}
            name={"email"}
            type="email"
            required
          ></input>
        </div>
        {/* Fin Campo */}

        {/* Inicio campo */}
        <div className="form__campo">
          <label className="form__label" htmlFor="password">
            Password
          </label>
          <input
            className="form__input"
            id="password"
            placeholder="Password"
            onChange={actualizarFormulario}
            name={"password"}
            type="password"
            required
          ></input>
        </div>
        {/* Fin Campo */}
      </div>
      <button className="form__button" type="submit">
        Ingresar
      </button>
    </form>
  );
};

export default Formulario2;
