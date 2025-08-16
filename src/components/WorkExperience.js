import React from 'react';
import { Container, Card, ListGroup, Badge } from 'react-bootstrap';

const WorkExperience = ({ experiences }) => {
  return (
    <section id="work" className="py-5">
      <Container>
        <h2 className="text-center mb-5">Work Experience</h2>
        {experiences.map((exp) => (
          <Card key={exp.id} className="mb-4">
            <Card.Body>
              <Card.Title>{exp.title} - {exp.company}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{exp.period}</Card.Subtitle>
              <ListGroup variant="flush">
                {exp.description.map((item, index) => (
                  <ListGroup.Item key={index}>{item}</ListGroup.Item>
                ))}
              </ListGroup>
              {exp.tech && (
                <div className="mt-3">
                  {exp.tech.map((tech, index) => (
                    <Badge key={index} pill bg="secondary" className="me-2">
                      {tech}
                    </Badge>
                  ))}
                </div>
              )}
            </Card.Body>
          </Card>
        ))}
      </Container>
    </section>
  );
};

export default WorkExperience;