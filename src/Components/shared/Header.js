import React, { useContext, useEffect } from 'react';
import {Navbar,Nav,NavDropdown,Container} from 'react-bootstrap'
import {AuthContext} from '../../context/'
export default function Header() {
    const {auth} = useContext(AuthContext)
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
    <Navbar.Brand href="#home">Fluxo Caixa</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      </Nav>
      <Nav className="justify-content-between">
        {
          auth? 
          <NavDropdown title={auth.user} id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">MEUS DADOS</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">SAIR</NavDropdown.Item>
          </NavDropdown>
          : (
            <Nav.Link href="#link" className="btn btn-primary">CADASTRA-SE</Nav.Link>
          )
        }

      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
