import { Form, Formik, Field, ErrorMessage } from "formik";
import React from "react";
import "./Formulario5.css";
import * as Yup from "yup";

const estadoInicial = { nombre: "", apellido: "", email: "", password: "" };

const validationSchema = Yup.object({
  nombre: Yup.string().required("El nombre es obligatorio"),
  apellido: Yup.string().required("El apellido es obligatorio"),
  email: Yup.string().required("El email es obligatorio"),
  password: Yup.string().required("El password es obligatorio"),
});

export default function Formulario5() {
  return (
    <Formik
      initialValues={estadoInicial}
      onSubmit={(formulario) => console.log(formulario)}
      validationSchema={validationSchema}
    >
      <Form className="form">
        <h2 className="form__titulo">Formulario de Bienvenida</h2>
        <div className="form__campos">
          {/* Inicio Campo */}
          <div className="form__campo">
            <label className="form__label">Nombre</label>
            <Field className="form__input" name="nombre" />
            <ErrorMessage
              className="form__errores"
              name="nombre"
              component={"div"}
            />
          </div>

          {/* Fin de campo */}

          {/* Inicio Campo */}
          <div className="form__campo">
            <label className="form__label">Apellido</label>
            <Field className="form__input" name="apellido" />
            <ErrorMessage
              className="form__errores"
              name="apellido"
              component={"div"}
            />
          </div>

          {/* Fin de campo */}

          {/* Inicio Campo */}
          <div className="form__campo">
            <label className="form__label">Email</label>
            <Field className="form__input" name="email" />
            <ErrorMessage
              className="form__errores"
              name="email"
              component={"div"}
            />
          </div>

          {/* Fin de campo */}

          {/* Inicio Campo */}
          <div className="form__campo">
            <label className="form__label">password</label>
            <Field className="form__input" name="password" type="password" />
            <ErrorMessage
              className="form__errores"
              name="password"
              component={"div"}
            />
          </div>

          {/* Fin de campo */}
        </div>
        <button className="form__button" type="submit">
          Ingresar
        </button>
      </Form>
    </Formik>
  );
}
