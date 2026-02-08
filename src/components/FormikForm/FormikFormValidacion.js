import { useFormik } from "formik";
import React from "react";
import Swal from "sweetalert2";

const valoresIniciales = {
  email: "",
  password: "",
};
export default function FormikFormValidacion() {
  const formik = useFormik({
    initialValues: valoresIniciales,
    validate: (formulario) => {
      const errores = {};
      if (formulario.email.length === 0) {
        errores.email = "El email no puede estar vacio";
      }
      if (formulario.password.length === 0) {
        errores.password = "El password no puede estar vacio";
      }
      return errores;
    },
    onSubmit: (formulario) => {
      Swal.fire({
        title: "Login",
        text: "¿Seguro que quieres iniciar sesión?",
        icon: "question",
        confirmButtonText: "Ingresar",
        showCancelButton: true,
      }).then(() =>
        Swal.fire({
          title: "Exito",
          text: "Login exitoso",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => formik.handleReset()),
      );
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="formulario">
      <h2>LoginForm</h2>
      <div className="formulario__campos">
        <div className="formulario__campo">
          <label className="formulario__label" htmlFor="email">
            Email
          </label>
          <input
            className="formulario__input"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            {...formik.getFieldProps("email")}
          ></input>
          {formik.touched.email && formik.errors.email ? (
            <p className="formulario__errores">{formik.errors.email}</p>
          ) : null}
        </div>
        <div className="formulario__campo">
          <label className="formulario__label" htmlFor="password">
            Password
          </label>
          <input
            className="formulario__input"
            type="password"
            name="password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Password"
          ></input>
          {formik.touched.password && formik.errors.password && (
            <p className="formulario__errores">{formik.errors.password}</p>
          )}
        </div>
      </div>
      <button type="submit" className="formulario__boton">
        Enviar
      </button>
    </form>
  );
}
