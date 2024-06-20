import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';

const Skills = () => {
  return (
    <Container className="my-5">
      <h2>Skills</h2>
      <ListGroup>
        <ListGroup.Item>JavaScript</ListGroup.Item>
        <ListGroup.Item>React</ListGroup.Item>
        <ListGroup.Item>HTML & CSS</ListGroup.Item>
        <ListGroup.Item>Node.js</ListGroup.Item>
        <ListGroup.Item>Python</ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default Skills;