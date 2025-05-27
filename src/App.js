import logo from "./logo.svg";
import "./App.css";
// import LoginSinFormik from "./components/LoginSinFormik/LoginSinFormik";
// import LoginConFormik from "./components/LoginConFormik/LoginConFormik";
// import LoginFormikValidacion from "./components/LoginFormikValidacion/LoginFormikValidacion";
import LoginFormikComponentes from "./components/LoginFormikComponentes/LoginFormikComponentes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LoginFormikComponentes />
      </header>
    </div>
  );
}

export default App;
