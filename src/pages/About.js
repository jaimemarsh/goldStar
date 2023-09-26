import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Foot from './components/Foot';
import dad from '../images/dad.png';
import web from '../images/web.png';
import "../css/About.css"

const About = () => {
    return (
        <div>
            <Navbar />

            <div className="container is-max-widescreen section">
                {/* <h1 className="mb-6 about google-font-pd has-text-centered is-size-1-mobile"><strong>About Gold Stars</strong></h1> */}
                <div className="my-6">
                    <h1 className="title is-size-1 is-size-3-mobile google-font-pd mb-6 has-text-centered ">How did Gold Stars Start?</h1>
                    <div className="columns">
                        <div className="column">
                            <img src={dad} alt="" />
                        </div>
                        <div className="column has-text-left">
                            <p className="google-font-ss is-size-4 is-size-5-mobile has-text-justified">
                                My Dad inspired me to create Gold Stars. When he notices his coworkers doing their job well or working
                                hard he sends them an email with a giant gold star attached. He spends extra time, with his already busy
                                day, to let them know he notices their work. I know his work often goes unnoticed, and I wanted him to
                                get his own gold star. When I thought more about it I knew my Mom could use a gold star,
                                and my boyfriend, and my friends. I wanted people to know I noticed their hard work, and I had the
                                tools to do it.
                                <br></br>
                                {/* <strong><Link to="/About"> <u>Click Here for frequently asked questions</u></Link></strong> */}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="my-6">
                    <h1 className="title is-size-1 is-size-3-mobile google-font-pd mb-6 has-text-centered">About The Developer</h1>
                    <div className="columns">
                        <div className="column has-text-left">
                            <p className="google-font-ss is-size-4 is-size-5-mobile has-text-justified">
                                My name is Jaime Marsh and I am a Web Developer. I love to be creative in my day to day life and learned to
                                program as a way to create things to help other people. This is a small project that, with more time, could turn
                                into something bigger. To see other projects that I created check out my portfolio <a href="https://jaimemarsh.com"><span>here! </span></a>
                                If you’d like to work with me on more creative things, message me on LinkedIn <a href="https://www.linkedin.com/in/jaime-marsh/"><span>here! </span></a>
                                <br></br>
                                {/* <strong><Link to="/About"> <u>Click Here for frequently asked questions</u></Link></strong> */}
                            </p>
                        </div>
                        <div className="column">
                            <img src={web} alt="" />
                        </div>
                    </div>
                </div>

            </div>
            <Foot />
            <Footer />
        </div>
    );
};

export default About;