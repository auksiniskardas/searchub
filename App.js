import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import React from 'react';

// import { useState, useEffect } from 'react';
import BootstrapDatePickerComponent from './/components/BootstrapDatePickerComponent';



function App() {
  return (
    
    
    <div className="App">
      <header>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">SearchHub</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

        </Navbar.Collapse>
      </Container>
    </Navbar>
      </header>
      <main>
      <Container>
      <Row className="px-4 my-5">

        <Col sm={5}>
          <h1 class= "font-weight-light">Search</h1>
          <p> Search for the information about companies' stock prices.</p>
          <InputGroup className="mb-3">
        <Form.Control
          placeholder="company's name"
          aria-label="company's name"
          aria-describedby="basic-addon2"
        />

      </InputGroup>
      <div className="App">  
      <BootstrapDatePickerComponent />  
    </div>  
    <div className='Button'>
     <Button as="input" type="submit" value="Submit" />{' '}

     </div>

          </Col>
      </Row>
    
    </Container>
      </main>
      <footer className='py-4 my-4 bg-dark'>
        <Container className='px-4'>
          <p class='text-center text-white'>Powered By Finnhub 2022</p>
        </Container>
      </footer>
    </div>
    
  );
}

export default App;
