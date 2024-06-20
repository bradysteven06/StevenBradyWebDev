import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container className="my-5">
      <h2>Contact</h2>
      <Row className="mt-4">
        <Col md={6}>
          <h5>Email:</h5>
          <p><a href="mailto:your.email@example.com">your.email@example.com</a></p>
        </Col>
        <Col md={6}>
          <h5>Phone:</h5>
          <p><a href="tel:+1234567890">+1 (234) 567-890</a></p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <h5>LinkedIn:</h5>
          <p><a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a></p>
        </Col>
        <Col md={6}>
          <h5>GitHub:</h5>
          <p><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">github.com/yourusername</a></p>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;

