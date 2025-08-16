import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons'; // Changed import source

const Resources = ({ resources }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'github':
        return faGithub;
      case 'linkedin':
        return faLinkedin;
      case 'globe':
        return faGlobe;
      default:
        return faGithub;
    }
  };

  return (
    <section id="resources" className="py-5">
      <Container>
        <h2 className="text-center mb-5">Resources</h2>
        <Row>
          {resources.map((resource) => (
            <Col key={resource.id} md={4} className="mb-4">
              <Card className="h-100">
                <Card.Body className="text-center">
                  <FontAwesomeIcon
                    icon={getIcon(resource.icon)}
                    size="3x"
                    className="mb-3"
                  />
                  <Card.Title>{resource.title}</Card.Title>
                  <Card.Text>{resource.summary}</Card.Text>
                  <a
                    href={resource.link}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Resources;