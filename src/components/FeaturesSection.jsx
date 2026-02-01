import React from 'react';

function FeaturesSection() {
    return (
        <section id="features" className="features-section">
            <div className="features-container">
                <div className="features-label">
                    <div className="label-icon">⚙️</div>
                    <span>Core Features</span>
                </div>
                <h2 className="features-title">Everything Your Society Needs — All in One App</h2>
                <div className="features-wrapper">
                    <div className="features-grid">
                        {/* Column 1 - Left */}
                        <article className="feature-card feature-complaint">
                            <div className="feature-icon feature-icon-yellow">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="9" cy="9" r="3" fill="#fbbf24" />
                                    <circle cx="15" cy="9" r="3" fill="#fbbf24" />
                                    <circle cx="12" cy="12" r="1.5" fill="#fbbf24" />
                                    <circle cx="15" cy="7" r="1" fill="#fbbf24" />
                                </svg>
                            </div>
                            <h3 className="feature-title">Complaint Box</h3>
                            <p className="feature-desc">Residents raise issues instantly, and the secretary assigns them to staff. Track the full resolution journey from start to finish.</p>
                        </article>
                        <article className="feature-card feature-announcements">
                            <div className="feature-icon feature-icon-purple">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L4 6V12C4 16.97 7.16 21.5 12 22C16.84 21.5 20 16.97 20 12V6L12 2Z" fill="white" />
                                    <path d="M8 10L12 14L16 10" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <circle cx="12" cy="8" r="1" fill="#a855f7" />
                                    <path d="M9 15L11 17L15 13" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>
                            <h3 className="feature-title">Announcements</h3>
                            <p className="feature-desc">Broadcast important updates like water cut-offs, meetings, or festival info in seconds.</p>
                        </article>
                        {/* Column 2 - Middle */}
                        <article className="feature-card feature-visitor">
                            <div className="feature-icon feature-icon-pink">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L4 7V10C4 15.55 7.16 20.74 12 22C16.84 20.74 20 15.55 20 10V7L12 2Z" fill="white" />
                                    <path d="M9 12L11 14L15 10" stroke="#fb5da5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3 className="feature-title">Visitor & Pre-Approval</h3>
                            <p className="feature-desc">Approve guests or deliveries before they arrive — smooth security flow.</p>
                        </article>
                        <article className="feature-card feature-finance">
                            <div className="feature-icon feature-icon-green">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2" y="4" width="20" height="16" rx="2" fill="white" />
                                    <path d="M2 8H22" stroke="#22c55e" strokeWidth="2" />
                                    <circle cx="7" cy="12" r="1.5" fill="#22c55e" />
                                    <path d="M12 10L14 12L18 8" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3 className="feature-title">Finance Management</h3>
                            <p className="feature-desc">Keep full control of funds and expenses manually — transparent and easy.</p>
                        </article>
                        {/* Column 3 - Right */}
                        <article className="feature-card feature-events">
                            <div className="feature-icon feature-icon-blue">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="3" y="4" width="18" height="18" rx="2" fill="white" />
                                    <path d="M16 2V6M8 2V6M3 10H21M9 14H15" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
                                    <path d="M12 14L12 18" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
                                    <circle cx="17" cy="6" r="1.5" fill="#3b82f6" />
                                </svg>
                            </div>
                            <h3 className="feature-title">Events & Celebrations</h3>
                            <p className="feature-desc">Plan and manage upcoming events with RSVP and reminders for everyone.</p>
                        </article>
                        <article className="feature-card feature-amenities">
                            <div className="feature-icon feature-icon-pink-alt">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="3" y="3" width="6" height="6" rx="1" fill="#fb5da5" />
                                    <rect x="12" y="3" width="6" height="6" rx="1" fill="#fb5da5" />
                                    <rect x="21" y="3" width="6" height="6" rx="1" fill="#fb5da5" />
                                    <rect x="3" y="12" width="6" height="6" rx="1" fill="#fb5da5" />
                                    <rect x="12" y="12" width="6" height="6" rx="1" fill="#fb5da5" />
                                    <rect x="21" y="12" width="6" height="6" rx="1" fill="#fb5da5" />
                                    <rect x="3" y="21" width="6" height="6" rx="1" fill="#fb5da5" />
                                    <rect x="12" y="21" width="6" height="6" rx="1" fill="#fb5da5" />
                                    <rect x="21" y="21" width="6" height="6" rx="1" fill="#fb5da5" />
                                </svg>
                            </div>
                            <h3 className="feature-title">Amenities Booking</h3>
                            <p className="feature-desc">Reserve clubhouse, garden, or gym slots without paperwork or phone calls.</p>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturesSection;
