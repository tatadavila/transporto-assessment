// @vendors
import { Container, Nav, Navbar } from "react-bootstrap";

export const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container
        className="m-0 py-0 pl-10 pr-0 d-flex justify-content-between align-items-center"
        fluid
      >
        <Navbar.Brand className="" href="#home">
          Task Manarger
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link>Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
