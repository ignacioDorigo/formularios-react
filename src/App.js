// import React, { useState } from "react";
import { useState } from "react";
import "./App.css";
import GestorUsuario from "./components/GestorUsuario/GestorUsuario";
import Usuario from "./components/Usuario/Usuario";
// import Formulario from "./components/Formulario";
// import UncontrolledForm from "./components/UncontrolledForm";
// import ControlledFormV1 from "./components/ControlledFormV1";
// import ControlledFormV2 from "./components/ControlledFormV2";

export default function App() {
  const [usuarios, setUsuarios] = useState([]);

  const agregarUsuario = (nuevoUsuario) => {
    setUsuarios([...usuarios, nuevoUsuario]);
    console.log(usuarios);
  };
  return (
    <main className="main">
      {/* <Formulario></Formulario> */}
      {/* <UncontrolledForm></UncontrolledForm> */}
      {/* <ControlledFormV1></ControlledFormV1> */}
      {/* <ControlledFormV2></ControlledFormV2> */}
      <GestorUsuario agregarUsuario={agregarUsuario}></GestorUsuario>
      <div>
        <ul>
          {usuarios.map((usuario, index) => (
            <Usuario key={index} usuario={usuario}></Usuario>
          ))}
        </ul>
      </div>
    </main>
  );
}
