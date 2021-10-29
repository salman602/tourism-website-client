import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
    const phoneIcon = <FontAwesomeIcon icon={faPhoneAlt} />
    const emailIcon = <FontAwesomeIcon icon={faEnvelope} />
    const webIcon = <FontAwesomeIcon icon={faGlobe} />
    return (
        <div className="footer-section">
            <Container>
                <Row className="text-white py-4">

                    <Col xs={6} md={3}>
                        <h5 className="mb-3">About TravelCove</h5>
                        <hr />
                        <p className="text-white-50">With more than 1.4 million hotels in 200 countries and regions, we've built an extensive hotel network to give our customers a fantastic choice of accommodation. Our far-reaching flight network has over 2 million individual flight routes connecting more than 5,000 cities around the globe.</p>
                    </Col>
                    <Col xs={6} md={3}>
                        <h5 className="mb-3">BOOKING TERMS</h5>
                        <hr />
                        <p className="mb-1">
                            <NavLink to="/orthopedics"
                                className="ps-0 pt-0 text-decoration-none text-white-50">
                                <span>Booking Conditions</span>
                            </NavLink>
                        </p>
                        <p className="mb-1">
                            <NavLink to="/neurology"
                                className="ps-0 pt-0 text-white-50 text-decoration-none">
                                <span>My Bookings</span>
                            </NavLink>
                        </p>
                        <p className="mb-1">
                            <NavLink to="/dental"
                                className="ps-0 pt-0 text-white-50 text-decoration-none">
                                <span>Refund Policy</span>
                            </NavLink>
                        </p>
                        <p className="mb-1">
                            <NavLink to="/urology"
                                className="ps-0 pt-0 text-white-50 text-decoration-none">
                                <span>Includes & Excludes</span>
                            </NavLink>
                        </p>
                        <p className="mb-1">
                            <NavLink to="/medicine"
                                className="ps-0 pt-0 text-white-50 text-decoration-none">
                                <span>Your Responsibilities</span>
                            </NavLink>
                        </p>
                        <p className="mb-1">
                            <NavLink to="/xray"
                                className="ps-0 pt-0 text-white-50 text-decoration-none">
                                <span>Order a Brochure</span>
                            </NavLink>
                        </p>
                    </Col>

                    <Col xs={6} md={3}>
                        <h5 className="mb-3">Latest Blogs & Tips</h5>
                        <hr />
                        <div className="news-item text-white-50">
                            <h6>How To Take Better Portraits When Travelling</h6>
                            <p>04th August, 2020</p>
                        </div>
                        
                        <div className="news-item text-white-50">
                            <h6>The Best Walking Tours in New Orleans</h6>
                            <p>18th January, 2021</p>
                        </div>
                        
                        <div className="news-item text-white-50">
                            <h6>Where to Stay During Your Visit</h6>
                            <p>26th May, 2021</p>
                        </div>

                        <div className="news-item text-white-50">
                            <h6>6 Steps to Avoiding “Analysis Paralysis” When Travel Planning</h6>
                            <p>5th October, 2021</p>
                        </div>
                        
                    </Col>
                    <Col xs={6} md={3}>
                        <h5 className="mb-3">Contact Details</h5>
                        <hr />
                        <div className="text-white-50">
                            <h6 className="">House# 16, Road# 16  Dhanmondi, Dhaka, 1209</h6>
                            <p className="text-info">{phoneIcon}
                                <span className="text-white-50"> tell: 123-456-789</span>
                            </p>
                            <p className="text-info">{emailIcon}
                                <span className="text-white-50"> Email: info@travelcove.com</span>
                            </p>
                            <p className="text-info">{webIcon}
                                <span className="text-white-50"> Website: https://www.travelcove.com</span>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <hr className="text-white-50" />
            <p className="text-center text-white pb-3">&copy; All rights Reserved By TravelCove Ltd.</p>
        </div>
    );
};

export default Footer;