import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/prestige-high-fields-08 1.png")',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Navigation Bar */}
      <Navbar isDark={true} />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full container-padding pt-32 pb-16">
        {/* Left Side - Text Content */}
        <div className="lg:w-1/2 text-white mb-12 lg:mb-0 pl-0 pr-4 flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-semibold mb-6">
            Welcome to Aanganone
          </h1>
          <p className="text-base md:text-lg mb-2 max-w-lg">
            New to a society or managing one?
          </p>
          <p className="text-base md:text-lg max-w-lg">
            Want better security, smoother communication, and smarter community living?
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="lg:w-1/2 lg:pl-12">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl mx-auto lg:mx-0">
            <form className="space-y-4">
              {/* Name and Mobile in one row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mobile</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              {/* Email ID and City in one row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email ID</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              {/* Are You? and I am... in one row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Are You?</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">I am...</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              {/* Write Something textarea */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Write Something..</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                ></textarea>
              </div>

              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  className="bg-purple-600 text-white px-12 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  Submit
                  <span>→</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
