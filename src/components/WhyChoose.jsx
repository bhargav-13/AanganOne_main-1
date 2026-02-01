import React from 'react';

function WhyChoose() {
    return (
        <section className="why-choose">
            <div className="container">
                <div className="why-choose-badge">
                    <span>Why Choose </span>
                    <span className="badge-logo-text">
                        <img src="/images/Aanganone-logo.svg" alt="Aanganone" className="badge-logo-img" />
                    </span>
                </div>
                <h2 className="section-title">Why Societies Choose Aanganone?</h2>
                <p className="section-subtitle">Traditional society management creates unnecessary friction. We eliminate it.</p>

                <div className="problem-solution-grid">
                    <div className="ps-card">
                        <div className="ps-item problem">
                            <div className="ps-icon">
                                <img src="/images/simple-line-icons_close.svg" alt="Close" className="ps-icon-img" />
                            </div>
                            <span>Manual paperwork and endless phone calls</span>
                        </div>
                        <div className="ps-item solution">
                            <div className="ps-icon">
                                <img src="/images/healthicons_yes-outline.svg" alt="Check" className="ps-icon-img" />
                            </div>
                            <span>Digital workflows and instant notifications</span>
                        </div>
                    </div>
                    <div className="ps-card">
                        <div className="ps-item problem">
                            <div className="ps-icon">
                                <img src="/images/simple-line-icons_close.svg" alt="Close" className="ps-icon-img" />
                            </div>
                            <span>Lost complaints and missed follow-ups</span>
                        </div>
                        <div className="ps-item solution">
                            <div className="ps-icon">
                                <img src="/images/healthicons_yes-outline.svg" alt="Check" className="ps-icon-img" />
                            </div>
                            <span>Automated tracking with real-time updates</span>
                        </div>
                    </div>
                    <div className="ps-card">
                        <div className="ps-item problem">
                            <div className="ps-icon">
                                <img src="/images/simple-line-icons_close.svg" alt="Close" className="ps-icon-img" />
                            </div>
                            <span>Lack of transparency in society finances</span>
                        </div>
                        <div className="ps-item solution">
                            <div className="ps-icon">
                                <img src="/images/healthicons_yes-outline.svg" alt="Check" className="ps-icon-img" />
                            </div>
                            <span>Clear financial records accessible to all</span>
                        </div>
                    </div>
                    <div className="ps-card">
                        <div className="ps-item problem">
                            <div className="ps-icon">
                                <img src="/images/simple-line-icons_close.svg" alt="Close" className="ps-icon-img" />
                            </div>
                            <span>Coordination chaos between residents and staff</span>
                        </div>
                        <div className="ps-item solution">
                            <div className="ps-icon">
                                <img src="/images/healthicons_yes-outline.svg" alt="Check" className="ps-icon-img" />
                            </div>
                            <span>Centralized communication platform</span>
                        </div>
                    </div>
                </div>

                <div className="stats-section">
                    <div className="stat-item">
                        <div className="stat-number">100+</div>
                        <div className="stat-label">Societies Connected</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">25k+</div>
                        <div className="stat-label">Active Residents</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">95%</div>
                        <div className="stat-label">Satisfaction Rate</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">24/7</div>
                        <div className="stat-label">Support Available</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyChoose;
