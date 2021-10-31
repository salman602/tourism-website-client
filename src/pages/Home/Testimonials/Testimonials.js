import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Testimonials.css'
import img1 from '../../../images/traveller/traveller-1.jpg';
import img2 from '../../../images/traveller/traveller-2.jpg';
import img3 from '../../../images/traveller/traveller-3.jpg';

const Testimonials = () => {
    return (
        <div className="py-5 my-2">
            <h5 className="text-center text-warning">Testimonials</h5>
            <h2 className="text-center py-2">THE PEOPLE WHO KNOW BEST</h2>
            <Carousel>

                <Carousel.Item>
                    <div className="text-center">
                        <img className="testimonial-img" src={img1} alt="" />
                        <div className="w-50 mx-auto">
                            <p>Our Travel Agent was excellent for us and considered our unique needs and planned our itinerary. I would definitely work with you again as you made our trip easy and stress-free. It was a delight to work with TravelCove. Thank you so much. </p>
                            <h4>JANET ARNOLD</h4>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="text-center">
                        <img className="testimonial-img" src={img2} alt="" />
                        <div className="w-50 mx-auto">
                            <p>I just returned from the Kenys Wildlife Safari trip and I can't stop raving. The trip far exceeded my expectations. EveryThing from the guides to the accommodations and food was wonderful. Going to Africa was a truly life changing experience.</p>
                            <h4>TERI ALLAN</h4>
                        </div>
                    </div>


                </Carousel.Item>
                <Carousel.Item>
                    <div className="text-center">
                        <img className="testimonial-img" src={img3} alt="" />
                        <div className="w-50 mx-auto">
                            <p>We have a trip in Causco and Machu Picchu. From the trip advisory to the local travel guide, all are very professional and dedicated to bring us an enjoyable and unforgettable trip in Peru. Our tour guide was very knowledgeable and passionate.</p>
                            <h4>LINDA WALKER</h4>
                        </div>
                    </div>

                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default Testimonials;