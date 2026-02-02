import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

function Hero() {
    return (
        <section id="home" className="hero">
            <Navbar />
            <div className="hero-bubble-1"></div>
            <div className="hero-bubble-2"></div>

            <div className="hero-bubble-4"></div>
            <div className="hero-bubble-5"></div>
            <div className="container">
                <div className="hero-badge">
                    <div className="badge-icon">
                        <img src="/images/twemoji_house.svg" alt="House" className="badge-icon-img" />
                    </div>
                    <span className="badge-text">Smart Society Management</span>
                </div>
                <h1 className="hero-title">Your Society, Simplified.</h1>
                <p className="hero-description">
                    Aanganone is your all-in-one society management platform that connects residents, staff, and management seamlessly. From complaints to communication everything happens digitally and transparently.
                </p>
                <div className="hero-buttons">
                    <Link to="/contact" className="btn-primary">
                        Request a Demo
                        <span className="arrow">→</span>
                    </Link>
                    <Link to="/features" className="btn-secondary">
                        Explore a features
                    </Link>
                </div>
            </div>
            <div className="hero-illustration">
                <img src="/images/AAN 1 (1).jpg" alt="Diverse community members" className="hero-image" />
            </div>
        </section>
    )
}

export default Hero
