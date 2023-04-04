import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './menu.css';
import {HashRouter,Routes,Route,Navigate} from 'react-router-dom'
import {Home} from '../menu/Home'
import {About} from '../menu/About'
import {Contact} from '../menu/Contact'
import {Achieve} from '../menu/Achieve'
import {Pro} from '../menu/Pro'

export const Menu = () => {
  
    return (
     
        <div>
        <Navbar bg="light" expand="lg" >
          <Container fluid>
           
            
            <Navbar.Collapse id="navbarScroll" className="offset-9">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll 
              >
                <Nav.Link href="#/home">HOME</Nav.Link>
                <Nav.Link href="#/about">ABOUT</Nav.Link>
                <Nav.Link href="#/achieve">ACHIEVEMENTS</Nav.Link>
                <Nav.Link href="#/contact">CONTACT</Nav.Link>
                
                
                
              </Nav>
              
            </Navbar.Collapse>
          </Container>
         
        </Navbar>

        <HashRouter>
          <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/achieve" element={<Achieve/>}/>
            <Route path="/pro" element={<Pro/>}/>
            
          </Routes>
        </HashRouter>
        </div>
      );
      
}
