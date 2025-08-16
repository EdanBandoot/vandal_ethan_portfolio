import React from 'react';
import { Container, Card, ListGroup, Badge } from 'react-bootstrap';

const Education = ({ education }) => {
  return (
    <section id="education" className="py-5">
      <Container>
        <h2 className="text-center mb-5">Education</h2>
        <Card>
          <Card.Body>
            <Card.Title>{education.institution}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{education.program}</Card.Subtitle>
            <Card.Text>{education.status}</Card.Text>

            <h5 className="mt-4">Languages & Frameworks</h5>
            <div className="mb-3">
              {education.languages.map((lang, index) => (
                <Badge key={index} pill bg="primary" className="me-2">
                  {lang}
                </Badge>
              ))}
              {education.frameworks.map((framework, index) => (
                <Badge key={index + education.languages.length} pill bg="info" className="me-2">
                  {framework}
                </Badge>
              ))}
            </div>

            <h5>Tools</h5>
            <div>
              {education.tools.map((tool, index) => (
                <Badge key={index} pill bg="secondary" className="me-2">
                  {tool}
                </Badge>
              ))}
            </div>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default Education;