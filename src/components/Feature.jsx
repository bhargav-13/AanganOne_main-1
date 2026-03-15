import SEO from './SEO';
import FadeIn from './FadeIn';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Feature() {
  return (
    <div className="min-h-screen bg-[#F7F7F7] relative overflow-hidden">
      <SEO
        title="About AanganOne - Shaping the Future of Community Living"
        description="Learn about AanganOne's mission to simplify community living through smart technology. Discover our vision, values, and the team behind the platform."
        url="https://aanganone.com/about"
      />


      {/* Header with Logo and Navigation */}
      <Navbar />

      {/* Hero Section */}
      <FadeIn>
        <section className="feature-hero relative z-10 min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="hero-bubble-1"></div>
          <div className="hero-bubble-2"></div>
          <div className="hero-bubble-3"></div>
          <div className="hero-bubble-4"></div>
          <div className="hero-bubble-5"></div>
          <div className="container-padding text-center max-w-5xl mx-auto px-4 relative z-10">
            {/* Main Headline */}
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 leading-tight"
              style={{ color: '#473F52' }}
            >
              Shaping the<br />Future of<br />Community Living
            </h1>

            {/* Descriptive Text */}
            <p
              className="text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto"
              style={{ color: '#473F52' }}
            >
              We build smart solutions that work quietly in the background, making everyday life simpler, smoother, and more connected for your home and community.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* Features Section with iPhone Screenshots */}
      <FadeIn>
        <section className="relative z-10 bg-[#F7F7F7] section-padding">
          <div className="container-padding">
            {/* Content Wrapper for Alignment */}
            <div className="max-w-fit mx-auto">
              {/* Section Title */}
              <h2
                className="text-[32px] md:text-[48px] font-semibold text-left mb-10 pl-2"
                style={{ color: '#473F52' }}
              >
                One Platform for Everyday Community Needs
              </h2>

              {/* Two iPhone Image Blocks */}
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-center items-center mb-10">
                {/* First Block */}
                <div className="bg-white rounded-3xl p-4 md:p-6 shadow-lg w-full max-w-2xl flex items-center justify-center" style={{ border: '1px solid #77787C80' }}>
                  <div className="grid grid-cols-2 gap-2 w-full items-end justify-items-center">
                    <div className="w-full" style={{ marginBottom: '0', lineHeight: '0' }}>
                      <img
                        src="/images/iPhone 14 Pro Max.png"
                        alt="Aanganone Community Screen"
                        className="w-full h-auto object-contain"
                        style={{ display: 'block', marginBottom: '0', verticalAlign: 'bottom', lineHeight: '0' }}
                      />
                    </div>
                    <div className="w-full" style={{ marginBottom: '0', lineHeight: '0' }}>
                      <img
                        src="/images/iPhone 14 Pro Max_2.png"
                        alt="Aanganone Marketplace Screen"
                        className="w-full h-auto object-contain"
                        style={{ display: 'block', marginBottom: '0', verticalAlign: 'bottom', lineHeight: '0' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Second Block */}
                <div className="bg-white rounded-3xl p-4 md:p-6 shadow-lg w-full max-w-2xl flex items-center justify-center" style={{ border: '1px solid #77787C80' }}>
                  <div className="grid grid-cols-2 gap-2 w-full items-end justify-items-center">
                    <div className="w-full" style={{ marginBottom: '0', lineHeight: '0' }}>
                      <img
                        src="/images/iPhone 14 Pro Max.png"
                        alt="Aanganone Community Screen"
                        className="w-full h-auto object-contain"
                        style={{ display: 'block', marginBottom: '0', verticalAlign: 'bottom', lineHeight: '0' }}
                      />
                    </div>
                    <div className="w-full" style={{ marginBottom: '0', lineHeight: '0' }}>
                      <img
                        src="/images/iPhone 14 Pro Max_2.png"
                        alt="Aanganone Marketplace Screen"
                        className="w-full h-auto object-contain"
                        style={{ display: 'block', marginBottom: '0', verticalAlign: 'bottom', lineHeight: '0' }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Descriptive Text Paragraphs */}
              <div className="space-y-6">
                <p
                  className="text-base md:text-lg lg:text-xl leading-relaxed"
                  style={{ color: '#77787C' }}
                >
                  Aanganone is building the digital foundation for modern residential living transforming societies into connected, well-managed communities that work better for everyone.
                </p>
                <p
                  className="text-base md:text-lg lg:text-xl leading-relaxed"
                  style={{ color: '#77787C' }}
                >
                  Our platform helps residents, RWAs, and service teams come together through transparent systems, clear communication, and smarter daily operations. From managing society processes to improving engagement, Aanganone creates a shared digital space where communities can grow with confidence. By simplifying how communities function, we support a more inclusive, efficient, and future-ready way of living — where people can live, work, and grow together in harmony.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Blog Section */}
      <FadeIn>
        <section className="relative z-10 section-padding bg-[#F7F7F7]">
          <div className="container-padding">
            <div className="text-center mb-16">
              <h2 className="text-[32px] md:text-[48px] font-semibold mb-4 leading-[1.2]" style={{ color: '#473F52' }}>
                From the Aanganone Blog
              </h2>
              <p className="text-[16px] md:text-[20px] font-normal" style={{ color: '#77787C' }}>
                Insights, updates, and ideas for smarter community living
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Card 1: Blue */}
              <div className="rounded-3xl p-6 md:p-8 relative h-72 overflow-hidden group" style={{ backgroundColor: '#4D71FF4D' }}>
                <span className="text-[#4361EE] font-medium text-base md:text-xl relative z-10">Management</span>
                <div className="absolute right-4 md:right-6 lg:right-2 xl:right-6 top-6 bottom-6 w-38 bg-[#4361EE] rounded-r-lg rounded-l-sm shadow-xl flex flex-col justify-end p-4 transition-transform group-hover:-translate-y-2 duration-300">
                  <div className="absolute left-3 top-0 bottom-0 w-[1px] bg-black/10"></div>
                  <div className="absolute top-0 right-6 w-6 h-8 bg-white/20" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)' }}></div>
                  <p className="text-white text-[10px] md:text-xs font-medium leading-tight px-1 md:px-2">Smarter Community<br />Management Starts<br />Here</p>
                </div>
              </div>

              {/* Card 2: Yellow */}
              <div className="rounded-3xl p-6 md:p-8 relative h-72 overflow-hidden group" style={{ backgroundColor: '#FFCC4D4D' }}>
                <span className="text-[#FBBF24] font-medium text-base md:text-xl relative z-10">Maintenance</span>
                <div className="absolute right-4 md:right-6 lg:right-2 xl:right-6 top-6 bottom-6 w-38 bg-[#FBBF24] rounded-r-lg rounded-l-sm shadow-xl flex flex-col justify-end p-4 transition-transform group-hover:-translate-y-2 duration-300">
                  <div className="absolute left-3 top-0 bottom-0 w-[1px] bg-black/10"></div>
                  <div className="absolute top-0 right-6 w-6 h-8 bg-white/20" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)' }}></div>
                  <p className="text-white text-[10px] md:text-xs font-medium leading-tight px-1 md:px-2">5 Ways to Simplify<br />Society Maintenance<br />Tracking</p>
                </div>
              </div>

              {/* Card 3: Green */}
              <div className="rounded-3xl p-6 md:p-8 relative h-72 overflow-hidden group" style={{ backgroundColor: '#BDFFD9' }}>
                <span className="text-[#34D399] font-medium text-base md:text-xl relative z-10">Community</span>
                <div className="absolute right-4 md:right-6 lg:right-2 xl:right-6 top-6 bottom-6 w-38 bg-[#34D399] rounded-r-lg rounded-l-sm shadow-xl flex flex-col justify-end p-4 transition-transform group-hover:-translate-y-2 duration-300">
                  <div className="absolute left-3 top-0 bottom-0 w-[1px] bg-black/10"></div>
                  <div className="absolute top-0 right-6 w-6 h-8 bg-white/20" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)' }}></div>
                  <p className="text-white text-[10px] md:text-xs font-medium leading-tight px-1 md:px-2">Building Stronger<br />Communities Through<br />Better Communication</p>
                </div>
              </div>

              {/* Card 4: Pink */}
              <div className="rounded-3xl p-6 md:p-8 relative h-72 overflow-hidden group" style={{ backgroundColor: '#FF4DCD4D' }}>
                <span className="text-[#F472B6] font-medium text-base md:text-xl relative z-10">Security</span>
                <div className="absolute right-4 md:right-6 lg:right-2 xl:right-6 top-6 bottom-6 w-38 bg-[#F472B6] rounded-r-lg rounded-l-sm shadow-xl flex flex-col justify-end p-4 transition-transform group-hover:-translate-y-2 duration-300">
                  <div className="absolute left-3 top-0 bottom-0 w-[1px] bg-black/10"></div>
                  <div className="absolute top-0 right-6 w-6 h-8 bg-white/20" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)' }}></div>
                  <p className="text-white text-[10px] md:text-xs font-medium leading-tight px-1 md:px-2">Why Smart Security<br />Systems Are Essential<br />for Modern Societies</p>
                </div>
              </div>

              {/* Card 5: Purple */}
              <div className="rounded-3xl p-6 md:p-8 relative h-72 overflow-hidden group" style={{ backgroundColor: '#8739FD33' }}>
                <span className="text-[#8B5CF6] font-medium text-base md:text-xl relative z-10">Technology</span>
                <div className="absolute right-4 md:right-6 lg:right-2 xl:right-6 top-6 bottom-6 w-38 bg-[#8B5CF6] rounded-r-lg rounded-l-sm shadow-xl flex flex-col justify-end p-4 transition-transform group-hover:-translate-y-2 duration-300">
                  <div className="absolute left-3 top-0 bottom-0 w-[1px] bg-black/10"></div>
                  <div className="absolute top-0 right-6 w-6 h-8 bg-white/20" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)' }}></div>
                  <p className="text-white text-[10px] md:text-xs font-medium leading-tight px-1 md:px-2">How Technology Is<br />Transforming Society<br />Management</p>
                </div>
              </div>

              {/* Card 6: Red/Coral */}
              <div className="rounded-3xl p-6 md:p-8 relative h-72 overflow-hidden group" style={{ backgroundColor: '#FF4D4D4D' }}>
                <span className="text-[#FF4D4D] font-medium text-base md:text-xl relative z-10">Administration</span>
                <div className="absolute right-4 md:right-6 lg:right-2 xl:right-6 top-6 bottom-6 w-38 bg-[#FF4D4D] rounded-r-lg rounded-l-sm shadow-xl flex flex-col justify-end p-4 transition-transform group-hover:-translate-y-2 duration-300">
                  <div className="absolute left-3 top-0 bottom-0 w-[1px] bg-black/10"></div>
                  <div className="absolute top-0 right-6 w-6 h-8 bg-white/20" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%)' }}></div>
                  <p className="text-white text-[10px] md:text-xs font-medium leading-tight px-1 md:px-2">Tips for Efficient<br />Society Administration</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>



      {/* Values Section */}
      <FadeIn>
        <section className="relative z-10 section-padding bg-[#F7F7F7]">
          <div className="container-padding">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-[32px] md:text-[48px] font-semibold mb-4 leading-[1.2]" style={{ color: '#473F52' }}>
                Built for Communities, Guided by Values
              </h2>
              <p className="text-[16px] md:text-[20px] font-normal" style={{ color: '#77787C' }}>
                The principles that guide our purpose, direction, and decisions.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="space-y-8">
              {/* Top Row: Mission & Vision */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Mission Card */}
                <div className="bg-white rounded-[32px] p-10 relative overflow-hidden shadow-sm min-h-[320px]">
                  <h3 className="text-4xl font-bold mb-6" style={{ color: '#473F52' }}>Our Mission</h3>
                  <p className="text-[#77787C] text-sm leading-relaxed mb-6 relative z-10 max-w-sm">
                    To simplify and strengthen community living by building technology that connects residents, management, and daily operations.
                  </p>
                  <p className="text-[#77787C] text-sm leading-relaxed relative z-10 max-w-sm">
                    We aim to reduce complexity, improve transparency, and help communities function smoothly through reliable and easy-to-use digital solutions.
                  </p>
                  <img
                    src="/images/octicon_goal-24.svg"
                    alt="Mission Icon"
                    className="absolute bottom-[-10px] right-[-10px] w-48 h-48 opacity-[0.15]"
                  />
                </div>

                {/* Vision Card */}
                <div className="bg-white rounded-[32px] p-10 relative overflow-hidden shadow-sm min-h-[320px]">
                  <h3 className="text-4xl font-bold mb-6" style={{ color: '#473F52' }}>Our Vision</h3>
                  <p className="text-[#77787C] text-sm leading-relaxed relative z-10 max-w-sm">
                    To create a future where every residential community is connected, secure, and effortlessly managed where technology supports better living without getting in the way of everyday life.
                  </p>
                  <img
                    src="/images/marketeq_vision.svg"
                    alt="Vision Icon"
                    className="absolute bottom-[-10px] right-[-10px] w-48 h-48 opacity-[0.15]"
                  />
                </div>
              </div>

              {/* Bottom Row: Value Card */}
              <div className="bg-white rounded-[32px] p-10 relative overflow-hidden shadow-sm">
                <h3 className="text-4xl font-bold mb-8" style={{ color: '#473F52' }}>Our Value</h3>

                <div className="space-y-4 relative z-10 max-w-3xl">
                  <p className="text-[#77787C] text-sm leading-relaxed">
                    <strong className="text-[#473F52]">Community First :-</strong> We design everything with people at the center — residents, committees, and service teams.
                  </p>
                  <p className="text-[#77787C] text-sm leading-relaxed">
                    <strong className="text-[#473F52]">Simplicity :-</strong> We believe technology should be easy to use, intuitive, and accessible to everyone.
                  </p>
                  <p className="text-[#77787C] text-sm leading-relaxed">
                    <strong className="text-[#473F52]">Trust & Transparency :-</strong> We promote clear communication, secure systems, and dependable processes that communities can rely on.
                  </p>
                  <p className="text-[#77787C] text-sm leading-relaxed">
                    <strong className="text-[#473F52]">Reliability :-</strong> We build stable and scalable solutions that communities can count on every day.
                  </p>
                  <p className="text-[#77787C] text-sm leading-relaxed">
                    <strong className="text-[#473F52]">Continuous Improvement :-</strong> We listen, learn, and evolve to meet the changing needs of modern communities.
                  </p>
                </div>

                <img
                  src="/images/solar_hand-heart-line-duotone.svg"
                  alt="Value Icon"
                  className="absolute bottom-[-20px] right-[20px] w-56 h-56 opacity-[0.15]"
                />
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Vision Behind Aanganone Section */}
      <FadeIn>
        <section className="relative z-10 section-padding bg-[#F7F7F7]">
          <div className="container-padding">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-[36px] md:text-[56px] font-semibold mb-4 leading-[1.2]" style={{ color: '#473F52' }}>
                The Vision Behind Aanganone
              </h2>
              <p className="text-[16px] md:text-[20px] font-normal" style={{ color: '#77787C' }}>
                Built by founders who believe in better community living.
              </p>
            </div>

            {/* Founders Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 max-w-6xl mx-auto">
              {/* Founder 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-full aspect-square bg-[#D9D9D9] rounded-2xl mb-6 overflow-hidden">
                  <img
                    src="/images/vivek_profile_image.jpg"
                    alt="Mr. Vivek Changani"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 30%' }}
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2" style={{ color: '#473F52' }}>Mr. Vivek Changani</h3>
                <p className="text-gray-500 font-medium text-sm md:text-base">Co-Founder & CFO</p>
              </div>

              {/* Founder 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-full aspect-square bg-[#D9D9D9] rounded-2xl mb-6 overflow-hidden">
                  <img
                    src="/images/durgesh_profile_image.jpeg"
                    alt="Mr. Durgesh Chavda"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 20%' }}
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2" style={{ color: '#473F52' }}>Mr. Durgesh Chavda</h3>
                <p className="text-gray-500 font-medium text-sm md:text-base">Founder & CEO</p>
              </div>

              {/* Founder 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-full aspect-square bg-[#D9D9D9] rounded-2xl mb-6 overflow-hidden">
                  <img
                    src="/images/manas_profile_image.png"
                    alt="Mr. Manas Vadodaria"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 30%' }}
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2" style={{ color: '#473F52' }}>Mr. Manas Vadodaria</h3>
                <p className="text-gray-500 font-medium text-sm md:text-base">CTO & Technical Head</p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Society Reviews Section */}
      <FadeIn>
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
      </FadeIn>

      {/* Footer */}
      <Footer />

      {/* Bottom Border Line */}
      <div className="relative z-10 h-1 bg-blue-400"></div>
    </div >
  );
}

export default Feature;

