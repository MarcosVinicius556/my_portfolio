import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom";
import './page-header.css'

function PageHeader() {
  return (
    <>
      <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#section-presentation">
            <div className="header-info">
              <p className="name-logo">M</p> <p>Marcos Vinicius Angeli Costa</p>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to = "/">Apresentação</Nav.Link>
              <Nav.Link as={Link} to = "/about">Sobre</Nav.Link>
              <Nav.Link as={Link} to = "/projects">Projetos</Nav.Link>
              <Nav.Link as={Link} to = "/contact">Contato</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default PageHeader