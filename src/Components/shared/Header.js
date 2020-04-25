import React, { useContext, useEffect } from 'react';
import {Navbar,Nav,NavDropdown,Container} from 'react-bootstrap'
import {Context} from '../../context/'
export default function Header() {
    const context = useContext(Context)

    useEffect(()=> {
        console.log(context)
    },[])
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
          context.token? 
          <NavDropdown title={context.user} id="basic-nav-dropdown">
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
