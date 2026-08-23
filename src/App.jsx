import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Chatbot from './components/Chatbot'
import './App.css'

// Lazy loaded routes for code splitting
const Home = React.lazy(() => import('./components/Home'))
const Feature = React.lazy(() => import('./components/Feature'))
const OurStory = React.lazy(() => import('./components/OurStory'))
const HowItWorks = React.lazy(() => import('./components/HowItWorks'))
const Pricing = React.lazy(() => import('./components/Pricing'))
const GetTheApp = React.lazy(() => import('./components/GetTheApp'))
const Blog = React.lazy(() => import('./components/Blog'))
const Article = React.lazy(() => import('./components/Article'))
const Contact = React.lazy(() => import('./components/Contact'))
const PrivacyPolicy = React.lazy(() => import('./components/PrivacyPolicy'))
const TermsAndConditions = React.lazy(() => import('./components/TermsAndConditions'))
const NotFound = React.lazy(() => import('./components/NotFound'))

/* Quiet loading state on warm paper — no spinner flash of a different colour. */
const LoadingFallback = () => (
    <div className="flex min-h-screen items-center justify-center bg-paper">
        <div className="flex items-center gap-3">
            <span className="h-2 w-2 animate-blink rounded-full bg-indigo-600" />
            <span className="font-mono text-[11px] uppercase tracking-wider2 text-ink-400">
                Loading
            </span>
        </div>
    </div>
)

function App() {
    return (
            <Router>
                <ScrollToTop />

                {/* Keyboard users land here first */}
                <a
                    href="#main"
                    className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-pill focus:bg-ink-900 focus:px-5 focus:py-3 focus:text-[14px] focus:font-semibold focus:text-paper"
                >
                    Skip to content
                </a>

                <Chatbot />

                <Suspense fallback={<LoadingFallback />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/features" element={<HowItWorks />} />
                        <Route path="/pricing" element={<Pricing />} />
                        <Route path="/app" element={<GetTheApp />} />
                        <Route path="/resources" element={<Blog />} />
                        <Route path="/resources/:slug" element={<Article />} />
                        <Route path="/about" element={<Feature />} />
                        <Route path="/our-story" element={<OurStory />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Suspense>
            </Router>
    )
}

export default App
