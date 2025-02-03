'use client';

import { motion } from 'framer-motion';
import { FaDna, FaFlask, FaBrain, FaCalendarAlt } from 'react-icons/fa';
import { GiMicroscope } from 'react-icons/gi';
import { BiTestTube } from 'react-icons/bi';

interface OfferingCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlights: string[];
  color: string;
  delay: number;
}

const OfferingCard = ({ icon, title, description, highlights, color, delay }: OfferingCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ scale: 1.05 }}
    className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300
               border border-gray-700 hover:border-teal-500 group"
  >
    <div className="flex flex-col items-center text-center space-y-4">
      <div className={`p-3 rounded-xl bg-gradient-to-br ${color} shadow-lg`}>
        <div className="text-4xl text-white">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
        {description}
      </p>
      <ul className="flex flex-wrap justify-center gap-2 mt-4">
        {highlights.map((highlight, index) => (
          <li
            key={index}
            className="bg-gray-800 px-3 py-1 rounded-full text-sm text-teal-400 border border-teal-500/30"
          >
            {highlight}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

export default function WhatWeOffer() {
  const offerings = [
    {
      icon: <FaDna />,
      title: "BioLeague Competition",
      description: "Participate in Egypt's premier biology competition for high school students. Showcase your knowledge and compete with peers nationwide.",
      highlights: ["National Recognition", "Valuable Prizes", "Team Challenges"],
      color: "from-emerald-400 to-teal-500"
    },
    {
      icon: <GiMicroscope />,
      title: "Research Programs",
      description: "Engage in real scientific research with experienced mentors. Work on cutting-edge projects in modern laboratory facilities.",
      highlights: ["Hands-on Experience", "Expert Guidance", "Published Results"],
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: <BiTestTube />,
      title: "Laboratory Sessions",
      description: "Get hands-on experience with advanced lab equipment and techniques. Learn essential skills for biological research.",
      highlights: ["Modern Equipment", "Safety Training", "Practical Skills"],
      color: "from-purple-400 to-indigo-500"
    },
    {
      icon: <FaFlask />,
      title: "Biotechnology Projects",
      description: "Work on cutting-edge biotechnology experiments and research projects with expert guidance and modern equipment.",
      highlights: ["DNA Analysis", "PCR Techniques", "Gene Editing"],
      color: "from-pink-400 to-rose-500"
    },
    {
      icon: <FaBrain />,
      title: "Advanced Topics",
      description: "Explore advanced biological concepts through specialized workshops and interactive sessions.",
      highlights: ["Neurobiology", "Genetics", "Molecular Biology"],
      color: "from-amber-400 to-orange-500"
    },
    {
      icon: <FaCalendarAlt />,
      title: "Events & Workshops",
      description: "Join regular workshops, seminars, and events featuring guest speakers and industry experts.",
      highlights: ["Guest Speakers", "Networking", "Career Guidance"],
      color: "from-red-400 to-pink-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            What We <span className="text-teal-400">Offer</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover our comprehensive range of programs and opportunities designed to nurture your passion 
            for biological sciences and advance your scientific career.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <OfferingCard
              key={index}
              icon={offering.icon}
              title={offering.title}
              description={offering.description}
              highlights={offering.highlights}
              color={offering.color}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
