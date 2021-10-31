import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Package.css';

const Package = ({ singlePackage }) => {
    const { _id, name, description, price, img } = singlePackage;
    return (
        <Col>
            <Card className="h-100 border-0 p-2 package-card">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>

                    <Card.Text>
                        <b>Short Description: </b>{description.slice(0,200)}
                    </Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                        <Card.Subtitle className="fs-5">Price: <span className="fs-4 text-info">${price}</span></Card.Subtitle>
                        <NavLink to={`/packages/${_id}`}><Button variant="danger">Explore</Button></NavLink>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
};

export default Package;