import React, { useState } from "react";
import "./Formulario1.css";
import Swal from "sweetalert2";

const Formulario1 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const enviarFormulario = (e) => {
    const formulario = { email: email, password: password };
    console.log(formulario);
    e.preventDefault();
    Swal.fire({
      title: "¿Los datos son correctos?",
      text: "Verifica si los datos de la cuenta son los correctos",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Ingresar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Login Exitoso!",
          text: "Tus crendenciales son correctas",
          icon: "success",
        });
      }
    });
  };

  return (
    <form onSubmit={enviarFormulario} className="form">
      <h3 className="form__titulo">Login Form</h3>
      <div className="div__campos">
        <div className="div__campo">
          <label htmlFor="email" className="form__label">
            Email
          </label>
          <input
            placeholder="Email"
            id="email"
            className="form__input"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
          ></input>
        </div>

        <div className="div__campo">
          <label htmlFor="password" className="form__label">
            Password
          </label>

          <input
            placeholder="Password"
            id="password"
            className="form__input"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
          ></input>
        </div>
      </div>
      <button type="submit" className="form__button">
        Ingresar
      </button>
    </form>
  );
};

export default Formulario1;
