import { useFormik } from "formik";
import React from "react";

const valoresIniciales = { email: "", password: "" };
export default function FormikForm() {
  const formik = useFormik({
    initialValues: valoresIniciales,
    onSubmit: (formulario) => {
      console.log(formulario);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="formulario">
      <h2>Login</h2>
      <div className="formulario__campos">
        <div className="formulario__campo">
          <label className="formulario__label" htmlFor="email">
            Email
          </label>
          <input
            className="formulario__input"
            name="email"
            id="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          ></input>
        </div>

        <div className="formulario__campo">
          <label className="formulario__label" htmlFor="password">
            Password
          </label>
          <input
            className="formulario__input"
            name="password"
            id="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          ></input>
        </div>
      </div>
      <button type="submit" className="formulario__boton">
        Enviar
      </button>
    </form>
  );
}
