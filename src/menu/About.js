import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import pic from '../images/tech.jpg'
import edu from '../images/edu.jpg'
import './home.css';
import './about.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import tech from '../images/techno.pdf'
import board from '../images/ssc.jpeg'
import hsc from '../images/hsc.png'
import eng from '../images/girl.jpg'
import html from '../images/html1.webp'
import css from '../images/css1.jpg'
import js from '../images/javascript.png'
import java from '../images/java.webp'
import py from '../images/python.jpg'



export const About = () => {
  return (
    <div>
      <Carousel variant="light">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic}

          />
          <Carousel.Caption className='car1'>
            <p style={{ color: "white", fontSize: "45px", fontFamily: "serif" }}>About&nbsp; Me</p>
          </Carousel.Caption>
          <Carousel.Caption>
            <img src={edu} style={{ marginBottom: "215px", borderRadius: "12px", height: "250px", width: "250px", float: "left", marginLeft: "88px" }}></img>

            <p style={{ marginBottom: "244px", fontSize: "20px", marginLeft: "-15px", fontFamily: "monospace", float: "right" }}>
              &nbsp;Every&nbsp;person&nbsp;has&nbsp;their&nbsp;own&nbsp;unique&nbsp;story&nbsp;.<br></br>
              Here&nbsp;is&nbsp;a&nbsp;glimpse&nbsp;into&nbsp;mine&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br></br><br></br>
              &nbsp;&nbsp;My Name is <span style={{ color: "gray", fontStyle: "italic" }}>Gitanjali Patil.</span> I am currently <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;persuing BTech degree from R . C . Patel&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br></br>
              &nbsp; Institute Of Technology, Shirpur in &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br></br>Computer Engineering.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br></br>
              Every day I love being able to work&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br></br>directly with a wonderful groups of&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br></br>

              friends, discussing their challenges,&nbsp;&nbsp;&nbsp;<br>
              </br>sharing my knowledge and idea.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
          </Carousel.Caption>
          <Carousel.Caption>
            <a href={tech}><Button variant="danger" type="submit" style={{ float: "left", marginLeft: "48%", marginBottom: "160px" }} download>
              Resume Download
            </Button>
            </a>
          </Carousel.Caption>

        </Carousel.Item>

      </Carousel>
      <br></br>
      <br></br>
      <div>
        <div style={{ background: "#b2b2b2" }}>
          <p style={{ color: "black", fontSize: "35px", fontFamily: "serif", float: "left", fontStyle: "italic", fontWeight: "bold", textAlign: "center", marginLeft: "46%" }} className="q">Qualification</p>
        </div>
        <br></br><br></br><br></br>
        <Row>
          <Col style={{ marginLeft: "8%", marginTop: "3%" }}>
            <Card style={{ width: '18rem' }} className='card'>
              <Card.Img variant="top" src={board} />
              <Card.Body>
                <Card.Title>Matriculation</Card.Title>
                <Card.Text>
                  H. R. Patel Kanya Secondery School
                  Shirpur ( 06/2017-06/2018 )&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </Card.Text>

              </Card.Body>
            </Card>
          </Col>
          <Col style={{ marginLeft: "8%", marginTop: "3%" }}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={hsc} />
              <Card.Body>
                <Card.Title>Intermediate</Card.Title>
                <Card.Text>
                  H. R. Patel Kanya Junior College,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  Shirpur ( 06/2018-06/2020 )&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </Card.Text>

              </Card.Body>
            </Card>
          </Col>
          <Col style={{ marginLeft: "8%", marginTop: "3%" }}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={eng} />
              <Card.Body>
                <Card.Title>BTech (Computer Engg.)</Card.Title>
                <Card.Text>
                  H. R. Patel Institute of Technology,&nbsp;
                  Shirpur ( 06/2018-06/2020 )&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                </Card.Text>

              </Card.Body>
            </Card>
          </Col>



        </Row>
      </div><br></br>
      <br></br>
      <br>
      </br>
      <div>
        <div style={{ background: "#b2b2b2" }}>
          <p style={{ color: "black", fontSize: "35px", fontFamily: "serif", float: "left", fontStyle: "italic", fontWeight: "bold", textAlign: "center", marginLeft: "46%" }}>Technical Skills</p>
        </div>
        <br></br><br></br><br></br>
        <Row>
          <Col style={{ marginLeft: "8%", marginTop: "3%" }}>
            <div className='container'>
              <img src={html} style={{ borderRadius: "50%", height: "250px", width: "250px" }} className='hl'></img>
              <br></br>
              <div className='overlay'>
                <div className='text'>
                The <span style={{fontWeight:"bold",color:"black"}}> HyperText Markup Language </span> or HTML is the standard markup language for documents designed to be displayed in a web browser. 
                </div>
              </div>
            </div>
          </Col>
          <Col style={{ marginLeft: "8%", marginTop: "3%" }}>
          <div className='container2'>
            <img src={css} style={{ borderRadius: "50%", height: "250px", width: "250px" }} class='cssl'></img>
            <br></br>
              <div className='overlay'>
                <div className='textc'>
                <span style={{fontWeight:"bold",color:"black"}}> Cascading Style Sheets (CSS) </span> is a stylesheet language used to describe the presentation of a document written in HTML or XML 
                </div>
              </div>
            </div>
          </Col>
          <Col style={{ marginLeft: "8%", marginTop: "3%" }}>
          <div className='container3'>
            <img src={js} style={{ borderRadius: "50%", height: "250px", width: "250px" }} className='jsl'></img>
            <br></br>
              <div className='overlay'>
                <div className='textj'>
                <span style={{fontWeight:"bold",color:"black"}}> JavaScript (JS) </span> is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. 
                </div>
              </div>
            </div>
          </Col>
          <Col style={{ marginLeft: "3%", marginTop: "3%" }}>
          <div className='container4'>
            <img src={java} style={{ borderRadius: "50%", height: "250px", width: "250px", float: "left", marginLeft: "20%" }} className='javal'></img>
            <br></br>
              <div className='overlay'>
                <div className='textja'>
                <span style={{fontWeight:"bold",color:"black"}}> Java </span> is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.
                </div>
              </div>
            </div>
          </Col>
          <Col style={{ marginLeft: "4%", marginTop: "3%" }}>
          <div className='container5'>
            <img src={py} style={{ borderRadius: "50%", height: "250px", width: "250px", float: "left", marginLeft: "-110px" }} className='pyl'></img>
            <br></br>
              <div className='overlay'>
                <div className='textp'>
                <span style={{fontWeight:"bold",color:"black"}}> Python  </span> is an interpreted, high-level and general-purpose programming language. 
                </div>
              </div>
            </div>
          </Col>
          
        

          
          

        </Row>

        
      </div>
      <br></br>
      <div className="d-grid gap-2">
            {/* <Button variant="danger" type="submit" style={{ float: "left", marginLeft: "25%", marginBottom: "590px",fontStyle:"italic",width:"23%",fontWeight:"bold" }} size="lg">
              Technical Tools
            </Button> */}
      </div>


    </div>



    /* <div>
       <Carousel variant="light">
         <Carousel.Item>
           <img
             className="d-block w-100"
             src={pic}
 
           />
           <Carousel.Caption className='car1'>
             <p style={{ color: "white", fontSize: "45px", fontFamily: "serif" }}>About&nbsp; Me</p>
           </Carousel.Caption>
           <Carousel.Caption>
             <Row>
               <Col>
                 <img src={edu} style={{ marginTop: "150px", borderRadius: "12px", height: "250px", width: "250px", float: "left", marginRight: "-2px" }}></img>
               </Col>
               <Col >
                 <p style={{ marginBottom: "120px", fontSize: "20px", marginLeft: "-15px", fontFamily: "monospace", float: "right" }}>
                   Every person has their own unique story .
                   Here is a glimpse into mine<br></br><br></br>
                   My Name is Gitanjali Patil. I am currently persuing BTech degree from<br></br><br></br>
                   &nbsp;R . C . Patel Institute Of Technology, Shirpur in Computer Engineering.<br></br><br></br>
                   Every day I love being able to work directly with a wonderful groups<br></br><br></br>
                   of friends, discussing their challenges, sharing my knowledge and idea.
                 </p>
               </Col>
 
             </Row>
 
 
           </Carousel.Caption>
 
         </Carousel.Item>
 
       </Carousel>
     </div>*/
  )
}
