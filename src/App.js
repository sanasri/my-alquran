import logo from "./logo.svg";
import "./App.css";
import Navbars from "./components/Navbar";
import Surat from "./components/Surat";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import { Navbar } from "react-bootstrap";
import Tes from "./components/tes";
import Ayat from "./components/Ayat";
import { BrowserRouter, Routes, Switch, Route } from "react-router-dom";
import Ayat1 from "./components/Ayat1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbars />}>
          <Route path="Surat" element={<Surat />} />
          <Route path="Ayat" element={<Ayat />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import Surat from "./components/Surat";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="Surat" element={<Surat />} />
//           <Route path="contact" element={<Contact />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
