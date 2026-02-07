const Formulario = () => {
  const enviarFormulario = () => {
    console.log("Formulario enviado....");
  };

  return (
    <form className="formulario">
      <h1>Formulario</h1>

      <div className="formulario__campos">
        <div className="formulario__campo">
          <label className="formulario__label" htmlFor="email">
            Email
          </label>
          <input
            className="formulario__input"
            id="email"
            name="email"
            placeholder="Ingrese su correo"
            type="email"
          ></input>
        </div>

        <div className="formulario__campo">
          <label className="formulario__label" htmlFor="email">
            Email
          </label>
          <input
            className="formulario__input"
            id="email"
            name="email"
            placeholder="Ingrese su correo"
            type="email"
          ></input>
        </div>
      </div>

      <button type="submit" className="formulario__boton" onClick={enviarFormulario}>
        Enviar
      </button>
    </form>
  );
};

export default Formulario;
