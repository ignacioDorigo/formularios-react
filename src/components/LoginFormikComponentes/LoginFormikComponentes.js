import React from "react";
import "./LoginFormikComponentes.css";
import { ErrorMessage, Field, Form, Formik } from "formik";

export default function LoginFormikComponentes() {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(formulario) => console.log(formulario)}
    >
      <Form className="formulario">
        <div className="div_campo">
          <label htmlFor="email">Email</label>
          <Field
            className="campo_input"
            placeholder="Email"
            name="email"
            id="email"
            type="email"
          ></Field>
          <ErrorMessage name="email" component="div" className="error" />
        </div>

        <div className="div_campo">
          <label htmlFor="password">Password</label>
          <Field
            className="campo_input"
            placeholder="Contraseña"
            name="password"
            id="password"
            type="password"
          ></Field>
          <ErrorMessage name="password" component="div" className="error" />
        </div>

        <button className="btn_ingresar" type="submit">
          Ingresar
        </button>
      </Form>
    </Formik>
  );
}
