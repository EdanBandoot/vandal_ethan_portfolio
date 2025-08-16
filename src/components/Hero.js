import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Hero = ({ name, title, about }) => {
  return (
    <div className="bg-primary text-white py-5">
      <Container>
        <h1>{name}</h1>
        <h2>{title}</h2>
        <p className="lead">{about}</p>
        <Button
          variant="light"
          className="mt-3"
          href="https://github.com/EdanBandoot"
        >
          View My Work
        </Button>
      </Container>
    </div>
  );
};

export default Hero;