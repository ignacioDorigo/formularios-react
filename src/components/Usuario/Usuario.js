import React from "react";
import "./Usuario.css";

export default function Usuario(props) {
  const { usuario, ...rest } = props;
  const { nombre, apellido, email } = usuario;
  return (
    <div className="usuario">
      <p className="usuario__nombre">
        <span className="usuario--bold">Nombre: </span>
        {nombre}
      </p>
      <p className="usuario__apellido">
        <span className="usuario--bold">Apellido: </span>
        {apellido}
      </p>
      <p className="usuario__email">
        <span className="usuario--bold">Email: </span>
        {email}
      </p>
    </div>
  );
}
