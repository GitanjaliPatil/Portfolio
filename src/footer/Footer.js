import React from 'react'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './footer.css';

export const Footer = () => {
    return (
        <Navbar className="foot">
          <Container fluid>
           
            
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll 
              >
                <Nav.Link href="#action1">&copy; 2023 Gitanjali Patil</Nav.Link>
                
                
                
              </Nav>
              
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}
