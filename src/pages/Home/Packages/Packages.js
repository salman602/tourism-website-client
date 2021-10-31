import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Package from '../Package/Package';
import './Packages.css';

const Packages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('https://powerful-reaches-05315.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, []);

    return (
        <div id="packages" className="packages-section">
            <Container className="py-5">
                <h2 className="text-dark fw-bold text-center mt-5 mb-4">Most Popular <span className="text-danger">Tours</span></h2>
                <Row xs={1} md={3} className="g-4">
                    {
                        packages.map(singlePackage => <Package
                            key={singlePackage._id}
                            singlePackage={singlePackage}
                        ></Package>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Packages;