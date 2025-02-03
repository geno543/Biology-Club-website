'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import ResearchVolumes from '@/components/research/ResearchVolumes';
import { FaArrowRight, FaMicroscope, FaDna, FaFlask, FaAtom, FaBook, FaUsers, FaChalkboardTeacher } from 'react-icons/fa';

const researchAreas = [
  {
    title: 'Molecular Biology',
    description: 'Study of biological molecules and their interactions',
    icon: FaDna,
    topics: ['DNA Replication', 'Gene Expression', 'Protein Synthesis'],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Cell Biology',
    description: 'Investigation of cellular structures and functions',
    icon: FaMicroscope,
    topics: ['Cell Division', 'Membrane Transport', 'Cell Signaling'],
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    title: 'Ecology',
    description: 'Research on organisms and their environment',
    icon: FaFlask,
    topics: ['Ecosystem Dynamics', 'Population Studies', 'Biodiversity'],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Biotechnology',
    description: 'Application of biological processes in technology',
    icon: FaAtom,
    topics: ['Genetic Engineering', 'Fermentation', 'Bioinformatics'],
    gradient: 'from-amber-500 to-orange-500'
  }
];

const researchStats = [
  { number: '50+', label: 'Research Papers', icon: FaBook },
  { number: '20+', label: 'Active Projects', icon: FaFlask },
  { number: '30+', label: 'Student Researchers', icon: FaUsers },
  { number: '15+', label: 'Research Mentors', icon: FaChalkboardTeacher }
];

export default function Research() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 via-transparent to-transparent" />
          <svg
            className="absolute inset-0 h-full w-full stroke-emerald-500/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="research-pattern"
                width="50"
                height="50"
                x="50%"
                y="-1"
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth="0" fill="url(#research-pattern)" />
            <svg x="50%" y="-1" className="overflow-visible fill-emerald-500/20">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth="0"
              />
            </svg>
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-24 sm:pt-32 lg:px-8 lg:pt-40">
          <motion.div 
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Research Programs
            </motion.h1>
            <motion.p 
              className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Explore cutting-edge biology research with expert mentorship and state-of-the-art facilities
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4">
              Research Areas
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Discover our diverse range of research opportunities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                    style={{
                      background: `linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to))`,
                      opacity: 0.1
                    }} />
                  <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-colors">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${area.gradient} p-2.5 mb-6`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      {area.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {area.description}
                    </p>
                    <ul className="space-y-3">
                      {area.topics.map((topic, i) => (
                        <motion.li
                          key={topic}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: (index * 0.1) + (i * 0.1) }}
                          className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                        >
                          <FaArrowRight className="mr-2 text-emerald-500" />
                          {topic}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-teal-500/5" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {researchStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/5 group-hover:to-teal-500/5 transition-colors duration-300" />
                  <div className="relative text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 mb-6">
                      <Icon className="w-8 h-8 text-emerald-500" />
                    </div>
                    <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                      {stat.number}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Research Volumes Section */}
      <ResearchVolumes />

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-6">
              Ready to Start Your Research Journey?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Join our research program and work alongside experienced mentors on groundbreaking projects
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold shadow-lg hover:shadow-emerald-500/25 transition-shadow"
              >
                Apply Now
                <FaArrowRight className="ml-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-emerald-500/20 text-gray-900 dark:text-white font-semibold hover:bg-emerald-500/5 transition-colors"
              >
                Learn More
                <FaArrowRight className="ml-2" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
