import React from 'react';

function ImpactSection() {
    return (
        <section id="impact" className="impact-section">
            <div className="features-container"> {/* Reusing container for consistency */}

                {/* Header */}
                <div className="impact-header">
                    <div className="hero-badge">
                        <div className="badge-icon">
                            <img src="/images/twemoji_house.svg" alt="house" className="badge-icon-img" />
                        </div>
                        <span className="badge-text">Impact & Benefits</span>
                    </div>
                    <h2 className="impact-title">Measurable Results for Your Society</h2>
                    <p className="impact-subtitle">Join hundreds of societies already experiencing the transformation</p>
                </div>

                {/* Stats Grid */}
                <div className="impact-stats-grid">
                    {/* Card 1 */}
                    <div className="impact-card">
                        <div className="impact-icon-circle">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                        </div>
                        <div className="impact-percentage">75%</div>
                        <h3 className="impact-card-title">Time Saved</h3>
                        <p className="impact-card-desc">Reduce administrative work and manual processes significantly</p>
                    </div>

                    {/* Card 2 */}
                    <div className="impact-card">
                        <div className="impact-icon-circle">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                <polyline points="10 9 9 9 8 9"></polyline>
                            </svg>
                        </div>
                        <div className="impact-percentage">85%</div>
                        <h3 className="impact-card-title">Fewer Complaints</h3>
                        <p className="impact-card-desc">Streamlined issue resolution leads to happier residents and less friction</p>
                    </div>

                    {/* Card 3 */}
                    <div className="impact-card">
                        <div className="impact-icon-circle">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                            </svg>
                        </div>
                        <div className="impact-percentage">90%</div>
                        <h3 className="impact-card-title">Cost Effective</h3>
                        <p className="impact-card-desc">Optimize resource allocation and reduce operational overhead costs</p>
                    </div>

                    {/* Card 4 */}
                    <div className="impact-card">
                        <div className="impact-icon-circle">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                        </div>
                        <div className="impact-percentage">100%</div>
                        <h3 className="impact-card-title">Transparency</h3>
                        <p className="impact-card-desc">Complete visibility into society finances and management activities</p>
                    </div>
                </div>

                {/* Benefits List (Bottom) */}
                <div className="impact-benefits-list">
                    {/* Benefit 1 */}
                    <div className="benefit-item">
                        <div className="benefit-icon">
                            <div className="benefit-dot"></div>
                        </div>
                        <h3 className="benefit-title">Cloud-Based Access</h3>
                        <p className="benefit-desc">Access from anywhere, anytime on any device</p>
                    </div>

                    {/* Benefit 2 */}
                    <div className="benefit-item">
                        <div className="benefit-icon">
                            <div className="benefit-dot"></div>
                        </div>
                        <h3 className="benefit-title">Real-Time Updates</h3>
                        <p className="benefit-desc">Instant notifications keep everyone informed</p>
                    </div>

                    {/* Benefit 3 */}
                    <div className="benefit-item">
                        <div className="benefit-icon">
                            <div className="benefit-dot"></div>
                        </div>
                        <h3 className="benefit-title">Easy Onboarding</h3>
                        <p className="benefit-desc">Get your entire society up and running in days</p>
                    </div>

                    {/* Benefit 4 */}
                    <div className="benefit-item">
                        <div className="benefit-icon">
                            <div className="benefit-dot"></div>
                        </div>
                        <h3 className="benefit-title">Dedicated Support</h3>
                        <p className="benefit-desc">Technical assistance whenever you need it</p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default ImpactSection;
