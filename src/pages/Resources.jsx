import { motion } from 'framer-motion';
import SEO from '../components/SEO';

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
    thumbnail: "https://www.northlondonmentalhealth.nhs.uk/media/images/versions/img94joktmu715524.jpg"
  }
];

function Resources() {
  return (
    <>
      <SEO
        title="Mental Health Resources | Shreya Varma"
        description="Curated mental health resources and websites for additional information, support, and psychological resources."
        path="/resources"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center gap-4 mb-8">
          <h1 className="text-4xl font-semibold tracking-wide text-gray-900">
            Resources
          </h1>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

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