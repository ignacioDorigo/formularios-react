import React, { useState } from "react";

export default function ControlledFormV1() {
  const estadoInicial = {
    email: "",
    password: "",
    genero: "",
    genero2: "",
    terminos: false,
  };
  const [formulario, setFormulario] = useState(estadoInicial);

  const actualizarFormulario = (e) => {
    const { target } = e;
    const { name, value, type, checked } = target;

    if (type === "checkbox") {
      setFormulario({
        ...formulario,
        [name]: checked ? true : false,
      });
    } else {
      setFormulario({
        ...formulario,
        [name]: value,
      });
    }
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

        <div className="formulario__campo">
          <label className="formulario__label">Género</label>
          <select
            className="formulario__input"
            value={formulario.genero}
            onChange={(e) => actualizarFormulario(e)}
            name="genero"
          >
            <option value={""} disabled>
              --Seleccionar Género --
            </option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="Indefinido">Prefiero no decirlo</option>
          </select>
        </div>

        <div className="formulario__campo div__checkbox">
          <input
            className="formulario__checkbox"
            id="terminos"
            name="terminos"
            type="checkbox"
            // value={formulario.terminos}
            checked={formulario.terminos}
            onChange={(e) => actualizarFormulario(e)}
          ></input>
          <label className="formulario__label" htmlFor="terminos">
            Aceptar Términos
          </label>
        </div>

        {/* Este mucho no me acuerdo como se usa, pero casi siempre se puede hacer lo mismo con select */}
        <div className="formulario__campo">
          <p className="formulario__label">Género</p>

          <div className="div__aux__radio">
            <input
              type="radio"
              name="genero2"
              value="hombre"
              id="hombre"
              onChange={(e) => actualizarFormulario(e)}
            />

            <label htmlFor="hombre">Hombre</label>
          </div>

          <div className="div__aux__radio">
            <input
              type="radio"
              name="genero2"
              value="mujer"
              id="mujer"
              onChange={(e) => actualizarFormulario(e)}
            />

            <label htmlFor="mujer">Mujer</label>
          </div>

          <div className="div__aux__radio">
            <input
              type="radio"
              name="genero2"
              value="indefinido"
              id="indefinido"
              onChange={(e) => actualizarFormulario(e)}
            />
            <label htmlFor="indefinido">Indefinido</label>
          </div>
        </div>
      </div>

      <button type="submit" className="formulario__boton">
        Enviar
      </button>
    </form>
  );
}
