import React from 'react';
import Navbar from './components/Navbar';
import BackgroundImage from './components/HeaderImage';
import Meet from './Meet'
import Form from './components/Form'
import Footer from './components/Footer'
import Foot from './components/Foot'
import Pictures from './components/Pictures'

const Main = () => {
    return (
        <div>
            <Navbar />
            <BackgroundImage />
            <Meet /> 
            <Form />
            <Pictures />
            <Foot />
            <Footer />
        </div >
    );
};

export default Main;