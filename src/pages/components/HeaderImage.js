import React from 'react';
import logo from '../../images/goldstarslogo.png';
import mail from '../../images/mail.png';

const BackgroundImage = () => {
    return (
        <div className="hero is-small">
            <div className="google-font-ss hero-body">
                <div className="columns">
                    <div className=" column centered-content has-text-centered">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="column">
                        <img src={mail} alt="logo" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BackgroundImage;
