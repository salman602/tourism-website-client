import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../../images/about/team-7.jpg';
import './About.css';

const About = () => {
    return (
        <div id="aboutus" className="about-section">
            <Container className="py-5">
                <Row>
                    <Col xs={10} md={6} className="d-flex justify-content-center align-items-center">
                        <div className="p-2">
                        <h4 className="text-info py-4">Who we are</h4>
                        <h1>WHY CHOOSE US</h1>
                        <p className="py-3 lead">Researching and organising your own holiday can be a stressful task. Let us do the work for you! By choosing us you can save both time and money. Our staff always ready to handle any unforeseen situations. Welcome to learn the world with us.</p>
                        <p className="py-2 lead">We have over 30 years experience of organising worldwide travel and we have over 10 experts who have all been there and done it. We can justifiably claim that we never recommend something we haven’t actually experienced.</p>
                        </div>
                    </Col>
                    <Col xs={10} md={6}>
                        <img className="img-fluid rounded" src={img} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;