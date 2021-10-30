import React ,{useParams} from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Service = ({ service }) => {
    
    // console.log(props.service);
    const {_id, name, description, price, img} = service;
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
                    <NavLink to={`/services/${_id}`}><Button>Explore</Button></NavLink>
                </Card.Body>
            </Card>
        </Col>
    )
};

export default Service;