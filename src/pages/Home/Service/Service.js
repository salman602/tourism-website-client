import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Service = ({ service }) => {
    // console.log(props.service);
    const { name, description, price, img} = service;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Name: {name}</Card.Title>
                    
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Subtitle>Price: ${price}</Card.Subtitle>
                    <NavLink to="/booking"><Button>Explore</Button></NavLink>
                </Card.Body>
            </Card>
        </Col>
    )
};

export default Service;