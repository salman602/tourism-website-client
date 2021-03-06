import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Booking.css'

const Booking = () => {
    const {user} = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('https://powerful-reaches-05315.herokuapp.com/bookings', {
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
        console.log(id)
        const url = `https://powerful-reaches-05315.herokuapp.com/packages/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [id]);
    return (
        <Container className="py-5">
            <Row>

                <Card className="mb-3 mx-auto" style={{ width: '50rem' }}>
                    <Row className="g-0">
                        <Col xs={12} md={6}>
                            <Card.Img src={service.img} className="img-fluid rounded-start my-3" alt="..." />
                            <p><b>Description: </b>{service.description}</p>
                        </Col>
                        <Col xs={9} md={6}>
                            <Card.Body className="text-center">
                                <h3 className="p-3 bg-info rounded-3">Booking</h3>
                                <form className="booking-form my-3" onSubmit={handleSubmit(onSubmit)}>
                                    {service.key && <input {...register("key", { required: true })} defaultValue={service.key} />} <br />
                                    <input {...register("name", { required: true })} defaultValue={user.displayName} /> <br />
                                    <input {...register("email", { required: true })} defaultValue={user.email} /> <br />
                                    <input {...register("phone", { required: true })} placeholder="Phone" /> <br />
                                    <input {...register("whereTo", { required: true })} placeholder="Where To" /> <br />
                                    {service.name && <input {...register("destination", { required: true })} defaultValue={service.name} />} <br />
                                    {service.price && <input type="number" {...register("price")} defaultValue={service.price} />} <br />
                                    
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