import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import pic from '../images/tech.jpg'
import './home.css';
import Button from 'react-bootstrap/Button';
import { Pro } from '../menu/Pro'
import Nav from 'react-bootstrap/Nav';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {About} from '../menu/About'
export const Home = () => {
  return (
    <div>
      <Carousel variant="light">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic}

          />
          <Carousel.Caption className='car'>
            <p style={{ color: "white", fontSize: "45px", fontFamily: "serif" }}>GITANJALI&nbsp;&nbsp;PATIL</p>
            <p style={{ color: "white", fontSize: "27px", fontFamily: "serif", fontStyle: "italic" }}>An independent and self-motivated student with proven and good Problem Solving skills.</p>
          </Carousel.Caption>
          
          <Carousel.Caption>
          <a href="#/about">
        <button class="btn btn-secondary">project</button>
      </a>
          </Carousel.Caption>
          
        </Carousel.Item>

      </Carousel>

    </div>
  );
}

