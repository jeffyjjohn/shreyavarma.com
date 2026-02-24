import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';
import ReactGA from 'react-ga4';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy-loaded pages (code-splitting)
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const AboutMe = lazy(() => import('./pages/AboutMe'));
const Articles = lazy(() => import('./pages/Articles'));
const Resources = lazy(() => import('./pages/Resources'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/privacy-policy'));
const TermsAndConditions = lazy(() => import('./pages/Tnc'));

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || null;

if (GA_MEASUREMENT_ID) {
  ReactGA.initialize(GA_MEASUREMENT_ID);
}

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;

    const sendPageview = () => {
      ReactGA.send({
        hitType: 'pageview',
        page: location.pathname + location.search,
      });
    };

    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(sendPageview);
    } else {
      setTimeout(sendPageview, 0);
    }
  }, [location]);

  return (
    <>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="container mx-auto px-4 py-8 flex-grow">
          <Suspense fallback={<div>Loading…</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/tnc" element={<TermsAndConditions />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>

      <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="shreyavarma_consent"
        expires={365}
        containerClasses="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50"
        buttonClasses="bg-white text-gray-900 px-6 py-2 rounded font-light hover:bg-gray-100 transition-colors ml-4"
        declineButtonClasses="px-4 py-2 text-white hover:text-gray-300 transition-colors"
        enableDeclineButton
        flipButtons
      >
        This website uses cookies to enhance user experience and analyze traffic. By continuing to use this site, you consent to our use of cookies.
      </CookieConsent>

      <Analytics />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
