import React from "react";
import { useFormik } from "formik";
import "./FormikForm.css";

const FormikForm = () => {
  const formik = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      password: "",
    },
    onSubmit: (formulario) => {
      console.log(formulario);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="form">
      <h2 className="form__titulo">Formulario de Registro</h2>
      <div className="form__campos">
        <div className="form__campo">
          <label className="form__label" htmlFor="nombre">
            Nombre
          </label>
          <input
            className="form__input"
            id="nombre"
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formik.values.nombre}
            onChange={formik.handleChange}
          ></input>
        </div>

        <div className="form__campo">
          <label className="form__label" htmlFor="email">
            Email
          </label>
          <input
            className="form__input"
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
          ></input>
        </div>

        <div className="form__campo">
          <label className="form__label" htmlFor="password">
            Password
          </label>
          <input
            className="form__input"
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
          ></input>
        </div>
      </div>

      <button type="submit" className="form__button">
        Enviar
      </button>
    </form>
  );
};

export default FormikForm;
