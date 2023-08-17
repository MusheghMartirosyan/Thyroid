import { NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavBar.css"

const NavBar = () => {
  return (
    <>
      <Navbar className='navbar'>
        <Container>
            <Nav className="me-auto nav-items">
                <Nav.Link href="#home">Thyroid gland</Nav.Link>
                <Nav.Link href="#features">IR treatment</Nav.Link>
                <Nav.Link href="#pricing">Ablation</Nav.Link>
                <Nav.Link href="#pricing">Biopsy</Nav.Link>
                <Nav.Link href="#pricing">Useful articles</Nav.Link>
                <Nav.Link href="#pricing">Doctors</Nav.Link>
                <Nav.Link href="#pricing">Gallery</Nav.Link>
                <Nav.Link href="#pricing">Where to find us</Nav.Link>
                <button className='nav-button btn'>Submit my medical records</button>
                <NavDropdown title="ENG" id="nav-dropdown">
                    <NavDropdown.Item eventKey="4.1">հայերեն</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.2">русский</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar