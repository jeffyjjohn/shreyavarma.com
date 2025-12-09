import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

// Registrations list for cards
const registrations = [
  {
    name: "Rehabilitation Council of India",
    url: "https://rehabcouncil.nic.in/",
    logo: "https://rehabcouncil.nic.in/sites/default/files/logo-hi_0_1.png",
    description: "Registered Clinical Psychologist (CRR No. A52713)"
  }
];

// Affiliations list for cards
const affiliations = [
  {
    name: "Indian Association of Clinical Psychologists",
    url: "https://www.iacp.in/",
    logo: "https://i0.wp.com/iacp.in/wp-content/uploads/2022/01/Copy-of-Add-a-subheading-1.png",
    description: "Professional Life Member"
  },
  {
    name: "Indian Psychoanalytical Society",
    url: "https://ipsonline.in.net/",
    logo: "https://ipsonline.in.net/wp-content/uploads/2021/04/ipsk-logo1.jpg",
    description: "Affiliate Member"
  },
  {
    name: "Society for Psychoanalysis and Psychoanalytic Psychology, Division 39, American Psychological Association",
    url: "https://www.apa.org/about/division/div39",
    logo: "https://upload.wikimedia.org/wikipedia/en/2/22/American_Psychological_Association_logo.svg",
    description: "International Affiliate"
  }
];

function AboutMe() {
  return (
    <>
      {/* SEO meta tags */}
      <Helmet>
        <title>About Me - Shreya Varma</title>
        <meta name="description" content="Learn about Shreya Varma's journey and experience as a clinical psychologist and psychoanalytic therapist in South Delhi." />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        {/* Main page heading - always use a single h1 for SEO and accessibility */}
        <div className="flex items-center gap-4 mb-8">
          <h1 className="text-xs text-white">About Me – Clinical Psychologist & Psychoanalytic Psychotherapist in South Delhi</h1>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Career/Journey section heading */}
          <h2 className="text-2xl font-semibold tracking-wide text-gray-900 mt-8 mb-2">
            Professional Journey
          </h2>
          <p className="mb-6 text-gray-700">
            I began my career working with patients diagnosed with schizophrenia in a rehabilitation centre.
            My work there encouraged me to pursue further training. I completed my clinical psychology
            training at the Ranchi Institute of Neuro-Psychiatry and Allied Sciences (RINPAS), where I
            received rigorous training in diagnosis, assessment, and psychological interventions. I qualified as a Clinical Psychologist in 2016.
          </p>

          <p className="mb-6 text-gray-700">
            Over the years, I have worked in diverse settings, including non-governmental organizations,
            general hospitals, and university mental health clinics, with patients experiencing psychosomatic
            conditions, psychiatric illnesses, and relational difficulties.
          </p>


          <div className="relative mt-8 mb-6">
            <h2 className="text-2xl font-semibold tracking-wide text-gray-900">Education</h2>
            <div className="mt-2 h-px bg-gray-300 w-12"></div>
          </div>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Bachelor's in Psychology, Lady Shri Ram College for Women</li>
            <li>Master's in Psychology, Ambedkar University Delhi</li>
            <li>M.Phil. in Clinical Psychology, Ranchi Institute of Neuro-Psychiatry and Allied Sciences (RINPAS)</li>
          </ul>
          <div className="relative mt-8 mb-6">
           {/* Professional Registration section heading */}
 <h2 className="text-2xl font-semibold tracking-wide text-gray-900">Professional Registration</h2>
  <div className="mt-2 h-px bg-gray-300 w-12"></div>
</div>
<div className="mb-8">
  {registrations.map((reg, idx) => (
    <a
      key={idx}
      href={reg.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center bg-white border border-gray-200 rounded-lg shadow-sm hover:border-gray-400 transition-all p-4 hover:shadow-lg mb-4"
    >
      <img
        src={reg.logo}
        alt={reg.name}
        className="w-32 h-16 object-contain mr-6"
      />
      <div>
        <div className="text-lg font-semibold text-gray-900">{reg.name}</div>
        <div className="text-gray-600 text-sm">{reg.description}</div>
      </div>
    </a>
  ))}
</div>

{/* Professional Affiliations section heading */}
<div className="relative mt-8 mb-6">
  <h2 className="text-2xl font-semibold tracking-wide text-gray-900">Professional Affiliation</h2>
  <div className="mt-2 h-px bg-gray-300 w-12"></div>
</div>
<div className="mb-8">
  {affiliations.map((aff, idx) => (
    <a
      key={idx}
      href={aff.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center bg-white border border-gray-200 rounded-lg shadow-sm hover:border-gray-400 transition-all p-4 hover:shadow-lg mb-4"
      style={{ minHeight: '80px' }} // ensures uniform card height, optional if you wish
    >
      <img
        src={aff.logo}
        alt={aff.name}
        className="w-32 h-16 object-contain mr-6"
      />
      <div>
        <div className="text-lg font-light text-gray-900">{aff.name}</div>
        <div className="text-gray-600 text-sm">{aff.description}</div>
      </div>
    </a>
  ))}
</div>

        </div>
      </motion.div>
    </>
  );
}

export default AboutMe;
