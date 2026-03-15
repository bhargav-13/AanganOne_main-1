import React from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';
import FadeIn from './FadeIn';
import Footer from './Footer';

function OurStory() {
  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      <SEO
        title="Our Story - Shaping the Future of Community Living | AanganOne"
        description="Discover the story behind AanganOne. We build smart solutions that make everyday life smoother and more connected for communities."
        url="https://aanganone.com/our-story"
      />
      {/* Background Decorative Circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-blue-200 rounded-full opacity-15 blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-purple-300 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-40 right-1/3 w-64 h-64 bg-blue-300 rounded-full opacity-15 blur-3xl"></div>
      </div>

      {/* Header with Logo and Navigation */}
      <header className="relative z-10">
        <div className="container-padding pt-12 pb-6">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center gap-3">
              <img
                src="/images/logo-2 1.svg"
                alt="AANGANOne Logo"
                className="h-12 w-auto"
              />
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium text-lg"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium text-lg"
              >
                About
              </Link>
              <Link
                to="/our-story"
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium text-lg font-semibold"
              >
                Our Story
              </Link>
              <Link
                to="/"
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium text-lg"
              >
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <FadeIn>
        <section className="relative z-10 min-h-[calc(100vh-120px)] flex items-center justify-center">
          <div className="container-padding text-center max-w-4xl mx-auto px-4">
            {/* Main Headline */}
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
              style={{ color: '#473F52' }}
            >
              Shaping the Future of<br />Community Living
            </h1>

            {/* Descriptive Text */}
            <p
              className="text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto"
              style={{ color: '#77787C' }}
            >
              We build smart solutions that work quietly in the background, making everyday life simpler, smoother, and more connected for your home and community.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* Bottom Border Line */}
      <Footer />
    </div>
  );
}

export default OurStory;

