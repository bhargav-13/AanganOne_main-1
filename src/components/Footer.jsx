import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                {/* Footer CTA Section */}
                <div className="footer-cta">
                    <h2 className="footer-cta-text">
                        <span className="highlight">Start</span> managing your society the <span className="highlight">smart way.</span>
                    </h2>
                    <div className="footer-cta-icon">
                        <img src="/images/Aanganone-logo.svg" alt="AanganOne Icon" />
                    </div>
                </div>

                {/* Footer Grid */}
                <div className="footer-grid">
                    <div className="footer-brand-col">
                        <div className="footer-logo">
                            <img src="/images/Aanganone-logo.svg" alt="AanganOne" />
                            <h2>AanganOne</h2>
                        </div>
                        <p className="footer-tagline">
                            Aanganone: Outsmarting Traditional Society Management. Securing Tomorrow At Aanganone, We Don't Just Defend We Outsmart
                        </p>
                    </div>

                    <div className="footer-column">
                        <h4>Company</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/features">Service</Link></li>
                            <li><Link to="/features">Features</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Contact</h4>
                        <ul className="footer-links">
                            <li><a href="tel:8866448967">8866448967</a></li>
                            <li><a href="tel:7490909686">74909 09686</a></li>
                            <li><a href="mailto:info@aanganone.com">info@aanganone.com</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Social</h4>
                        <ul className="footer-links">
                            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter X</a></li>
                            <li><a href="https://www.linkedin.com/company/aanganone" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom-divider"></div>

                <div className="footer-bottom-content">
                    <p>Copyright 2026 - Aanganone space All rights reserved</p>
                    <div className="footer-legal-links">
                        <Link to="/privacy-policy">Privacy Policy</Link>
                        <span className="divider">|</span>
                        <Link to="/terms-and-conditions">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
