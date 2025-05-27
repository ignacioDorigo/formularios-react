import logo from "./logo.svg";
import "./App.css";
// import LoginSinFormik from "./components/LoginSinFormik/LoginSinFormik";
import LoginConFormik from "./components/LoginConFormik/LoginConFormik";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LoginConFormik />
      </header>
    </div>
  );
}

export default App;
