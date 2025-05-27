import React from "react";
import "./LoginFormikValidacion.css";
import { useFormik } from "formik";

export default function LoginFormikValidacion() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (formulario) => {
      const errors = {};
      if (!formulario.email) {
        errors.email = "El email es obligatorio";
      }
      if (!formulario.password) {
        errors.password = "La contraseña es obligatoria";
      }
      return errors;
    },
    onSubmit: (formulario) => {
      console.log(formulario);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="formulario">
      <div className="div_campo">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          value={formik.values.email}
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="email"
        ></input>
        {formik.errors.email && formik.touched.email ? (
          <p className="error">{formik.errors.email} *</p>
        ) : null}
      </div>
      <div className="div_campo">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          value={formik.values.password}
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="password"
        ></input>
        {formik.errors.password && formik.touched.password ? (
          <p className="error">{formik.errors.password} *</p>
        ) : null}
      </div>
      <button type="submit" className="btn_ingresar">
        Ingresar
      </button>
    </form>
  );
}
