import React, { Component } from "react";
import ArrowToTop from "../../../../../common/components/arrowToTop/ArrowToTop";
import initialState from "../../../../../../assets/store/initialState";

let newDate = new Date();
let year = newDate.getFullYear();

class Footer extends Component {
    render() {
        return (
            <>
                <section className="c-footer g-pdMobile">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 footer--left">
                                <div className="footer__title">
                                    Contact Info
                                </div>
                                <div className="row">
                                    <div className="col-md-6 footer__contact">
                                        <div className="footer__contact-subtitle">
                                            Phone
                                        </div>
                                        <a href="#" className="footer__contact-link g-text--default">
                                            +49 21 1234567
                                        </a>
                                    </div>
                                    <div className="col-md-6 footer__contact">
                                        <div className="footer__contact-subtitle">
                                            Email
                                        </div>
                                        <a href={`mailto:${initialState.emailContact}`} className="footer__contact-link g-text--default">
                                            {initialState.emailContact}
                                        </a>
                                    </div>
                                </div>
                                <div className="footer__contact g-text--default">
                                    <div className="footer__contact-subtitle _down">
                                        Holiday Address
                                    </div>
                                    <span className="footer__contact-address">Am Lustgarten 1,</span>
                                    <span className="footer__contact-address">10178 Berlin, Germany</span>
                                </div>
                            </div>
                            <div className="col-md-6 footer--right">
                                <div className="footer__title">
                                    Christmas in Europe
                                </div>
                                <div className="g-text--default">
                                    Christmas unites millions of people, turning Europe into the world capital of lights,
                                    carols and joy. This is a holiday where traditions come to life on every street; the
                                    scale is amazing, and the markets show the main winter spirit of the planet.
                                </div>
                                <ul className="footer__social">
                                    <li className="footer__social-item">
                                        <a href="#" className="footer__social-link">
                                            <i className="fa-brands fa-square-facebook"></i>
                                        </a>
                                    </li>
                                    <li className="footer__social-item">
                                        <a href="#" className="footer__social-link">
                                            <i className="fa-brands fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li className="footer__social-item">
                                        <a href="#" className="footer__social-link">
                                            <i className="fa-brands fa-pinterest"></i>
                                        </a>
                                    </li>
                                    <li className="footer__social-item">
                                        <a href="#" className="footer__social-link">
                                            <i className="fa-brands fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li className="footer__social-item">
                                        <a href="#" className="footer__social-link">
                                            <i className="fa-brands fa-dribbble"></i>
                                        </a>
                                    </li>
                                </ul>
                                <div className="footer__copy g-text--default">
                                    &copy; All rights reserved {year}
                                </div>
                            </div>
                        </div>
                    </div>

                    <ArrowToTop />
                </section>
            </>
        );
    };
};

export default Footer;
