import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

function Home() {
  return (
    <>
      <Helmet>
        <title>Shreya Varma - Clinical Psychologist & Psychoanalytic Therapist</title>
        <meta name="description" content="Licensed clinical psychologist and psychoanalytic therapist in Delhi offering psychotherapy, consultations, psychological assessments, and supervision services." />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="prose prose-lg max-w-none">
          {/* Add H1 at the top */}
          <h1 className="text-xs text-white">Shreya Varma – Clinical Psychologist & Psychoanalytic Psychotherapist in South Delhi</h1>

           <p className="text-gray-900 leading-relaxed mb-6">
            I am Shreya Varma, a licensed Clinical Psychologist and Psychoanalytic Psychotherapist based in South Delhi. With over a decade of experience in the field, I provide psychotherapy, consultations, psychological assessments, and supervision services.
          </p>

           <p className="text-gray-900 leading-relaxed mb-6">
            My work is grounded in psychoanalytic principles and influenced by the object relations perspective in psychoanalysis. The aim in this type of therapy is to help individuals better understand their minds and internal worlds. Working together in psychotherapy can gradually enable greater acceptance of reality and a more meaningful engagement with life.
          </p>

          <p className="text-gray-900 leading-relaxed">
            Psychoanalytic psychotherapy offers a space for thinking, listening, and making sense of inner experiences for those seeking understanding and change at a deeper level.
          </p>
        </div>
      </motion.div>
    </>
  );
}

export default Home;
