import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

const Projects = () => {
  return (
    <Container className="my-5">
      <h2>Projects</h2>
      <div className="d-flex flex-wrap">
        <Card className="m-2" style={{ width: '18rem' }}>
          <Card.Img variant="top" src="path/to/your/image.jpg" />
          <Card.Body>
            <Card.Title>Project 1</Card.Title>
            <Card.Text>
              Description of Project 1...
            </Card.Text>
            <Button variant="primary" href="https://github.com/your-username/project1">GitHub Repo</Button>
          </Card.Body>
        </Card>
        <Card className="m-2" style={{ width: '18rem' }}>
          <Card.Img variant="top" src="path/to/your/image.jpg" />
          <Card.Body>
            <Card.Title>Project 2</Card.Title>
            <Card.Text>
              Description of Project 2...
            </Card.Text>
            <Button variant="primary" href="https://github.com/your-username/project2">GitHub Repo</Button>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default Projects;