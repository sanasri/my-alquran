import logo from "./logo.svg";
import "./App.css";
import Navbars from "./components/Navbar";
import Surat from "./components/Surat";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import { Navbar } from "react-bootstrap";
import Tes from "./components/tes";

function App() {
  return (
    <div className="App">
      <Navbars />
      <Surat />
    </div>
  );
}

export default App;
