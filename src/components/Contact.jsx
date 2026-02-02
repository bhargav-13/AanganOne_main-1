import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from './SEO'
import HeroSection from './HeroSection'
import ContactAppSection from './ContactAppSection'
import ContactStatsSection from './ContactStatsSection'
import AboutSection from './AboutSection'
import FadeIn from './FadeIn'

function Contact() {
    const [expandedFAQ, setExpandedFAQ] = useState(null)

    const toggleFAQ = (index) => {
        setExpandedFAQ(expandedFAQ === index ? null : index)
    }

    const faqs = [
        {
            question: "What is Aanganone and how does it work?",
            answer: "Aanganone is a comprehensive society management platform that digitizes all aspects of community living. It connects residents, staff, and management through a unified app, enabling features like complaint tracking, announcements, event management, amenity booking, and more. Everything happens in real-time with complete transparency."
        },
        {
            question: "How long does it take to set up Aanganone for my society?",
            answer: "Setting up Aanganone is quick and straightforward. Typically, it takes just a few days to get your entire society up and running. Our team provides complete onboarding support, including data migration, staff training, and resident registration. Most societies are fully operational within 3-5 business days."
        },
        {
            question: "Is my society data secure on Aanganone?",
            answer: "Yes, data security is our top priority. Aanganone uses industry-standard encryption, secure cloud storage, and regular security audits. All data is backed up automatically and stored in compliance with data protection regulations. We never share your society's information with third parties."
        },
        {
            question: "Can residents access Aanganone on their phones?",
            answer: "Absolutely! Aanganone is available as a mobile app for both iOS and Android devices. Residents can download the app, register with their society, and access all features including complaints, announcements, events, and amenity bookings right from their smartphones."
        },
        {
            question: "What happens if we need help or face technical issues?",
            answer: "We provide 24/7 dedicated support to all our societies. Our support team is available via phone, email, and in-app chat. We also offer on-site training sessions and regular check-ins to ensure your society gets the most out of the platform."
        },
        {
            question: "How much does Aanganone cost?",
            answer: "Aanganone offers flexible pricing plans based on your society's size and specific requirements. We provide transparent pricing with no hidden costs. Contact us for a free demo and customized pricing quote that fits your society's budget."
        },
        {
            question: "Can we customize features according to our society needs?",
            answer: "Yes, Aanganone is highly customizable. We understand that every society has unique requirements. Our team works with you to configure the platform according to your specific needs, including custom workflows, approval processes, and feature preferences."
        },
        {
            question: "What if our staff is not tech-savvy?",
            answer: "No worries! Aanganone is designed to be user-friendly and intuitive. We provide comprehensive training sessions for all staff members, including step-by-step guides and video tutorials. Our support team is always available to assist, and most staff members become comfortable with the platform within a few days."
        }
    ]

    return (
        <div className="min-h-screen">
            <SEO
                title="Contact Us - Get in Touch with AanganOne"
                description="Ready to transform your society management? Contact AanganOne for a demo, pricing inquiries, or support. We're here to help."
                url="https://aanganone.com/contact"
            />
            <HeroSection />
            <FadeIn delay={100}><ContactAppSection /></FadeIn>
            <FadeIn delay={200}><ContactStatsSection /></FadeIn>

            {/* About Section */}
            <FadeIn delay={300}><AboutSection /></FadeIn>

            {/* Reach Communities Section */}
            <FadeIn>
                <section className="reach-communities">
                    <div className="reach-communities-container">
                        {/* Header Section */}
                        <div className="reach-communities-header">
                            <p className="reach-communities-label">The Aanganone App</p>
                            <h2 className="section-title">A Smarter Way to Manage Communities</h2>
                            <p className="reach-communities-tagline">One platform designed to simplify everyday community living</p>
                        </div>

                        {/* Main Content Block */}
                        <div className="reach-communities-content">
                            {/* Left Column - Text Content */}
                            <div className="reach-communities-text">
                                <h3 className="reach-communities-heading">Reach the Right Communities</h3>
                                <p className="reach-communities-description">
                                    From premium residential societies to growing neighborhoods across cities, Aanganone helps businesses, service providers, and local brands connect directly with active communities.
                                </p>
                                <p className="reach-communities-description">
                                    Engage residents where they live, build trust, and grow visibility through a smart, community-first platform.
                                </p>
                                <button className="reach-communities-button">
                                    Submit <span className="arrow">→</span>
                                </button>
                            </div>

                            {/* Right Column - Image */}
                            <div className="reach-communities-image">
                                <img
                                    src="/images/Frame 2118388460.png"
                                    alt="Aanganone App"
                                    className="reach-communities-img"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </FadeIn>

            {/* FAQ Section */}
            <FadeIn>
                <section className="faq">
                    <div className="container">
                        <div className="faq-label">
                            <div className="faq-label-icon">
                                <img src="/images/twemoji_house.svg" alt="House" className="badge-icon-img" />
                            </div>
                            <span>FAQ'S</span>
                        </div>
                        <h2 className="section-title">Frequently Asked Questions</h2>
                        <p className="section-subtitle">Everything you need to know about Aanganone</p>

                        <div className="faq-list">
                            {faqs.map((faq, index) => (
                                <div key={index} className={`faq-item ${expandedFAQ === index ? 'expanded' : ''}`}>
                                    <div
                                        className="faq-question"
                                        onClick={() => toggleFAQ(index)}
                                    >
                                        <span className="faq-question-text">{faq.question}</span>
                                        <span className="faq-toggle">
                                            {expandedFAQ === index ? (
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                </svg>
                                            ) : (
                                                '+'
                                            )}
                                        </span>
                                    </div>
                                    {expandedFAQ === index && (
                                        <div className="faq-answer">{faq.answer}</div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </FadeIn>

            {/* Testimonials Section */}
            <FadeIn>
                <section id="about" className="testimonials">
                    <div className="container">
                        <div className="testimonials-label">
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
            </FadeIn>

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
                                    <Link to="/about">About</Link>
                                    <span className="bullet">•</span>
                                    <Link to="/features">Features</Link>
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
        </div>
    )
}

export default Contact
