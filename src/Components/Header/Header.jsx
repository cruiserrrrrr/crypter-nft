import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import './Header.scss';
import logoImg from "../Images/logo__desktop.png";
import DefoultSearch from "../DefoultSearch/DefoultSearch";
import Upload from "../../Pages/Upload/Upload";


const Header = () => {
    return (
        <div className="haeder-container">
            <div className="header-wrapper">
                <div className="haeder_left-content">
                    <div className="header-logo">
                        <img className="logo-icon" src={logoImg} alt="logo" />
                        <Link to="/">crypter</Link>
                    </div>
                    <nav className="header-nav">
                        <Link className="nav-item" to="/discover">Discover</Link>
                        <Link className="nav-item" to="/FAQ">How it work</Link>
                    </nav>
                </div>
                <div className="header_actions">
                    <DefoultSearch placeholder="Search" />
                    <nav>
                        <Button to="/upload" size="medium" color="blue">
                            <Link to="/upload">Upload</Link>
                        </Button>
                        <Button href="/connect-waller" size="medium" color="white">
                            <Link to="/connect-waller">Connect Wallet</Link>
                        </Button>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header;