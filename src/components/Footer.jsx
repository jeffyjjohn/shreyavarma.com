import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Logo className="w-20 h-20 text-gray-900 mb-4" />
            <p className="text-sm font-semibold text-gray-600 text-sm">
              Licensed Clinical Psychologist & Psychoanalytic Psychotherapist
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wide mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/articles" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Articles
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wide mb-4">
              Location
            </h3>
            <p className="text-sm text-gray-600 tracking-wide mb-4">
              South Delhi, India
            </p>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wide mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy-policy" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/tnc" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-center font-semibold text-gray-400">
            © {currentYear} Shreya Varma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
