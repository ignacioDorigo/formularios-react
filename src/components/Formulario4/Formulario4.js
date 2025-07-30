import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Formulario4.css";

const estadoInicial = { nombre: "", apellido: "", email: "", password: "" };

const validationSchema = Yup.object({
  nombre: Yup.string().required("El nombre es obligatorio"),
  apellido: Yup.string().required("El apellido es obligatorio"),
  email: Yup.string().email("Debe tener formato email").required("El email es obligatorio"),
  password: Yup.string().required("El password es obligatorio"),
});

const Formulario4 = () => {
  const formik = useFormik({
    initialValues: estadoInicial,
    validationSchema: validationSchema,
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
            onBlur={formik.handleBlur}
            id="nombre"
            type="text"
            name="nombre"
          ></input>
          {formik.errors.nombre && formik.touched.nombre ? (
            <div className="form__errores">{formik.errors.nombre}</div>
          ) : (
            <></>
          )}
        </div>
        {/* Fin Campo */}
        {/* Inicio Campo */}
        <div className="form__campo">
          <label className="form__label" htmlFor="apellido">
            Apellido
          </label>
          <input
            className="form__input"
            value={formik.values.apellido}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="apellido"
            type="text"
            name="apellido"
          ></input>
          {formik.errors.apellido && formik.touched.apellido ? (
            <div className="form__errores">{formik.errors.apellido}</div>
          ) : (
            <></>
          )}
        </div>
        {/* Fin Campo */}

        {/* Inicio Campo */}
        <div className="form__campo">
          <label className="form__label" htmlFor="email">
            Email
          </label>
          <input
            className="form__input"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="email"
            type="text"
            name="email"
          ></input>
          {formik.errors.email && formik.touched.email ? (
            <div className="form__errores">{formik.errors.email}</div>
          ) : (
            <></>
          )}
        </div>
        {/* Fin Campo */}
        {/* Inicio Campo */}
        <div className="form__campo">
          <label className="form__label" htmlFor="password">
            Password
          </label>
          <input
            className="form__input"
            value={formik.values.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            id="password"
            name="password"
          ></input>
          {formik.errors.password && formik.touched.password ? (
            <div className="form__errores">{formik.errors.password}</div>
          ) : (
            <></>
          )}
        </div>
        {/* Fin Campo */}
      </div>
      <button className="form__button" type="submit">
        Ingresar
      </button>
    </form>
  );
};

export default Formulario4;
