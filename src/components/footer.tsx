import { useAuth0 } from '@auth0/auth0-react';
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import LoginButton from './loginButton';
import LogoutButton from './logoutButton';

function Footer() {

  const { isAuthenticated } = useAuth0();

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">My company website</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/employee">Employees</Nav.Link>
            { isAuthenticated && <Nav.Link as={Link} to="/profile">My profile</Nav.Link> }
          </Nav>
          <Nav>
            { isAuthenticated ? <LogoutButton /> : <LoginButton /> }
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Footer;