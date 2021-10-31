import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Booking.css'

const Booking = () => {
    const {user} = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
            if(result.insertedId){
                alert('Your Booking is Processed Successfully.');
                reset();
            }
        })
    };

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
                            <Card.Img src={service.img} className="img-fluid rounded-start my-3" alt="..." />
                            <p><b>Description: </b>{service.description}</p>
                        </Col>
                        <Col xs={9} md={7}>
                            <Card.Body className="text-center">
                                <h3>Booking</h3>
                                <form className="booking-form my-3" onSubmit={handleSubmit(onSubmit)}>
                                    {service.key && <input {...register("key", { required: true })} defaultValue={service.key} />} <br />
                                    <input {...register("name", { required: true })} defaultValue={user.displayName} /> <br />
                                    <input {...register("email", { required: true })} defaultValue={user.email} /> <br />
                                    <input {...register("phone", { required: true })} placeholder="Phone" /> <br />
                                    <input {...register("whereTo", { required: true })} placeholder="Where To" /> <br />
                                    {service.name && <input {...register("destination", { required: true })} defaultValue={service.name} />} <br />
                                    {service.price && <input type="number" {...register("price")} defaultValue={service.price} />} <br />
                                    {/* <NavLink to="/myBookings"><input type="submit" value="Book Now" /></NavLink> */}
                                    <input type="submit" defaultValue="Book Now" />
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