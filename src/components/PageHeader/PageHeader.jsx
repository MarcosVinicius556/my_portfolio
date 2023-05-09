import { Container, Nav, Navbar } from "react-bootstrap"
import Logo from '../../assets/desenvolvedor.png'
import './page-header.css'

function PageHeader() {
  return (
    <>
      <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            My Port<span>folio</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Início</Nav.Link>
              <Nav.Link href="#link">Apresentação</Nav.Link>
              <Nav.Link href="#link">Sobre</Nav.Link>
              <Nav.Link href="#link">Projetos</Nav.Link>
              <Nav.Link href="#link">Contato</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default PageHeader