import { Container, Nav, Navbar } from "react-bootstrap"
import Logo from '../../assets/desenvolvedor.png'
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
              <Nav.Link href="#section-presentation">Apresentação</Nav.Link>
              <Nav.Link href="#section-about">Sobre</Nav.Link>
              <Nav.Link href="#section-projects">Projetos</Nav.Link>
              <Nav.Link href="#section-social">Contato</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default PageHeader