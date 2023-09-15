import React from 'react';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import Contact from './Contact/Contact';
import Reviews from './Reviews/Reviews';
import Doctors from './Doctors/Doctors';
import Booking from './Booking/Booking';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Contact></Contact>
            <Reviews></Reviews>
            <Doctors></Doctors>
            <Booking></Booking>
        </div>
    );
};

export default Home;