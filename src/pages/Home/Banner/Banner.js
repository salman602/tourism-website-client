import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner-1.png';
import banner2 from '../../../images/banner/banner-2.png';
import banner3 from '../../../images/banner/banner-3.png';


const Banner = () => {
    return (
        <div className="banner-section">
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="First slide"
                    />
                    <Carousel.Caption className="mb-5">
                        <Container>
                            <Row>
                            <Col sm={1} md={6}></Col>
                                <Col xs={12} sm={11} md={6}>
                                    <h1 className="text-danger">Exploring the world in comfort.</h1>
                                    
                                    <h1>Mehrangarh Museum</h1>
                                    <p>Mehrangarh Fort covers an area of 1,200 acres in Jodhpur, Rajasthan. The complex is located on a hilltop around 122 metres above the surrounding plain, and was constructed circa 1459 by Rajput ruler Rao Jodha.</p>
                                    <h3>Form <span className="text-info">$999</span></h3>
                                </Col>
                                
                            </Row>
                        </Container>
                    </Carousel.Caption>
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="Second slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <Container>
                            <Row>
                                <Col sm={1} md={6}></Col>
                                <Col xs={12} sm={11} md={6}>
                                    <h1 className="text-info fw-bold">INSPIRING, BEAUTIFUL</h1>
                                    <h1 className="text-dark fw-bold">BREATHTAKING</h1>
                                    
                                    <h1 className="text-dark fw-bolder">Piz Palü</h1>
                                    <p className="text-danger lead fw-bold">Piz Palü is a mountain in the Bernina Range of the Alps, located between Switzerland and Italy. It is a large glaciated massif composed of three main summits, on a ridge running from west to east.</p>
                                    <h3>Form <span className="text-info">$1299</span></h3>
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div >
    );
};

export default Banner;