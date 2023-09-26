import React from 'react';
import Navbar from './components/Navbar'
import star from '../images/star.png';
import Foot from './components/Foot';

const Main = () => {
    return (
        <div>

            <Navbar />
            <div className="is-max-fullscreen container section">
                <h1 className="google-font-pd contactUs is-size-1 has-text-centered mt-4">FAQs</h1>
                <ul>
                    <div className="columns">
                        <div className="column is-two-thirds mt-6">
                            <li className="google-font-pd is-size-1 mt-4 is-size-3-mobile">What do the gold stars look like?</li>
                            <p className="google-font-ss is-size-4 is-size-5-mobile">Here is an example of what a gold star will look like. Every gold star will be slightly different
                                as they are customized to the person you want to send it to!</p>
                        </div>
                        <div className="column">
                            <img src={star} alt="" style={{ width: '400px', height: '300px' }} />
                        </div>
                    </div>
                    <div>
                        <li className="google-font-pd is-size-1 mt-4 is-size-3-mobile">Does it cost any money?</li>
                        <p className="google-font-ss is-size-4 is-size-5-mobile" >It costs nothing to send gold stars!</p>
                    </div>
                    <div>
                        <li className="google-font-pd is-size-3-mobile is-size-1 mt-4">How many can I send?</li>
                        <p className="google-font-ss is-size-4 is-size-5-mobile" >You can send as many as you want to the same person or multiple people. If you include different
                            information for the same person different stars will be sent.
                        </p>
                    </div>
                    <div>
                        <li className="google-font-pd is-size-3-mobile is-size-1 mt-4">Is there an app?</li>
                        <p className="google-font-ss is-size-4 is-size-5-mobile"> There is currently not an app,
                            but this website is mobile friendly. If you're interested in an app message me! Hearing feedback
                            and interest really helps. <a href="https://www.linkedin.com/in/jaime-marsh/"><span>Click here for my LinkedIn </span></a>
                        </p>
                    </div>

                </ul>
            </div>
            <Foot />

        </div >
    );
};

export default Main;