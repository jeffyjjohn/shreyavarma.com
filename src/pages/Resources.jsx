import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

// List of useful mental health resources, with descriptive info and logos
const resources = [
  {
    name: "Mental Health Foundation",
    url: "https://www.mentalhealth.org.uk/",
    description: "Comprehensive information on mental health conditions and advice for caregivers.",
    thumbnail: "https://www.mentalhealth.org.uk/themes/custom/mhf_theme/logo.svg"
  },
  {
    name: "Mind",
    url: "https://www.mind.org.uk/",
    description: "A leading mental health charity offering support and advice.",
    thumbnail: "https://www.mind.org.uk/assets/images/Mind_Squiggle_Wordmark_Blue_RGB.png"
  },
  {
    name: "National Institute of Mental Health (NIMH)",
    url: "https://www.nimh.nih.gov/",
    description: "Resource for information on mental illnesses, research, and treatment.",
    thumbnail: "https://www.nimh.nih.gov/themes/nimhtheme/nimh-logo.svg"
  },
  {
    name: "British Psychological Society",
    url: "https://www.bps.org.uk/",
    description: "Insights into psychological practices and mental health research.",
    thumbnail: "https://www.psychol.cam.ac.uk/sites/default/files/media/logo-the-british-psychological-society.png"
  },
  {
    name: "The Tavistock and Portman NHS Trust",
    url: "https://tavistockandportman.nhs.uk/",
    description: "Information on psychoanalytic therapy and training.",
    thumbnail: "https://tavistockandportman.nhs.uk/wp-content/themes/tavi-main/dist/images/logo.png"
  }
];

function Resources() {
  return (
    <>
      {/* SEO meta tags for the resources page */}
      <Helmet>
        <title>Useful Resources - Shreya Varma</title>
        <meta name="description" content="Curated list of mental health resources and websites for additional support and information." />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        {/* Page main heading – h1 for SEO and screen readers */}
        <div className="flex items-center gap-4 mb-8">
          <h1 className="text-4xl font-semibold tracking-wide text-gray-900">Resources</h1>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Card grid of resource links; each card uses h2 for section/SEO structure */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {resources.map((resource, index) => (
    <motion.a
      key={index}
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white border border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-lg overflow-hidden flex flex-col h-full cursor-pointer"
    >
      {/* Resource logo */}
      <div className="overflow-hidden bg-gray-100 h-40 flex items-center justify-center mb-4">
        <img
          src={resource.thumbnail}
          alt={resource.name}
          width={192}
          height={128}
          loading="lazy"
          className="w-48 h-32 object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      {/* Text content with heading for resource name */}
      {/* --- This box below gives the text padding all around! --- */}
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-sm font-semibold tracking-wide text-gray-900 mb-2 group-hover:text-gray-700 transition-colors line-clamp-2">
          {resource.name}
        </h2>
        <p className="text-gray-600 text-xs leading-relaxed mb-3 flex-grow line-clamp-3">
          {resource.description}
        </p>
        <div className="inline-flex items-center text-gray-700 text-xs font-semibold group-hover:text-gray-900 transition-colors">
          Visit →
        </div>
      </div>
    </motion.a>
  ))}
</div>

      </motion.div>
    </>
  );
}

export default Resources;
