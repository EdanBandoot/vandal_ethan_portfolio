import React from 'react';
import { Container, Jumbotron, Button } from 'react-bootstrap';

const Hero = ({ name, title, about }) => {
  return (
    <Jumbotron fluid className="bg-primary text-white py-5">
      <Container>
        <h1>{name}</h1>
        <h2>{title}</h2>
        <p className="lead">{about}</p>
        <Button variant="light" className="mt-3">View My Work</Button>
      </Container>
    </Jumbotron>
  );
};

export default Hero;