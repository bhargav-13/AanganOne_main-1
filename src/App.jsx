import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Home from './components/Home'
import Feature from './components/Feature'
import OurStory from './components/OurStory'
import HowItWorks from './components/HowItWorks'
import Contact from './components/Contact'
import PrivacyPolicy from './components/PrivacyPolicy'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

function App() {
    return (
        <HelmetProvider>
            <Router>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<Feature />} />
                    <Route path="/our-story" element={<OurStory />} />
                    <Route path="/features" element={<HowItWorks />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                </Routes>
            </Router>
        </HelmetProvider>
    )
}

export default App

