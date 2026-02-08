import { Form, Field, Formik, ErrorMessage, useFormik } from "formik";
// import "./FormikFormComponentes.css";
import React from "react";
import InputPassword from "../InputPassword/InputPassword";

const valoresIniciales = {
  email: "",
  password: "",
};

const validarFormulario = (formulario) => {
  const errores = {};
  if (formulario.email.length === 0) {
    errores.email = "El email no puede estar vacio";
  }
  if (formulario.password.length === 0) {
    errores.password = "El password no puede estar vacio";
  }
  return errores;
};

const FormikComponentes = () => {
  return (
    <Formik
      initialValues={valoresIniciales}
      validate={(formulario) => validarFormulario(formulario)}
      onSubmit={(formulario) => {
        console.log(formulario);
      }}
    >
      <Form className="formulario">
        <h2 className="form__titulo">Formulario de Registro</h2>

        <div className="formulario__campos">
          <div className="formulario__campo">
            <label className="formulario__label" htmlFor="emails">
              Email
            </label>
            <Field
              placeholder="Email"
              className="formulario__input"
              type="text"
              name="email"
              id="email"
            ></Field>
            <ErrorMessage
              name="email"
              component={"div"}
              className="formulario__errores"
            ></ErrorMessage>
          </div>

          {/* <div className="formulario__campo"> */}
            {/* <label className="formulario__label" htmlFor="password">
              Contraseña
            </label> */}
            <InputPassword name="password" className="formulario__input"></InputPassword>
            {/* <ErrorMessage name="password" component={"div"}></ErrorMessage> */}
          {/* </div> */}
        </div>
        <button type="submit" className="formulario__boton">
          Enviar
        </button>
      </Form>
    </Formik>
  );
};

export default FormikComponentes;
