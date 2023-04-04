import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import stock from '../images/stock.jpg'

export const Contact = () => {
  return (
    /*<div>
      <p style={{color:"black",fontSize:"45px",fontFamily:"serif"}}>Contact us</p>
      <br></br>
      
      <Form.Group className="mb-3">
        <Form.Label style={{color:"black",fontSize:"25px",fontFamily:"serif",marginLeft:"4%",float:"left"}}>Name</Form.Label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span style={{marginLeft:"232px",marginTop:"8px",fontSize:"23px",fontStyle:"italic",fontFamily:"serif"}}>Email</span><br></br>
        <br></br>
        <span style={{marginLeft:"535px",marginTop:"35px"}}>gitanjali2082000@gmail.com</span>
        <Form.Control placeholder="Enter your name" style={{width:"700px",marginLeft:"4%"}} required />
        
        
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label style={{color:"black",fontSize:"25px",fontFamily:"serif",marginLeft:"4%",float:"left"}}>Email</Form.Label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span style={{marginLeft:"258px",marginTop:"8px",fontSize:"23px",fontStyle:"italic",fontFamily:"serif"}}>Telephone</span><br></br>
        <br></br>
        <span style={{marginLeft:"421px",marginTop:"35px"}}>993342452311</span>
        <Form.Control placeholder="Enter your email" style={{width:"700px",marginLeft:"4%" }}required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label style={{color:"black",fontSize:"25px",fontFamily:"serif",marginLeft:"4%",float:"left"}}>Message</Form.Label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span style={{marginLeft:"199px",marginTop:"8px",fontSize:"23px",fontStyle:"italic",fontFamily:"serif"}}>Address</span><br></br>
        <br></br>
        <span style={{marginLeft:"555px",marginTop:"35px"}}>10B, Wagheshawari Nagar, Shirpur</span>
        <Form.Control placeholder="Enter your Message" style={{width:"700px",marginLeft:"4%",height:"95px"}} />
      </Form.Group><br></br>
      <Button variant="secondary" type="submit" style={{float:"left",marginLeft:"4%"}}>
        Send Message
      </Button>
      
      
   
  </div>*/
    <div >
      <p style={{ color: "black", fontSize: "45px", fontFamily: "serif" }}>Contact us</p>
      <hr style={{
        color:"black",
        backgroundColor: '#000000',
        height: .90,
        borderColor: '#000000',
        borderColor:"black",
        marginLeft:"10%",
        
        width:"80%"
      }} /><br></br>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label style={{ color: "black", fontSize: "25px", fontFamily: "serif", marginLeft: "8%", float: "left" }}>Name</Form.Label><br></br>

            <Form.Control placeholder="Enter your name" style={{ width: "700px", marginLeft: "8%" }} required />

          </Form.Group><br></br>
          <Form.Group className="mb-3">
            <Form.Label style={{ color: "black", fontSize: "25px", fontFamily: "serif", marginLeft: "8%", float: "left" }}>Email</Form.Label>

            <Form.Control placeholder="Enter your email" style={{ width: "700px", marginLeft: "8%" }} required />
          </Form.Group><br></br>
          <Form.Group className="mb-3">
            <Form.Label style={{ color: "black", fontSize: "25px", fontFamily: "serif", marginLeft: "8%", float: "left" }}>Message</Form.Label>


            <Form.Control placeholder="Enter your Message" style={{ width: "700px", marginLeft: "8%", height: "95px" }} />
          </Form.Group><br></br>
          <Button variant="secondary" type="submit" style={{ float: "left", marginLeft: "8%" }}>
            Send Message
          </Button>
        </Col>
        <Col>
          <span style={{ marginLeft: "88px", marginTop: "8px", fontSize: "23px", fontStyle: "italic", fontFamily: "serif", float: "left" }}>Email</span><br></br>
          <br></br>
          <span style={{ marginLeft: "88px", marginTop: "10px", float: "left", fontSize: "20px" }}>gitanjali2082000@gmail.com</span>
          <br></br><br></br><br></br>
          <span style={{ marginLeft: "88px", marginTop: "8px", fontSize: "23px", fontStyle: "italic", fontFamily: "serif", float: "left" }}>Telephone</span><br></br>
          <br></br>
          <span style={{ marginLeft: "88px", marginTop: "10px", float: "left", fontSize: "20px" }}>9322313712</span>
          <br></br><br></br><br></br>
          <span style={{ marginLeft: "88px", marginTop: "8px", fontSize: "23px", fontStyle: "italic", fontFamily: "serif", float: "left" }}>Address</span><br></br>
          <br></br>
          <span style={{ marginLeft: "88px", marginTop: "10px", float: "left", fontSize: "20px" }}>10B, Wagheshawari Nagar, Shirpur</span>
        </Col>



      </Row>
    </div>
  )
}
