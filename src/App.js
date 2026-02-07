import React from "react";
import "./App.css";
// import Formulario from "./components/Formulario";
import UncontrolledForm from "./components/UncontrolledForm";
import ControlledFormV1 from "./components/ControlledFormV1";

export default function App() {
  return (
    <main className="main">
      {/* <Formulario></Formulario> */}
      {/* <UncontrolledForm></UncontrolledForm> */}
      <ControlledFormV1></ControlledFormV1>
    </main>
  );
}
