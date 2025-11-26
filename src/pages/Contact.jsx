import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <>
      {/* SEO meta tags for contact page */}
      <Helmet>
        <title>Contact - Shreya Varma | Clinical Psychologist, Delhi</title>
        <meta name="description" content="Get in touch with Shreya Varma for psychotherapy services and consultations in Delhi." />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        {/* Main contact page heading - h1 for SEO/accessibility */}
        <div className="flex items-center gap-4 mb-8">
          <h1 className="text-4xl font-semibold tracking-wide text-gray-900">Contact</h1>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Grid: form and contact/location info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Google Form embedded in main area */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 border border-gray-200">
              <iframe
                src="https://forms.gle/z9cwe5cEzkNw7or77"
                width="100%"
                height="800"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Contact Google Form"
                className="w-full"
                style={{ minHeight: '700px' }}
                allowFullScreen
              >
                Loading…
              </iframe>
            </div>
          </div>

          {/* Contact and Location info, same width as before */}
          <div className="space-y-8">
            <div className="bg-white p-6 border border-gray-200">
              {/* Section heading: Direct Contact - should use h2 as it's a major section */}
              <h2 className="text-lg font-semibold tracking-wide text-gray-900 mb-4">Direct Contact</h2>
              <div className="space-y-4 text-sm text-gray-700">
                <div>
                  <a href="mailto:shreyavarma@outlook.in" className="text-gray-900 hover:text-gray-600 break-all">
                    shreyavarma@outlook.in
                  </a>
                </div>
                <div>
                  <div className="flex gap-3">
                    <a href="https://www.linkedin.com/in/shreyavarma" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">LinkedIn</a>
                    <a href="https://wa.me/919999746949" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">WhatsApp</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 border border-gray-200">
              {/* Section heading: Location - also use h2 */}
              <h2 className="text-lg font-semibold tracking-wide text-gray-900 mb-4">Location</h2>
              <div className="mb-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d219.0070433376429!2d77.21644050116993!3d28.566378514556735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1763633274832!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map location"
                ></iframe>
              </div>
              <p className="text-xs text-gray-600">B66, South Extension II, South Delhi, India</p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Contact;
