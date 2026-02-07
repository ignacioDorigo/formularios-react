import React from "react";
import { useFormulario } from "../../hooks/useFormulario";
import Label from "../Label/Label";
import Input from "../Input/Input";
import Button from "../Button/Button";
const estadoInicial = { nombre: "", apellido: "", email: "" };

export default function GestorUsuario({ agregarUsuario }) {
  const { formulario, actualizarForm, resetFormulario } =
    useFormulario(estadoInicial);

  const enviarFormulario = (e) => {
    e.preventDefault();
    agregarUsuario(formulario);
    resetFormulario(estadoInicial);
  };
  return (
    <form className="formulario" onSubmit={enviarFormulario}>
      <h1>Gestor de Usuarios</h1>

      <div className="formulario__campos">
        {/* Nombre */}
        <div className="formulario__campo">
          <Label className="formulario__label" htmlFor="nombre">
            Nombre
          </Label>

          <Input
            className="formulario__input"
            name="nombre"
            id="nombre"
            type="text"
            placeholder="Nombre"
            value={formulario.nombre}
            // value={formulario.nombre}
            onChange={actualizarForm}
            required
          ></Input>
        </div>

        {/* Apellido */}
        <div className="formulario__campo">
          <Label className="formulario__label" htmlFor="apellido">
            Apellido
          </Label>
          <Input
            className="formulario__input"
            name="apellido"
            id="apellido"
            type="text"
            placeholder="Apellido"
            value={formulario.apellido}
            onChange={actualizarForm}
            required
          ></Input>
        </div>

        {/* Email */}
        <div className="formulario__campo">
          <Label className="formulario__label" htmlFor="email">
            Email
          </Label>
          <Input
            className="formulario__input"
            name="email"
            id="email"
            type="email"
            placeholder="Email@email.com"
            value={formulario.email}
            onChange={actualizarForm}
            autoComplete="false"
            required
          ></Input>
        </div>
      </div>

      <Button className="formulario__boton" type="submit">
        Enviar
      </Button>
    </form>
  );
}
