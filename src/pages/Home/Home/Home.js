import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Packages from '../Packages/Packages';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Packages></Packages>
            <About></About>
            <Testimonials></Testimonials>
            
        </div>
    );
};

export default Home;