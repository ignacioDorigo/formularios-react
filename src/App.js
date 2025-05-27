import logo from "./logo.svg";
import "./App.css";
import LoginSinFormik from "./components/LoginSinFormik/LoginSinFormik";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LoginSinFormik />
      </header>
    </div>
  );
}

export default App;
