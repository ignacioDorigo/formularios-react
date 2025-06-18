import { Form, Field, Formik, ErrorMessage, useFormik } from "formik";
import "./FormikFormComponentes.css";
import React from "react";

const FormikFormComponentes = () => {
  return (
    <Formik
      initialValues={{ nombre: "", email: "", password: "" }}
      onSubmit={(formulario) => {
        console.log(formulario);
      }}
    >
      <Form className="form">
        <h2 className="form__titulo">Formulario de Registro</h2>

        <div className="form__campos">
          <div className="form__campo">
            <label className="form__label" htmlFor="nombre">
              Nombre
            </label>
            <Field
              placeholder="Nombre"
              className="form__input"
              type="text"
              name="nombre"
              id="nombre"
            ></Field>
            {/* <ErrorMessage name="nombre" component={"div"}></ErrorMessage> */}
          </div>

          <div className="form__campo">
            <label className="form__label" htmlFor="email">
              Email
            </label>
            <Field
              placeholder="Email"
              className="form__input"
              type="email"
              name="email"
              id="email"
            ></Field>
            {/* <ErrorMessage name="email" component={"div"}></ErrorMessage> */}
          </div>

          <div className="form__campo">
            <label className="form__label" htmlFor="password">
              Contraseña
            </label>
            <Field
              placeholder="Contraseña"
              className="form__input"
              type="password"
              name="password"
              id="password"
            ></Field>
            {/* <ErrorMessage name="password" component={"div"}></ErrorMessage> */}
          </div>
        </div>
        <button type="submit" className="form__button">
          Enviar
        </button>
      </Form>
    </Formik>
  );
};

export default FormikFormComponentes;
