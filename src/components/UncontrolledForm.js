const UncontrolledForm = () => {
  const enviarFormulario = (e) => {
    e.preventDefault();
    // Agaramos el form
    const formulario = e.target;
    // Hcemos un form data de los inputs y values del form, tienen que tener el atributo name
    const formularioFormData = new FormData(formulario);
    // Creamos un array a partir de ese form data
    const formularioArray = Array.from(formularioFormData);
    // Creamos un objeto a partir de ese array
    const formularioObjeto = Object.fromEntries(formularioArray);
    console.log(formularioObjeto);
  };
  return (
    <form className="formulario" onSubmit={enviarFormulario} method="POST">
      <h1>Formulario Login</h1>

      <div className="formulario__campos">
        <div className="formulario__campo">
          <label className="formulario__label" htmlFor="email">
            Email
          </label>
          <input
            className="formulario__input"
            placeholder="Ingrese su correo"
            type="email"
            name="email"
            id="email"
            autoComplete="true"
          ></input>

          <label className="formulario__label" htmlFor="password">
            Contraseña
          </label>
          <input
            autoComplete="true"
            className="formulario__input"
            placeholder="Ingrese su contraseña"
            type="password"
            name="password"
            id="password"
          ></input>
        </div>
      </div>
      <button type="submit" className="formulario__boton">
        Enviar
      </button>
    </form>
  );
};

export default UncontrolledForm;
