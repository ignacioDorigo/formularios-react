import React, { useEffect, useState } from "react";

export default function Pepe() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    buscarUsuarios();
  }, []);

  const buscarUsuarios = async () => {
    try {
      const datos = await fetch("https://jsonplaceholder.typicode.com/users");
      const respuesta = await datos.json();
      setUsuarios(respuesta)
      console.log(respuesta);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <ul>
        {usuarios.map((usuario, index) => (
          <li key={index}>{usuario.name}</li>
        ))}
      </ul>
    </div>
  );
}
