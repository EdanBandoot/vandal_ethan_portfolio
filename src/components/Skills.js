import React from 'react';
import { Container, Row, Col, Card, ListGroup, Badge } from 'react-bootstrap';

const Skills = ({ skills }) => {
  return (
    <section id="skills" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">Skills</h2>
        <Row>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Header>Languages</Card.Header>
              <Card.Body>
                <ListGroup variant="flush">
                  {skills.languages.map((lang, index) => (
                    <ListGroup.Item key={index}>{lang}</ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Header>Frameworks</Card.Header>
              <Card.Body>
                <ListGroup variant="flush">
                  {skills.frameworks.map((framework, index) => (
                    <ListGroup.Item key={index}>{framework}</ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Header>Tools & Other</Card.Header>
              <Card.Body>
                <ListGroup variant="flush">
                  {skills.tools.map((tool, index) => (
                    <ListGroup.Item key={index}>{tool}</ListGroup.Item>
                  ))}
                  {skills.other.map((item, index) => (
                    <ListGroup.Item key={index + skills.tools.length}>{item}</ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;