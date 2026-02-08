import { useFormik } from "formik";
import React from "react";
import { validationSchema } from "./validacionesYup";

const estadoInicial = {
  nombre: "",
  email: "",
  password: "",
  edad: "",
  telefono: "",
  genero: "",
};

export default function FormikYup() {
  const formik = useFormik({
    initialValues: estadoInicial,
    validationSchema: validationSchema,
    onSubmit: (formulario) => {
      console.log(formulario);
    },
  });

  return (
    <form className="formulario" onSubmit={formik.handleSubmit}>
      <h2>Register Form</h2>

      <div className="formulario__campos">
        {/* Nombre */}
        <div className="formulario__campo">
          <label className="formulario__label" htmlFor="nombre">
            Nombre
          </label>
          <input
            className="formulario__input"
            type="text"
            placeholder="Ingresá tu nombre"
            {...formik.getFieldProps("nombre")}
          />
          {formik.touched.nombre && formik.errors.nombre && (
            <div className="formulario__erorres">{formik.errors.nombre}</div>
          )}
        </div>

        {/* Email */}
        <div className="formulario__campo">
          <label className="formulario__label" htmlFor="email">
            Email
          </label>
          <input
            className="formulario__input"
            type="email"
            placeholder="ejemplo@mail.com"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="formulario__erorres">{formik.errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div className="formulario__campo">
          <label className="formulario__label" htmlFor="password">
            Password
          </label>
          <input
            className="formulario__input"
            type="password"
            placeholder="Ingresá tu contraseña"
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password && (
            <div className="formulario__erorres">{formik.errors.password}</div>
          )}
        </div>

        {/* Edad */}
        <div className="formulario__campo">
          <label className="formulario__label" htmlFor="edad">
            Edad
          </label>
          <input
            className="formulario__input"
            type="number"
            min={1}
            placeholder="Tu edad"
            {...formik.getFieldProps("edad")}
          />
          {formik.touched.edad && formik.errors.edad && (
            <div className="formulario__erorres">{formik.errors.edad}</div>
          )}
        </div>

        {/* Teléfono */}
        <div className="formulario__campo">
          <label className="formulario__label" htmlFor="telefono">
            Teléfono
          </label>
          <input
            className="formulario__input"
            type="tel"
            placeholder="11 2345 6789"
            {...formik.getFieldProps("telefono")}
          />
          {formik.touched.telefono && formik.errors.telefono && (
            <div className="formulario__erorres">{formik.errors.telefono}</div>
          )}
        </div>

        {/* Género */}
        <div className="formulario__campo">
          <label className="formulario__label" htmlFor="genero">
            Género
          </label>
          <select
            className="formulario__input"
            {...formik.getFieldProps("genero")}
          >
            <option value="" disabled>
              Seleccioná una opción
            </option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
          </select>
          {formik.touched.genero && formik.errors.genero && (
            <div className="formulario__erorres">{formik.errors.genero}</div>
          )}
        </div>
      </div>

      <button className="formulario__boton" type="submit">
        Enviar
      </button>
    </form>
  );
}
