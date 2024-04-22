import logo from "./logo.svg";
import "./App.css";
import ButtonGroup from "./components/Button.Group";
import ImagesGroup from "./components/ImagesGroup";
import img from "../src/12364849-Planet-Earth-and-human-eye-Stock-Photo.jpg";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ButtonGroup className="first-group" />
        <ImagesGroup src={img} alt="image" className="img" />
      </header>
    </div>
  );
}

export default App;
