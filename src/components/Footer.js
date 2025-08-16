import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container className="text-center">
        <p>&copy; {new Date().getFullYear()} Ethan Vandal. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;