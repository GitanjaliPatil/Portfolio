import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.css"
import './header.css';
export const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" >
          <Container>
            <Navbar.Brand href="#home" className="hed">GITANJALI&nbsp;PATIL</Navbar.Brand>
            <Navbar.Toggle />
            
          </Container>
        </Navbar>
      );
}
