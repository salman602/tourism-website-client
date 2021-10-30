import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Booking.css'

const Booking = () => {
    const {user} = useAuth();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    const { id } = useParams();

    const [service, setService] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/services/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);
    return (
        <Container>
            <Row>

                <Card className="mb-3 mx-auto" style={{ width: '50rem' }}>
                    <Row className="g-0">
                        <Col xs={12} md={5}>
                            <Card.Img src={service.img} className="img-fluid rounded-start my-2" alt="..." />
                            <p><b>Description: </b>{service.description}</p>
                        </Col>
                        <Col xs={9} md={7}>
                            <Card.Body className="text-center">
                                <h3>Booking</h3>
                                <form className="booking-form my-3" onSubmit={handleSubmit(onSubmit)}>
                                    <input {...register("name", { required: true })} value={user.displayName} /> <br />
                                    <input {...register("email", { required: true })} value={user.email} /> <br />
                                    <input {...register("phone", { required: true })} placeholder="Phone" /> <br />
                                    <input {...register("whereTo", { required: true })} placeholder="Where To" /> <br />
                                    <input {...register("destination", { required: true })} value={service.name} /> <br />
                                    <input type="number" {...register("price")} value={service.price} /> <br />
                                    <NavLink to="/myBookings"><input type="submit" value="Book Now" /></NavLink>
                                </form>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Row>
        </Container>
    );
};

export default Booking;