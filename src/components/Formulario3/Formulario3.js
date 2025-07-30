import React from "react";
import { useFormik } from "formik";

const estadoInicial = { nombre: "", apellido: "", email: "", password: "" };

const Formulario3 = () => {
  const formik = useFormik({
    initialValues: estadoInicial,
    onSubmit: async (formulario) => {
      try {
        console.log(formulario);
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="form">
      <h2 className="form__titulo">Formulario de Bienvenida</h2>
      <div className="form__campos">
        {/* Inicio Campo */}
        <div className="form__campo">
          <label className="form__label" htmlFor="nombre">
            Nombre
          </label>
          <input
            className="form__input"
            value={formik.values.nombre}
            onChange={formik.handleChange}
            id="nombre"
            type="text"
            required
            name="nombre"
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

export default Formulario3;
