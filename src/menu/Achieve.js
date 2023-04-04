import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import s from '../images/fav.png'
import './home.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import m1 from '../images/m1.jpeg'
import auto from '../images/auto.jpg'
import avicer from '../images/avi.jpeg'
import ma from '../images/math.pdf'
import au from '../images/and.pdf'
import ai from '../images/avicer.png'
export const Achieve = () => {
    return (
        <div>
            <Carousel variant="light">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={s}
                        style={{ opacity: 6 }}
                    />
                    <Carousel.Caption>
                        <div style={{ background: "#b2b2b2" }}>
                            <p style={{ fontSize: "45px", fontFamily: "serif", float: "left", fontStyle: "italic", fontWeight: "bold", textAlign: "center", marginLeft: "40%", color: "white", marginBottom: "61%" }}>Achievements</p>
                        </div>
                        <br></br><br></br><br></br>
                        <br></br>
                        <br></br>
                        <div>
                        <Row>
                            <Col style={{ marginLeft: "-220%", marginBottom: "45%" }}>

                                <Card style={{ width: '23rem', height: "400px" }} >
                                    <Card.Img variant="top" src={m1} style={{ height: "200px" }} />
                                    <br></br>
                                    <br></br>
                                    <Card.Body>
                                        <Card.Title style={{ color: "black", fontSize: "28px", fontWeight:"bold" ,fontStyle:"italic"}}>Math Marathon Quiz</Card.Title>
                                        <br></br>
                                        <br></br>
                                        <a href={ma}><Button variant="danger" download>View</Button></a>
                                    </Card.Body>
                                </Card>

                            </Col>
                            <Col style={{ marginLeft: "20%", marginBottom: "45%" }}>

                                <Card style={{ width: '20rem', height: "400px" }} >
                                    <Card.Img variant="top" src={auto} style={{ height: "200px" }} />
                                    <br></br>
                                  
                                    <Card.Body>
                                        <Card.Title style={{ color: "black", fontSize: "25px", fontWeight:"bold" ,fontStyle:"italic"}}>Android Based Automation</Card.Title>
                                        <br></br>
                                        <br></br>
                                        <a href={au}><Button variant="danger" download>View</Button></a>
                                    </Card.Body>
                                </Card>

                            </Col>
                            <Col style={{ marginLeft: "-1%", marginBottom: "45%", float: "right" }}>

                            <Card style={{ width: '23rem', height: "400px" }} >
                                    <Card.Img variant="top" src={avicer} style={{ height: "200px" }} />
                                    <br></br>
                                    <br></br>
                                    <Card.Body>
                                        <Card.Title style={{ color: "black", fontSize: "25px", fontWeight: "bold" ,fontStyle:"italic"}}>Aviskar</Card.Title>
                                        <br></br>
                                        <br></br>
                                        <a href={ai}><Button variant="danger" download>View</Button></a>
                                    </Card.Body>
                                </Card>
                            </Col>










                        </Row>
                        </div>

                    </Carousel.Caption>

                </Carousel.Item>

            </Carousel>

        </div>
    );
}
