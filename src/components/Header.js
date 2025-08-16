import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Header = ({ contact }) => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Ethan Vandal</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Navbar.Text className="mx-3">
              <FontAwesomeIcon icon={faPhone} className="me-2" />
              <a href={`tel:${contact.phone}`} className="text-white text-decoration-none">
                {contact.phone}
              </a>
            </Navbar.Text>
            <Navbar.Text>
              <FontAwesomeIcon icon={faEnvelope} className="me-2" />
              <a href={`mailto:${contact.email}`} className="text-white text-decoration-none">
                {contact.email}
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;