// @vendors
import { Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();

  const isHomeActive = location.pathname === "/home";

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="my-10 px-2 d-flex justify-content-between fluid"
    >
      <Navbar.Brand>Task Manager</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link
            as={Link}
            to="/home"
            className={isHomeActive ? "active" : ""}
          >
            Home
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
