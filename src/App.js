import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Conductores from './Conductores';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import PuntosApi from './PuntosApi'

function App() {
  return (
    <div>
      
      <Container>
      
      <Row>
        <br/>
            <Col sm={10}> </Col>
              <Button href="#" variant="outline-danger" size="lg">Logout</Button>
              <br/>
          </Row>
        
      <div align='center'>
      <h1 >Puntos DGT</h1></div>
      <br/>
      

          <Row>
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
