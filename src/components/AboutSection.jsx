import React from 'react';

function AboutSection() {
    return (
        <section id="about" className="about-section">
            <div className="container-padding about-section-container">
                <div className="about-container">
                    <div className="about-left">
                        <div className="about-card">
                            <span className="about-label">About</span>
                            <div className="about-layout">
                                <div className="about-timeline">
                                    <div className="about-icon">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" fill="white" />
                                        </svg>
                                    </div>
                                    <div className="about-line-wrapper">
                                        <div className="about-line"></div>
                                        <div className="about-line-node"></div>
                                    </div>
                                </div>
                                <div className="about-content-right">
                                    <div className="about-main-card">
                                        <div className="about-logo">
                                            <img src="/images/Aanganone-logo.svg" alt="Aanganone" className="about-logo-img" />
                                        </div>
                                        <p className="about-description">
                                            Aanganone is an AI-powered society management system built to make community living smarter, more connected, and more peaceful. Whether it's handling complaints, scheduling staff, managing finances, or organizing events – Aanganone does it all in one place.
                                        </p>
                                    </div>
                                    <div className="about-bottom">
                                        <div className="about-wave-card">
                                            <div className="wave-bars">
                                                <span className="wave-bar wave-bar-1"></span>
                                                <span className="wave-bar wave-bar-2"></span>
                                                <span className="wave-bar wave-bar-3"></span>
                                                <span className="wave-bar wave-bar-4"></span>
                                                <span className="wave-bar wave-bar-5"></span>
                                                <span className="wave-bar wave-bar-6"></span>
                                                <span className="wave-bar wave-bar-7"></span>
                                                <span className="wave-bar wave-bar-8"></span>
                                                <span className="wave-bar wave-bar-9"></span>
                                                <span className="wave-bar wave-bar-10"></span>
                                            </div>
                                        </div>
                                        <div className="about-stats">
                                            <div className="about-stats-number">100+</div>
                                            <div className="about-stats-label">Society Trust</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-right">
                        <div className="feature-card">
                            <div className="feature-icon">
                                <span>✓</span>
                            </div>
                            <div className="feature-text">Connect residents, staff, and secretaries digitally.</div>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">
                                <span>✓</span>
                            </div>
                            <div className="feature-text">Automate complaints, notices, and approvals.</div>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">
                                <span>✓</span>
                            </div>
                            <div className="feature-text">Manage staff, vendors, and finances in one place.</div>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">
                                <span>✓</span>
                            </div>
                            <div className="feature-text">Plan and organize society events effortlessly.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
