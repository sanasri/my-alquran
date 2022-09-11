import { NavLink } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, Link } from "react-router-dom";
import "./Navbar.css";

function Navbars() {
  return (
    <>
      <Navbar className="Navbars">
        <Container>
          <Navbar.Brand href="#home">My AlQuran</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Ayat">Ayat</Nav.Link>
            <Nav.Link href="/Surat">Surat</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <Outlet />
    </>
  );
}

export default Navbars;
