import React from "react";
import './Footer.scss';
import logoImg from "../Images/logo__desktop.png";
import Button from "../Button/Button";
import Nextstep from '../SvgSprite/IconsSvg/nextstep.svg';

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer-container">
                <div className="footer__header">
                    <div className="footer-logo">
                        <div>
                            <img className="logo-icon" src={logoImg} alt="logo" />
                            <a href="">crypter</a>
                        </div>
                        <p>The New Creative Economy.</p>
                    </div>
                    <div className="footer-info">
                        <div className="info-item">
                            <p>Stacks</p>
                            <div>
                                <a href="">Discover</a>
                                <a href="">Connect wallet</a>
                                <a href="">Create item</a>
                            </div>
                        </div>
                        <div className="info-item">
                            <p>Info</p>
                            <div>
                                <a href="">Download</a>
                                <a href="">Demos</a>
                                <a href="">Support</a>
                            </div>
                        </div>
                        <div className="footer-newsletter">
                            <p className="footer-newsletter__tittle">Join Newsletter</p>
                            <div className="footer-newsletter__bottom">
                                <p className="footer-newsletter__subtittle">Subscribe our newsletter to get more free design course and resource</p>
                                <div className="footer-newsletter__input-wrapper">
                                    <input type="text" placeholder="Enter your email" />
                                    <Button color="blue" size="small"><img src={Nextstep} alt="" /></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__copyright">
                    <p>Copyright © 2021 UI8 LLC. All rights reserved</p>
                    <div>
                        <p>We use cookies for better service.</p>
                        <a href="">Accept</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;