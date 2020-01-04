import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Conductores from './Conductores';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div>
      
      <Container>
        <Row>
            <Col sm={10}> </Col>
            <Col>
              <Button href="#" variant="outline-danger" size="lg">Logout</Button>
            </Col>
          </Row>
          <Row>
            <h1>Seguro de automóvil</h1>
          </Row>
          <Row>
            <Col>
              <Conductores/>
            </Col>
          </Row>
      </Container>
    </div>
  );
}

export default App;
