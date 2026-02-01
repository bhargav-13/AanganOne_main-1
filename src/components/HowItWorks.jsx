import { Link } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './Navbar'

function HowItWorks() {
    const [activeCard, setActiveCard] = useState(null)

    const handleCardClick = (cardId) => {
        setActiveCard(prev => prev === cardId ? null : cardId)
    }

    const handleCardHover = (cardId) => {
        setActiveCard(cardId)
    }

    return (
        <div className="min-h-screen">
            {/* Header with Logo and Navigation - Same as Feature Page */}
            <Navbar />

            {/* Hero Section */}
            <section className="how-it-works-hero">
                {/* Purple Bubble Decorations - Same as Home Page */}
                <div className="hero-bubble-1"></div>
                <div className="hero-bubble-2"></div>
                <div className="hero-bubble-3"></div>
                <div className="hero-bubble-4"></div>
                <div className="hero-bubble-5"></div>

                <div className="how-it-works-hero-container relative z-10">
                    <div className="how-it-works-hero-content">
                        <h1 className="how-it-works-hero-title">
                            There's a better<br />
                            way to manage<br />
                            your community.
                        </h1>
                        <p className="how-it-works-hero-subtitle">
                            See how one platform can simplify every part of community living.
                        </p>
                        <Link to="/contact" className="how-it-works-hero-button inline-flex items-center justify-center">
                            Book A Demo
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.5 15L12.5 10L7.5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>
                </div>

            </section>

            {/* Built for Today Section */}
            <section className="how-it-works-content">
                <div className="how-it-works-content-container">
                    {/* Section Title */}
                    <h2 className="section-title">
                        1. Built for Today, Ready for Tomorrow
                    </h2>

                    {/* Two Cards with iPhone Mockups */}
                    <div className="how-it-works-cards-grid">
                        {/* Card 1 */}
                        <div className="how-it-works-card">
                            <div className="how-it-works-phones">
                                <div className="how-it-works-phone">
                                    <img
                                        src="/images/iPhone 14 Pro Max.png"
                                        alt="Aanganone App Screen 1"
                                        className="how-it-works-phone-img"
                                    />
                                </div>
                                <div className="how-it-works-phone">
                                    <img
                                        src="/images/iPhone 14 Pro Max_2.png"
                                        alt="Aanganone App Screen 2"
                                        className="how-it-works-phone-img"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="how-it-works-card">
                            <div className="how-it-works-phones">
                                <div className="how-it-works-phone">
                                    <img
                                        src="/images/iPhone 14 Pro Max.png"
                                        alt="Aanganone App Screen 3"
                                        className="how-it-works-phone-img"
                                    />
                                </div>
                                <div className="how-it-works-phone">
                                    <img
                                        src="/images/iPhone 14 Pro Max_2.png"
                                        alt="Aanganone App Screen 4"
                                        className="how-it-works-phone-img"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Description Text */}
                    <div className="space-y-6">
                        <p
                            className="text-base md:text-lg lg:text-xl leading-relaxed"
                            style={{ color: '#77787C' }}
                        >
                            Aanganone wasn't created to copy what already exists — it was built to solve real challenges faced by modern residential communities. Designed with clarity and practicality in mind, the platform focuses on simplifying everyday operations and improving how communities function.
                        </p>
                        <p
                            className="text-base md:text-lg lg:text-xl leading-relaxed"
                            style={{ color: '#77787C' }}
                        >
                            From communication to daily management, Aanganone is thoughtfully crafted to support residents, RWAs, and management teams with tools that are easy to use and ready to scale.
                        </p>
                    </div>
                </div>
            </section>

            {/* Hear It from Our Community Section */}
            <section className="relative z-10 bg-[#F7F7F7] section-padding">
                <div className="container-padding">
                    {/* Section Title */}
                    <h2 className="section-title">
                        2. Hear It from Our Community
                    </h2>

                    {/* Two Column Layout */}
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
                        {/* Left Column - Text Content */}
                        <div className="flex-1 space-y-6">
                            <p
                                className="text-base md:text-lg lg:text-xl leading-relaxed"
                                style={{ color: '#77787C' }}
                            >
                                Real experiences speak louder than numbers. Discover how Aanganone is helping communities simplify daily living through the voices of residents and management teams who use it every day.
                            </p>
                            <p
                                className="text-base md:text-lg lg:text-xl leading-relaxed"
                                style={{ color: '#77787C' }}
                            >
                                From smoother communication and faster issue resolution to clearer processes and better coordination, Aanganone supports communities in ways that truly matter. These stories reflect everyday moments — when managing a society feels simpler, communication feels clearer, and community life feels more connected.
                            </p>
                        </div>

                        {/* Right Column - Image */}
                        <div className="flex-1 flex justify-center lg:justify-end">
                            <img
                                src="/images/Group 11.png"
                                alt="Community Testimonials"
                                className="w-full lg:max-w-[120%] h-auto object-contain scale-110 origin-right"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* One App for Every Community Need Section */}
            <section className="relative z-10 bg-[#F7F7F7] section-padding">
                <div className="container-padding">
                    {/* Section Title */}
                    <h2 className="section-title">
                        3. One App for Every Community Need
                    </h2>

                    {/* Three Images Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Image 1 - Hover Flip */}
                        <div className={`flip-card rounded-3xl ${activeCard === 'card1' ? 'flipped' : ''}`} onClick={() => handleCardClick('card1')} onMouseEnter={() => handleCardHover('card1')}>
                            <div className="flip-card-inner">
                                {/* Front Side */}
                                <div className="flip-card-front rounded-3xl overflow-hidden h-full" style={{ border: '1px solid #77787C80' }}>
                                    <img
                                        src="/images/Frame 2118388466.png"
                                        alt="Community Need 1"
                                        className="w-full h-full object-cover bg-[#EEF0FF]"
                                    />
                                </div>
                                {/* Back Side */}
                                <div className="flip-card-back rounded-3xl" style={{ border: '1px solid #77787C80' }}>
                                    <h3 className="text-2xl font-semibold mb-4 text-[#473F52]">Community</h3>
                                    <p className="text-sm md:text-base text-[#77787C] leading-relaxed text-justify">
                                        A complete management system designed for RWAs and society administrators. Handle communication, maintenance requests, complaints, vendor coordination, notices, and amenity bookings from one centralized dashboard. With clear workflows and real-time updates, everyday administration becomes simpler and more efficient.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Image 2 - Hover Flip */}
                        <div className={`flip-card rounded-3xl ${activeCard === 'card2' ? 'flipped' : ''}`} onClick={() => handleCardClick('card2')} onMouseEnter={() => handleCardHover('card2')}>
                            <div className="flip-card-inner">
                                {/* Front Side */}
                                <div className="flip-card-front rounded-3xl overflow-hidden h-full" style={{ border: '1px solid #77787C80' }}>
                                    <img
                                        src="/images/Frame 2118388467.png"
                                        alt="Community Need 2"
                                        className="w-full h-full object-cover bg-[#FFF7E6]"
                                    />
                                </div>
                                {/* Back Side */}
                                <div className="flip-card-back rounded-3xl" style={{ border: '1px solid #77787C80' }}>
                                    <h3 className="text-2xl font-semibold mb-4 text-[#473F52]">Security</h3>
                                    <p className="text-sm md:text-base text-[#77787C] leading-relaxed text-justify">
                                        Create a safer community with smart and reliable security tools. Track visitor entries, manage approvals, and maintain better visibility across the society. Aanganone helps residents feel secure while giving management better control over access and monitoring.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Image 3 - Hover Flip */}
                        <div className={`flip-card rounded-3xl ${activeCard === 'card3' ? 'flipped' : ''}`} onClick={() => handleCardClick('card3')} onMouseEnter={() => handleCardHover('card3')}>
                            <div className="flip-card-inner">
                                {/* Front Side */}
                                <div className="flip-card-front rounded-3xl overflow-hidden h-full" style={{ border: '1px solid #77787C80' }}>
                                    <img
                                        src="/images/Frame 2118388468.png"
                                        alt="Community Need 3"
                                        className="w-full h-full object-cover bg-[#E6FFF0]"
                                    />
                                </div>
                                {/* Back Side */}
                                <div className="flip-card-back rounded-3xl" style={{ border: '1px solid #77787C80' }}>
                                    <h3 className="text-2xl font-semibold mb-4 text-[#473F52]">Accounting</h3>
                                    <p className="text-sm md:text-base text-[#77787C] leading-relaxed text-justify">
                                        Manage society finances with confidence and transparency. From maintenance billing and collections to expense tracking and reports, Aanganone simplifies financial management and helps RWAs maintain clear, accurate records without manual effort.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Privacy at the Heart of Aanganone Section */}
            <section className="relative z-10 bg-[#F7F7F7] section-padding">
                <div className="container-padding">
                    {/* Section Title */}
                    <h2
                        className="text-3xl md:text-4xl font-semibold text-center mb-10"
                        style={{ color: '#473F52' }}
                    >
                        4. Privacy at the Heart of Aanganone
                    </h2>

                    {/* Privacy Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Card 1 - Highlighted */}
                        <div className="privacy-card bg-white rounded-3xl p-8 border border-[#E5E5E5] shadow-sm flex flex-col items-start text-left">
                            <h3 className="text-2xl font-semibold mb-4 w-full text-center" style={{ color: '#473F52' }}>
                                Secure Infrastructure
                            </h3>
                            <p className="text-base leading-relaxed" style={{ color: '#77787C' }}>
                                Aanganone is built on a secure and reliable architecture that prioritizes data protection, controlled access, and safe storage of information.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="privacy-card bg-white rounded-3xl p-8 border border-[#E5E5E5] shadow-sm flex flex-col items-start text-left">
                            <h3 className="text-2xl font-semibold mb-4 w-full text-center" style={{ color: '#473F52' }}>
                                Privacy-First Design
                            </h3>
                            <p className="text-base leading-relaxed" style={{ color: '#77787C' }}>
                                Our systems are designed to collect only what's necessary and ensure data is used responsibly, clearly, and for the benefit of the community.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="privacy-card bg-white rounded-3xl p-8 border border-[#E5E5E5] shadow-sm flex flex-col items-start text-left">
                            <h3 className="text-2xl font-semibold mb-4 w-full text-center" style={{ color: '#473F52' }}>
                                Compliance Ready
                            </h3>
                            <p className="text-base leading-relaxed" style={{ color: '#77787C' }}>
                                We align our processes with applicable data protection guidelines and evolving regulatory requirements to help communities stay compliant and confident.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="privacy-card bg-white rounded-3xl p-8 border border-[#E5E5E5] shadow-sm flex flex-col items-start text-left">
                            <h3 className="text-2xl font-semibold mb-4 w-full text-center" style={{ color: '#473F52' }}>
                                Role-Based Access
                            </h3>
                            <p className="text-base leading-relaxed" style={{ color: '#77787C' }}>
                                Access is granted strictly based on user roles. Residents, committee members, and staff only see what they are authorized to nothing more.
                            </p>
                        </div>

                        {/* Card 5 */}
                        <div className="privacy-card bg-white rounded-3xl p-8 border border-[#E5E5E5] shadow-sm flex flex-col items-start text-left">
                            <h3 className="text-2xl font-semibold mb-4 w-full text-center" style={{ color: '#473F52' }}>
                                Encrypted Data Storage
                            </h3>
                            <p className="text-base leading-relaxed" style={{ color: '#77787C' }}>
                                Sensitive information is securely stored using encryption practices to protect data from unauthorized access.
                            </p>
                        </div>

                        {/* Card 6 */}
                        <div className="privacy-card bg-white rounded-3xl p-8 border border-[#E5E5E5] shadow-sm flex flex-col items-start text-left">
                            <h3 className="text-2xl font-semibold mb-4 w-full text-center" style={{ color: '#473F52' }}>
                                Data Ownership & Control
                            </h3>
                            <p className="text-base leading-relaxed" style={{ color: '#77787C' }}>
                                Communities retain control over their data. Information is never shared or used without clear purpose and consent.
                            </p>
                        </div>

                        {/* Card 7 */}
                        <div className="privacy-card bg-white rounded-3xl p-8 border border-[#E5E5E5] shadow-sm flex flex-col items-start text-left">
                            <h3 className="text-2xl font-semibold mb-4 w-full text-center" style={{ color: '#473F52' }}>
                                Regular Security Reviews
                            </h3>
                            <p className="text-base leading-relaxed" style={{ color: '#77787C' }}>
                                Our systems undergo periodic checks and improvements to stay aligned with evolving security best practices.
                            </p>
                        </div>

                        {/* Card 8 */}
                        <div className="privacy-card bg-white rounded-3xl p-8 border border-[#E5E5E5] shadow-sm flex flex-col items-start text-left">
                            <h3 className="text-2xl font-semibold mb-4 w-full text-center" style={{ color: '#473F52' }}>
                                Safe Cloud Infrastructure
                            </h3>
                            <p className="text-base leading-relaxed" style={{ color: '#77787C' }}>
                                Aanganone runs on reliable cloud infrastructure with strong security controls, backups, and availability measures.
                            </p>
                        </div>

                        {/* Card 9 */}
                        <div className="privacy-card bg-white rounded-3xl p-8 border border-[#E5E5E5] shadow-sm flex flex-col items-start text-left">
                            <h3 className="text-2xl font-semibold mb-4 w-full text-center" style={{ color: '#473F52' }}>
                                Audit & Activity Logs
                            </h3>
                            <p className="text-base leading-relaxed" style={{ color: '#77787C' }}>
                                Important actions are recorded to maintain accountability and clarity across administrative and financial activities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* A Marketplace Made for Your Community Section */}
            <section className="relative z-10 bg-[#F7F7F7] section-padding">
                <div className="container-padding">
                    {/* Section Title */}
                    <h2
                        className="text-3xl md:text-4xl font-semibold text-center mb-10"
                        style={{ color: '#473F52' }}
                    >
                        5. A Marketplace Made for Your Community
                    </h2>

                    {/* Two Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {/* Image 1 */}
                        <div className="rounded-3xl overflow-hidden" style={{ border: '1px solid #77787C80' }}>
                            <img
                                src="/images/Frame 2118388466 (1).png"
                                alt="Marketplace Screen 1"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Image 2 */}
                        <div className="rounded-3xl overflow-hidden" style={{ border: '1px solid #77787C80' }}>
                            <img
                                src="/images/Frame 2118388468 (1).png"
                                alt="Marketplace Screen 2"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    {/* Description Text */}
                    <div className="space-y-6">
                        <p
                            className="text-base md:text-lg lg:text-xl leading-relaxed"
                            style={{ color: '#77787C' }}
                        >
                            Aanganone offers a dedicated community marketplace where residents can easily connect to buy, sell, and discover useful products and services all within a trusted environment.
                        </p>
                        <p
                            className="text-base md:text-lg lg:text-xl leading-relaxed"
                            style={{ color: '#77787C' }}
                        >
                            Designed for convenience and safety, the marketplace helps neighbours trade items, find local services, and explore relevant offerings without stepping outside their community network.
                        </p>
                    </div>
                </div>
            </section>

            {/* More to Explore Section */}
            <section className="relative z-10 bg-[#F7F7F7] section-padding">
                <div className="container-padding">
                    {/* Section Title */}
                    <h2
                        className="text-3xl md:text-4xl font-semibold text-center mb-10"
                        style={{ color: '#473F52' }}
                    >
                        6. And There’s So Much More to Explore
                    </h2>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Feature 1 */}
                        <div className="relative rounded-3xl overflow-hidden group">
                            <img
                                src="/images/Frame 2118388466 (2).png"
                                alt="Amenities Booking"
                                className="w-full h-auto"
                            />
                        </div>

                        {/* Feature 2 */}
                        <div className="relative rounded-3xl overflow-hidden group">
                            <img
                                src="/images/Frame 2118388467 (1).png"
                                alt="Accounting Module"
                                className="w-full h-auto"
                            />
                        </div>

                        {/* Feature 3 */}
                        <div className="relative rounded-3xl overflow-hidden group">
                            <img
                                src="/images/Frame 2118388468 (2).png"
                                alt="Visitor Management"
                                className="w-full h-auto"
                            />
                        </div>

                        {/* Feature 4 */}
                        <div className="relative rounded-3xl overflow-hidden group">
                            <img
                                src="/images/Frame 2118388466 (3).png"
                                alt="Parking Management"
                                className="w-full h-auto"
                            />
                        </div>

                        {/* Feature 5 */}
                        <div className="relative rounded-3xl overflow-hidden group">
                            <img
                                src="/images/Frame 2118388467 (2).png"
                                alt="Child Safety Alerts"
                                className="w-full h-auto"
                            />
                        </div>

                        {/* Feature 6 */}
                        <div className="relative rounded-3xl overflow-hidden group">
                            <img
                                src="/images/Frame 2118388468 (3).png"
                                alt="Guard Patrolling"
                                className="w-full h-auto"
                            />
                        </div>

                        {/* Feature 7 */}
                        <div className="relative rounded-3xl overflow-hidden group">
                            <img
                                src="/images/Frame 2118388466 (4).png"
                                alt="Resident Communication"
                                className="w-full h-auto"
                            />
                        </div>

                        {/* Feature 8 */}
                        <div className="relative rounded-3xl overflow-hidden group">
                            <img
                                src="/images/Frame 2118388467 (3).png"
                                alt="Complaints Management"
                                className="w-full h-auto"
                            />
                        </div>

                        {/* Feature 9 */}
                        <div className="relative rounded-3xl overflow-hidden group">
                            <img
                                src="/images/Frame 2118388468 (4).png"
                                alt="ANPR Access"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Society Reviews Section */}
            <section id="about" className="testimonials testimonials-feature">
                <div className="container">
                    <div className="testimonials-label testimonials-label-feature">
                        <div className="testimonials-label-icon">
                            <img src="/images/twemoji_house.svg" alt="House" className="badge-icon-img" />
                        </div>
                        <span>Society Reviews</span>
                    </div>
                    <h2 className="section-title">How Aanganone Makes a Difference</h2>
                    <div className="testimonials-wrapper">
                        <div className="testimonials-grid">
                            <div className="testimonial-card">
                                <div className="quote-icon">"</div>
                                <div className="testimonial-header">
                                    <h3 className="society-name">Shaligram</h3>
                                    <span className="society-suffix">Society</span>
                                </div>
                                <p className="testimonial-text">
                                    At Shaligram Society, the secretary used to handle 50+ calls weekly for maintenance and updates. After Aanganone, everything is digital residents submit complaints in-app, staff get instant assignments, and updates are tracked in real-time.
                                </p>
                                <div className="testimonial-author">
                                    <div className="author-avatar"></div>
                                    <div className="author-info">
                                        <div className="author-role">Secretary</div>
                                        <div className="author-society">Shaligram Society</div>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-card">
                                <div className="quote-icon">"</div>
                                <div className="testimonial-header">
                                    <h3 className="society-name">Indraprasth</h3>
                                    <span className="society-suffix">Society</span>
                                </div>
                                <p className="testimonial-text">
                                    Managing finances and vendor payments was a nightmare at Indraprasth Society. With Aanganone, all transactions are transparent, automated, and accessible. Our residents can track every rupee spent, and we've reduced accounting errors by 90%.
                                </p>
                                <div className="testimonial-author">
                                    <div className="author-avatar"></div>
                                    <div className="author-info">
                                        <div className="author-role">Secretary</div>
                                        <div className="author-society">Indraprasth Society</div>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-card">
                                <div className="quote-icon">"</div>
                                <div className="testimonial-header">
                                    <h3 className="society-name">Satyagruh</h3>
                                    <span className="society-suffix">Society</span>
                                </div>
                                <p className="testimonial-text">
                                    Event management used to be chaotic at Satyagruh Society. Now with Aanganone, residents can book amenities, RSVP to events, and get instant notifications. Our community engagement has increased significantly, and everything runs smoothly.
                                </p>
                                <div className="testimonial-author">
                                    <div className="author-avatar"></div>
                                    <div className="author-info">
                                        <div className="author-role">Secretary</div>
                                        <div className="author-society">Satyagruh Society</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="testimonials-nav">
                            <button className="nav-arrow nav-prev">‹</button>
                            <button className="nav-arrow nav-next">›</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-left-section">
                            <div className="footer-brand">
                                <h3>AANGANONE SPACE</h3>
                            </div>
                            <div className="footer-socials">
                                <h4>SOCIALS</h4>
                                <div className="social-links">
                                    <a href="https://www.linkedin.com/company/aanganone" target="_blank" rel="noopener noreferrer">Linkedin</a>
                                </div>
                            </div>
                        </div>
                        <div className="footer-divider-vertical"></div>
                        <div className="footer-right-section">
                            <div className="footer-about">
                                <h4>ABOUT</h4>
                                <p>Aanganone: Outsmarting Traditional Society Management. Securing Tomorrow At Aanganone, We Don't Just Defend We Outsmart</p>
                            </div>
                            <div className="footer-navigation">
                                <h4>NAVIGATION</h4>
                                <div className="footer-nav">
                                    <Link to="/">Home</Link>
                                    <span className="bullet">•</span>
                                    <Link to="/feature">About</Link>
                                    <span className="bullet">•</span>
                                    <Link to="/how-it-works">Features</Link>
                                    <span className="bullet">•</span>
                                    <Link to="/privacy-policy">Privacy Policy</Link>
                                    <span className="bullet">•</span>
                                    <Link to="/contact">Contact</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-divider-horizontal"></div>
                    <div className="footer-bottom">
                        <p>Copyright 2026 - Aanganone space All rights reserved</p>
                        <p>Powered by <a href="https://www.codelixitsolutions.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#473F52', textDecoration: 'none' }}>Codelix IT Solutions Pvt. Ltd.</a></p>
                    </div>
                </div>
            </footer>

            {/* Bottom Border Line */}
            <div className="relative z-10 h-1 bg-blue-400"></div>
        </div>
    )
}

export default HowItWorks
