import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">Projects</h2>
        <Row>
          {projects.map((project) => (
            <Col key={project.id} md={6} lg={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <div className="mb-3">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="badge bg-secondary me-2">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Button variant="primary" href={project.link}>View Project</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;