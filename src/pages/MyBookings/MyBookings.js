import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';

const MyBookings = () => {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/bookings')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, []);

    const handleDeleteBooking = id => {
        const proceed = window.confirm('Are you sure , You want to delete booking?');
        if (proceed) {
            const url = `http://localhost:5000/bookings/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Booking deleted successfully');
                        const remainingBookings = bookings.filter(booking => booking._id !== id);
                        setBookings(remainingBookings);
                    }
                })
        }
    }
    return (
        <div>
            <Container>
                <h3>This is my bookings manager page.</h3>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Key</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Form</th>
                            <th>Destination</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => (
                                <tr key={booking.key}>
                                    <td>{booking.key}</td>
                                    <td>{booking.name}</td>
                                    <td>{booking.email}</td>
                                    <td>{booking.phone}</td>
                                    <td>{booking.whereTo}</td>
                                    <td>{booking.destination}</td>
                                    <td>{booking.price}</td>
                                    <td className="text-center"><button onClick={() => handleDeleteBooking(booking._id)}>DELETE</button></td>

                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default MyBookings;


// {/* <tr>
//                             <td>1</td>
//                             <td>Mark</td>
//                             <td>Otto</td>
//                             <td>@mdo</td>
//                         </tr>
//                         <tr>
//                             <td>2</td>
//                             <td>Jacob</td>
//                             <td>Thornton</td>
//                             <td>@fat</td>
//                         </tr>
//                         <tr>
//                             <td>3</td>
//                             <td>Larry the Bird</td>
//                             <td>Bird</td>
//                             <td>@twitter</td>
//                         </tr> */}