import Navbar from './Navbar';
import FadeIn from './FadeIn';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import './PrivacyPolicy.css';
import SEO from './SEO';

function PrivacyPolicy() {
    return (
        <div className="privacy-policy-page">
            <SEO
                title="Privacy Policy - Your Home, Your Data | AanganOne"
                description="Read AanganOne's Privacy Policy to understand how we collect, use, and protect your data. We are committed to data privacy and security."
                url="https://aanganone.com/privacy-policy"
            />
            <Navbar simple={true} />

            {/* Privacy Policy Content */}
            <FadeIn>
                <section className="privacy-policy">
                    <div className="container">
                        <div className="privacy-label">
                            <div className="privacy-label-icon">
                                <img src="/images/twemoji_house.svg" alt="House" className="badge-icon-img" />
                            </div>
                            <span>Privacy Policy</span>
                        </div>
                        <h1 className="section-title">Your Home, Your Data</h1>
                        <p className="section-subtitle">At Aanganone, we believe that the privacy of your home extends to the digital tools you use to manage it. This Privacy Policy explains how we collect, use, and protect your information. We view ourselves not just as a software provider, but as a Data Fiduciary — a trusted custodian of your digital information, in accordance with India's Digital Personal Data Protection Act, 2023 (DPDP Act).</p>

                        <div className="privacy-content">
                            <div className="privacy-intro">
                                <div className="intro-badge">
                                    <span className="intro-badge-icon">🛡️</span>
                                    <span className="intro-badge-text">Data Fiduciary</span>
                                </div>
                                <h2 className="intro-title">Your Trusted Digital Custodian</h2>
                                <p className="intro-description">Unlike others, we view ourselves not just as a software provider, but as a <strong>"Data Fiduciary"</strong> — a trusted custodian of your digital life.</p>
                                <div className="intro-features">
                                    <div className="intro-feature">
                                        <div className="intro-feature-icon">🔐</div>
                                        <div className="intro-feature-text">
                                            <strong>Enterprise Security</strong>
                                            <p>Bank-level encryption and security protocols</p>
                                        </div>
                                    </div>
                                    <div className="intro-feature">
                                        <div className="intro-feature-icon">🤝</div>
                                        <div className="intro-feature-text">
                                            <strong>Trust & Transparency</strong>
                                            <p>Clear policies on data usage and sharing</p>
                                        </div>
                                    </div>
                                    <div className="intro-feature">
                                        <div className="intro-feature-icon">⚖️</div>
                                        <div className="intro-feature-text">
                                            <strong>Legal Compliance</strong>
                                            <p>DPDP Act 2023 compliant practices</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="privacy-section">
                                <h2>1. Information We Collect (And Why)</h2>
                                <p>We collect the following categories of personal data, strictly limited to what is necessary for providing society management services:</p>

                                <div className="privacy-item">
                                    <h3>Identity Data</h3>
                                    <p> Name, Flat/Unit Number, Vehicle Number, and Resident Type (Owner/Tenant/Staff).</p>
                                    <p><strong>Purpose:</strong> To verify your identity as a legitimate member of the society and enable secure access.</p>
                                </div>

                                <div className="privacy-item">
                                    <h3>Contact Data</h3>
                                    <p>Phone number and Email address.</p>
                                    <p><strong>Purpose:</strong> To send login OTPs, visitor notifications, announcements, maintenance alerts, and invoices.</p>
                                </div>

                                <div className="privacy-item">
                                    <h3>Visitor Data</h3>
                                    <p>Names and phone numbers of guests you invite, along with entry and exit timestamps.</p>
                                    <p><strong>Purpose:</strong> To generate gate passes, facilitate secure entry, and maintain visitor logs.</p>
                                </div>

                                <div className="privacy-item">
                                    <h3>Financial Data</h3>
                                    <p>Maintenance payment history and dues status.</p>
                                    <p><strong>Note:</strong> Aanganone does not store full credit card, debit card, or banking details. Payments (if enabled) are processed by PCI-DSS compliant third-party payment gateways.</p>
                                </div>

                                <div className="privacy-item">
                                    <h3>Device Data</h3>
                                    <p>Device ID, IP address, operating system, and app version.</p>
                                    <p><strong>Purpose:</strong> Security logging, fraud prevention, troubleshooting, and analytics.</p>
                                </div>
                            </div>

                            <div className="privacy-section">
                                <h2>2. Permissions We Request</h2>

                                <div className="privacy-item">
                                    <h3>Contacts (Optional)</h3>
                                    <p>Used only to help you select a guest's phone number without manual entry. Contact data is not synced to our servers unless you explicitly send an invite.</p>
                                </div>

                                <div className="privacy-item">
                                    <h3>Location (Optional)</h3>
                                    <p><strong>Approximate Location:</strong> Used to verify presence at the society gate for secure access features.</p>
                                    <p><strong>Precise Location:</strong> Used only when you actively trigger the Emergency SOS feature, to share your location with security during emergencies. We do not track background location or movement history.</p>
                                </div>

                                <div className="privacy-item">
                                    <h3>Camera & Photos (Optional)</h3>
                                    <p>Used to upload images for complaints (e.g., damaged facilities), scan QR codes, or set profile pictures.</p>
                                </div>

                                <div className="privacy-item">
                                    <h3>Notifications (Required)</h3>
                                    <p>Used to alert you about visitor arrivals, announcements, emergencies, and important society updates.</p>
                                </div>
                            </div>

                            <div className="privacy-section">
                                <h2>3. How We Share Your Data</h2>
                                <p>We do not sell, trade, or rent your personal data to advertisers or third-party marketing networks. Data is shared only in the following limited circumstances:</p>

                                <div className="privacy-item">
                                    <h3>With Your RWA / Management Committee</h3>
                                    <p>Your name, flat details, vehicle information, and dues status may be shared with the Society Administration as part of core society management functions.</p>
                                </div>

                                <div className="privacy-item">
                                    <h3>With Service Providers</h3>
                                    <p>Limited data may be shared with trusted providers such as cloud hosting services (e.g., AWS / Google Cloud) and payment gateways, all bound by strict data processing agreements.</p>
                                </div>

                                <div className="privacy-item">
                                    <h3>Legal Compliance</h3>
                                    <p>We may disclose data if required by law, court order, or lawful government request.</p>
                                </div>
                            </div>

                            <div className="privacy-section">
                                <h2>4. Data Retention and Deletion (Right to be Forgotten)</h2>

                                <div className="privacy-item">
                                    <h3>Visitor Logs</h3>
                                    <p>Visitor entry and exit data is automatically deleted or anonymised after 180 days, unless required for legal or security purposes.</p>
                                </div>

                                <div className="privacy-item">
                                    <h3>Account Deletion</h3>
                                    <p>You may request account deletion from within the app or by contacting us. Personal data will be removed from active systems within 30 days, except financial transaction records, which are retained for up to 7 years as required by Indian law.</p>
                                </div>
                            </div>

                            <div className="privacy-section">
                                <h2>5. Security Measures</h2>
                                <p>We implement industry-standard security practices, including SSL/TLS encryption for data in transit, AES-256 encryption for sensitive data at rest, role-based access controls, and restricted access on a need-to-know basis.</p>
                            </div>

                            <div className="privacy-section">
                                <h2>6. Children's Privacy</h2>
                                <p>Aanganone is intended for use by individuals 18 years and above. We do not knowingly collect personal data from children. If such data is identified, it will be deleted promptly.</p>
                            </div>

                            <div className="privacy-section">
                                <h2>7. Contact Us</h2>
                                <p>For questions regarding this Privacy Policy or to exercise your rights under the DPDP Act (including grievance redressal), please contact our Data Protection Officer:</p>

                                <div className="contact-info-card">
                                    <div className="contact-detail">
                                        <strong>Name:</strong> Aanganone Space Private Limited
                                    </div>
                                    <div className="contact-detail">
                                        <strong>Email:</strong> <a href="mailto:info@aanganone.com">info@aanganone.com</a>
                                    </div>
                                    <div className="contact-detail">
                                        <strong>Address:</strong> Rajkot, Gujarat, India
                                    </div>
                                </div>
                            </div>

                            <div className="privacy-section">
                                <h2>8. Policy Updates</h2>
                                <p>This Privacy Policy may be updated from time to time to reflect changes in law or platform features. Significant updates will be communicated through the app or official channels.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </FadeIn>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default PrivacyPolicy;
