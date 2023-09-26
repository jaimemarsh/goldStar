import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../css/Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <div className="is-size-2 has-text-centered google-font-pd is-size-4-mobile m-4 has-text-black">
                    <div className="mt-3"><Link to="/goldStar"><FontAwesomeIcon icon={faStar} size="sm" className="is-size-3 mr-4 has-text-warning" /><span className="has-text-black">Send A Gold Star!</span></Link></div>
                </div>
                <div
                    className={`navbar-burger burger ${menuOpen ? 'is-active' : ''}`}
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={`navbar-menu ${menuOpen ? 'is-active' : ''}`}>
                <div className="navbar-start"></div>
                <div className="navbar-end">
                    <Link to="/goldStar" className="navbar-item google-font-ss">
                        Home
                    </Link>
                    <Link to="/About" className="navbar-item google-font-ss">
                        About
                    </Link>
                    <Link to="/Faq" className="navbar-item google-font-ss">
                        FAQs
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
