import React from "react";
import "./LoginConFormik.css";
import { useFormik } from "formik";

export default function LoginConFormik() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
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
          placeholder="Email"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          type="email"
        ></input>
      </div>
      <div className="div_campo">
        <label htmlFor="password">Password</label>
        <input
          placeholder="Contraseña"
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          type="password"
        ></input>
      </div>
      <button type="submit" className="btn_ingresar">Ingresar</button>
    </form>
  );
}
