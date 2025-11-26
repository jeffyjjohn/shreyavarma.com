import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
function isLogoThumb(article) {
  // Add more conditions here if needed
  return (
    article.publication === "TherapyRoute.com" ||
    article.publication === "Psychoanalysis.Today" ||
    article.publication === "The Citizen"
  );
}

// List of articles to display
const articles = [
  {
    title: "Remote Psychotherapy During the Covid-19 Pandemic: Gap, Separation and The Third",
    url: "http://web.tiscali.it/frenis0psicoanalisi/varma.htm",
    publication: "Frenis Zero",
    description: "On distance, separation, and the analytic third in online psychotherapy during the pandemic.",
    thumbnail: "http://www.neuropsicanalisi.altervista.org/10annifrenis.jpg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    title: "Stories of COVID-19: Connections, Part 2",
    url: "https://www.storycollider.org/stories/2020/12/9/stories-of-covid-19-connections-part-2",
    publication: "The Story Collider",
    description: "A personal narrative exploring connection and emotional meaning during the pandemic.",
    thumbnail: "https://images.squarespace-cdn.com/content/v1/566c906f57eb8de92a51e127/1607549070398-CTA0EJYAFJIR9V4JX7VK/Screen+Shot+2020-11-27+at+12.27.05+PM.png?format=2500w?auto=compress&cs=tinysrgb&w=600"
  },
  {
    title: "Pollution: The Case of India",
    url: "http://www.analytic-room.com/essays/pollution-the-case-of-india-by-shreya-varma/",
    publication: "Analytic Room",
    description: "A psychoanalytic reflection on pollution, society, and psychic life in India.",
    thumbnail: "https://analytic-room.com/wp-content/uploads/2020/10/annie-spratt-HI4akp3A0oA-unsplash.jpg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    title: "COVID-19 and the Lockdown: A Reflection",
    url: "http://www.psychoanalysis.today/en-GB/PT-Covid-19/%E2%80%8BCovid-19-and-the-Lockdown-A-Reflection.aspx",
    publication: "Psychoanalysis.Today",
    description: "On the psychic experience of lockdown, containment, and collective life.",
    thumbnail: "https://www.psychoanalysis.today/getattachment/Logo.gif.aspx?auto=compress&cs=tinysrgb&w=600"
  },
  {
    title: "The Age of Coronavirus: Death, Destruction and Nourishment",
    url: "https://www.therapyroute.com/article/the-age-of-coronavirus-death-destruction-and-nourishment-by-s-varma",
    publication: "TherapyRoute.com",
    description: "Exploring death, destruction, and psychic nourishment in the pandemic context.",
    thumbnail: "https://res.cloudinary.com/dywkbcfp5/image/upload/f_webp/v1580072135/therapyRoutePublicImages/logo-full%402x.png?auto=compress&cs=tinysrgb&w=600"
  },
  {
    title: "Shubh Mangal Saavdhan: A Contemplative Reflection",
    url: "http://www.tarshi.net/inplainspeak/shubh-mangal-saavdhan-a-contemplative-reflection/",
    publication: "TARSHI's In Plain Speak",
    description: "A reflection on intimacy, sexuality, and cultural meanings in contemporary India.",
    thumbnail: "https://www.tarshi.net/inplainspeak/wp-content/uploads/2019/08/1-6.jpg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    title: "Fear of Darkness",
    url: "http://psychoanalysis.today/en-GB/PT-Highlights/Fear-of-Darkness.aspx",
    publication: "Psychoanalysis.Today",
    description: "An exploration of fear, fantasy, and the symbolic function of darkness in psychic life.",
    thumbnail: "https://www.psychoanalysis.today/getattachment/Logo.gif.aspx?auto=compress&cs=tinysrgb&w=600"
  },
  {
    title: "On The Spot: FTII Students Zindabad",
    url: "https://www.thecitizen.in/index.php/en/NewsDetail/index/8/4336/On-The-Spot:-FTII-Students-Zindabad",
    publication: "The Citizen",
    description: "Reflecting on student movements, collective protest, and political consciousness.",
    thumbnail: "https://www.thecitizen.in/images/logo.png?auto=compress&cs=tinysrgb&w=600"
  }
];

function Articles() {
  return (
    <>
      {/* SEO meta tags for the articles page */}
     <Helmet>
        <title>Articles & Writings - Shreya Varma</title>
        <meta name="description" content="Read selected writings and reflections on psychoanalysis, mental health, and contemporary issues by Shreya Varma." />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        {/* Main page heading - using h1 for key SEO section */}
        <div className="flex items-center gap-4 mb-8">
          <h1 className="text-4xl font-semibold tracking-wide text-gray-900">Articles & Writings</h1>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Short description */}
        <p className="text-gray-700 mb-12">Selected writings and reflections</p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <motion.a
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group bg-white border border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-lg overflow-hidden flex flex-col h-full"
            >
              {/* Article thumbnail */}
               <div className="overflow-hidden bg-gray-100 h-40">
                <img
                  src={article.thumbnail}
                  alt={article.title}
                  className={`w-full h-full group-hover:scale-105 transition-transform duration-300 ${isLogoThumb(article) ? "object-contain bg-white p-6" : "object-cover"}`}
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                {/* Article title - should be h2 to represent individual content blocks */}
                <h2 className="text-sm font-semibold tracking-wide text-gray-900 mb-2 group-hover:text-gray-700 transition-colors line-clamp-2">
                  {article.title}
                </h2>
                <p className="text-xs text-gray-500 mb-3">
                  <em>{article.publication}</em>
                </p>
                <p className="text-gray-600 text-xs leading-relaxed mb-3 flex-grow line-clamp-3">
                  {article.description}
                </p>
                <div className="inline-flex items-center text-gray-700 text-xs font-semibold group-hover:text-gray-900 transition-colors">
                  Read →
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </>
  );
}

export default Articles;
