import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import ScrollToTop from './components/ScrollToTop'
import Chatbot from './components/Chatbot'
import './App.css'

// Lazy loaded components for better performance (Code Splitting)
const Home = React.lazy(() => import('./components/Home'))
const Feature = React.lazy(() => import('./components/Feature'))
const OurStory = React.lazy(() => import('./components/OurStory'))
const HowItWorks = React.lazy(() => import('./components/HowItWorks'))
const Contact = React.lazy(() => import('./components/Contact'))
const PrivacyPolicy = React.lazy(() => import('./components/PrivacyPolicy'))
const TermsAndConditions = React.lazy(() => import('./components/TermsAndConditions'))
const NotFound = React.lazy(() => import('./components/NotFound'))

// Simple loading fallback
const LoadingFallback = () => (
    <div className="min-h-screen flex items-center justify-center bg-[#F7F7F7]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#00A150]"></div>
    </div>
)

function App() {
    return (
        <HelmetProvider>
            <Router>
                <ScrollToTop />
                <Chatbot />
                <Suspense fallback={<LoadingFallback />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<Feature />} />
                        <Route path="/our-story" element={<OurStory />} />
                        <Route path="/features" element={<HowItWorks />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Suspense>
            </Router>
        </HelmetProvider>
    )
}

export default App

