import React, { useState } from "react";
import "./LoginSinFormik.css";

export default function LoginSinFormik() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const ingresar = (e) => {
    e.preventDefault();
    console.log(`email : ${email}`);
    console.log(`password : ${password}`);
  };
  return (
    <form onSubmit={ingresar} className="formulario">
      <div className="div_campo">
        <label htmlFor="email">Email</label>
        <input
          placeholder="Email"
          id="email"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          type="text"
        ></input>
      </div>
      <div className="div_campo">
        <label htmlFor="password">Password</label>
        <input
          placeholder="Contraseña"
          id="password"
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        ></input>
      </div>

      <button type="submit" className="btn_ingresar">Ingresar</button>
    </form>
  );
}
