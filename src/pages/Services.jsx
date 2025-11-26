import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Psychotherapy",
    description: "Psychotherapy is a type of psychological intervention for problems of an emotional nature where a trained professional deliberately establishes a professional relationship with their patient with the aim of promoting positive personality growth and development. Psychoanalytic psychotherapy helps individuals understand their minds and internal worlds. Through careful and attuned listening, the psychotherapist supports the patient in making sense of their experiences, fostering a sense of internal agency and the capacity to make more meaningful choices in life."
  },
  {
    title: "Consultations",
    description: "The initial meeting with a psychotherapist is termed a consultation. These sessions are not structured therapy but aim to offer clarity. In the consultation, the psychotherapist tries to get to know you and your situation in detail. Background information about one's family life, relationships, and childhood gives some indication of how current problems might have emerged."
  },
  {
    title: "Psychological Assessments",
    description: "Psychological assessments are available for children, adolescents, and adults. These assessments help in understanding learning difficulties, cognitive abilities, autism spectrum conditions, and other neurodevelopmental or psychiatric concerns."
  },
  {
    title: "Supervision",
    description: "Supervision is offered for mental health professionals who wish to deepen their clinical work through a psychoanalytic lens. The focus is on developing reflective capacity and the ability to think about one's experience in the therapeutic process."
  }
];

function Services() {
  return (
    <>
      {/* SEO meta tags for the services page */}
      <Helmet>
        <title>Services - Shreya Varma</title>
        <meta name="description" content="Professional psychological services including psychotherapy, consultations, assessments, and supervision for therapists." />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        {/* Main page heading – h1 for primary SEO signal */}
        <div className="flex items-center gap-4 mb-8">
          <h1 className="text-4xl font-semibold tracking-wide text-gray-900">Services</h1>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Grid of services, each with h2 for accessible/SEO-rich structure */}
        <div className="grid gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-white p-6 border border-gray-200 hover:border-gray-300 transition-colors"
            >
              <div className="absolute top-0 left-0 w-12 h-1 bg-gray-900"></div>
              <h2 className="text-xl font-semibold tracking-wide mb-4 mt-2 text-gray-900">{service.title}</h2>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}

export default Services;