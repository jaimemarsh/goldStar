import React from 'react';
import { Link } from 'react-router-dom';


const Meet = () => {
    return (
        <div className="container section is-small is-max-fullscreen has-text-centered">
            <div className="column has-text-left mb-6">
                <h1 className="title is-size-1 is-size-3-mobile google-font-pd mt-6 has-text-centered">What Are Gold Stars?</h1>
                <p className="google-font-ss is-size-4 is-size-5-mobile has-text-justified">
                    With details you provide, Gold Star will send anyone you choose a letter of recognition and a gold star.
                    This gold star can be made custom for them, or a generic star we provide depending on the amount of information
                    you give. We know this small gesture can go a long way to make someone feel noticed in their day to day lives.
                    This can be for family members, coworkers, friends, or strangers you come across that you want to thank. When
                    you tell us to send someone a Gold Star we know that person deserves something for their hard work. There is
                    no limit for giving gold stars to the same person, or to multiple people.
                    <br></br>
                    <span ><strong><Link to="/Faq"> <u>Click Here for frequently asked questions</u></Link></strong></span>
                </p>
            </div>


        </div >
    );
};

export default Meet;