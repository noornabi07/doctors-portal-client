import React from 'react';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import Contact from './Contact/Contact';
import Reviews from './Reviews/Reviews';
import Doctors from './Doctors/Doctors';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Contact></Contact>
            <Reviews></Reviews>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;