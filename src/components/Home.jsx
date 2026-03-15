import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from './SEO'
import FadeIn from './FadeIn'
import Hero from './Hero'
import WhyChoose from './WhyChoose'


import AboutSection from './AboutSection'
import FeaturesSection from './FeaturesSection'
import ImpactSection from './ImpactSection'

function Home() {
  const [expandedFAQ, setExpandedFAQ] = useState(null)
  const [formData, setFormData] = useState({
    societyName: '',
    contactPersonName: '',
    email: '',
    contactNumber: '',
    city: '',
    societySize: '',
    additionalMessage: ''
  })

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add your form submission logic here
    alert('Thank you for your registration! We will contact you soon.')
    // Reset form
    setFormData({
      societyName: '',
      contactPersonName: '',
      email: '',
      contactNumber: '',
      city: '',
      societySize: '',
      additionalMessage: ''
    })
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
        title="AanganOne - Smart Community Management Platform for Residential Societies"
        description="Transform your residential society with AanganOne's all-in-one management platform. Streamline communication, maintenance, security, and accounting with ease."
        keywords="community management, society management, RWA software, residential society app, apartment management"
        url="https://aanganone.com/"
      />
      <Hero />
      <FadeIn delay={100}><WhyChoose /></FadeIn>
      <FadeIn delay={200}><AboutSection /></FadeIn>
      <FadeIn delay={100}><FeaturesSection /></FadeIn>
      <FadeIn delay={100}><ImpactSection /></FadeIn>





      {/* Testimonials Section */}
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

      {/* FAQ Section */}
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

      {/* Registration Section */}
      <section id="contact" className="registration">
        <div className="container">
          <div className="registration-label">
            <div className="registration-label-icon">
              <img src="/images/twemoji_house.svg" alt="House" className="badge-icon-img" />
            </div>
            <span>Get Started</span>
          </div>
          <h2 className="section-title">Register Your Society</h2>
          <p className="section-subtitle">Fill out the form below and we'll get in touch to set up your society.</p>

          <div className="registration-contact-cards">
            <div className="contact-card">
              <div className="contact-icon contact-icon-blue">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="#3b82f6" />
                </svg>
              </div>
              <div className="contact-info">
                <div className="contact-title">Free Demo</div>
                <div className="contact-detail">+91 88664 48967</div>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon contact-icon-blue">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="#3b82f6" />
                </svg>
              </div>
              <div className="contact-info">
                <div className="contact-title">Email</div>
                <div className="contact-detail">sales@aanganone.com</div>
              </div>
            </div>
            <div className="contact-card">
              <div className="contact-icon contact-icon-blue">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#3b82f6" />
                </svg>
              </div>
              <div className="contact-info">
                <div className="contact-title">Local Expertise</div>
                <div className="contact-detail">Serving societies across India</div>
              </div>
            </div>
          </div>

          <form className="registration-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Society Name *</label>
                <input
                  type="text"
                  name="societyName"
                  value={formData.societyName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Contact Person Name *</label>
                <input
                  type="text"
                  name="contactPersonName"
                  value={formData.contactPersonName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Contact Number *</label>
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>City *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Society Size *</label>
                <input
                  type="text"
                  name="societySize"
                  value={formData.societySize}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label>Additional Message (Optional)</label>
              <textarea
                name="additionalMessage"
                value={formData.additionalMessage}
                onChange={handleInputChange}
                rows="4"
                placeholder="Tell us more about your requirements..."
              ></textarea>
            </div>
            <button type="submit" className="btn-primary btn-large">Request Demo</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-left-section">
              <div className="footer-brand">
                <h3>AANGANONE SPACE PRIVATE LIMITED</h3>
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
                  <Link to="/terms-and-conditions">Terms & Conditions</Link>
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

export default Home
