'use client';

import { motion } from "framer-motion";
import { 
  FaUsers, 
  FaCheckCircle, 
  FaTrophy, 
  FaGlobe, 
  FaDna, 
  FaMicroscope, 
  FaFlask,
  FaAtom,
  FaArrowRight
} from "react-icons/fa";
import { useEffect, useState } from "react";

const firstPhaseResults = [
  {
    teamName: "Biophilia",
    country: "Egypt",
    members: ["Mazen Abdelsttar", "Mohamed Ahmed", "Mohamed Elsayeh"],
    school: "STEM High school for Boys - 6th of October"
  },
  {
    teamName: "Biogers",
    country: "Egypt",
    members: ["Ahmed Rabie", "Abdullah Nasr", "Mina Bishoy", "Abdelrahman Ashraf"],
    school: "Alexandria STEM school"
  },
  {
    teamName: "The golden dragon",
    country: "Egypt",
    members: ["Omar Ragab", "Mahmoud Alkhsosy", "Mahmoud Mohammed"],
    school: "STEM High school for Boys - 6th of October"
  }
];

const secondPhaseResults = [
  {
    teamName: "A Fungus Amongus",
    members: ["Belal Ahmed", "Mazen Ahmed", "Mohamed Yasser", "Abdullah Ahmed"],
    school: "STEM High school for Boys - 6th of October"
  },
  {
    teamName: "The golden dragon",
    members: ["Omar Ragab", "Mahmoud Alkhsosy", "Mina Bishoy", "Mahmoud Mohammed"],
    school: "Alexandria STEM school"
  }
];

const eligibilityItems = [
  {
    icon: FaUsers,
    title: "Team Size",
    description: "Teams of 2-4 students",
    color: "text-emerald-400"
  },
  {
    icon: FaCheckCircle,
    title: "Grade Level",
    description: "Grades 9-12 students",
    color: "text-green-400"
  },
  {
    icon: FaTrophy,
    title: "Free Entry",
    description: "No participation fees",
    color: "text-teal-400"
  },
  {
    icon: FaGlobe,
    title: "International",
    description: "Open worldwide",
    color: "text-emerald-400"
  }
];

const phases = [
  {
    title: "Phase 1: Research Challenge",
    icon: FaMicroscope,
    description: "Teams conduct research on a biological topic and submit a detailed paper.",
    deadline: "March 15, 2024",
    color: "text-emerald-400"
  },
  {
    title: "Phase 2: Lab Skills",
    icon: FaFlask,
    description: "Qualified teams demonstrate practical laboratory techniques and data analysis.",
    deadline: "April 20, 2024",
    color: "text-teal-400"
  },
  {
    title: "Phase 3: Final Presentation",
    icon: FaDna,
    description: "Top teams present their findings to a panel of expert judges.",
    deadline: "May 10, 2024",
    color: "text-emerald-400"
  }
];

export default function CompetitionContent() {
  const [mounted, setMounted] = useState(false);
  const [activePhase, setActivePhase] = useState(0);

  useEffect(() => {
    setMounted(true);
    // Auto-rotate through phases
    const interval = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % phases.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen py-16 md:py-24 lg:py-32 px-4 relative flex items-center justify-center">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-green-500/5 to-transparent" />
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px w-px bg-emerald-400"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 3, 1],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6 md:space-y-8 lg:space-y-12"
          >
            <div className="relative inline-block">
              <motion.div
                className="absolute -inset-2 md:-inset-4 rounded-full bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 opacity-75 blur-lg"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                }}
              />
              <h1 className="relative text-4xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
                BioLeague
              </h1>
            </div>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              Join the world's most prestigious biology competition and showcase your scientific prowess
            </p>

            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                className="w-full sm:w-auto group px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-base md:text-lg font-semibold flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-emerald-500/25 transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Register Now
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                className="w-full sm:w-auto group px-6 md:px-8 py-3 md:py-4 border border-teal-500/30 rounded-full text-base md:text-lg font-semibold flex items-center justify-center gap-3 hover:bg-teal-500/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Competition Phases */}
      <section className="py-16 md:py-24 lg:py-32 px-4 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/20 via-green-900/20 to-transparent" />
          <div className="absolute inset-0 backdrop-blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center space-y-3 md:space-y-4 mb-12 md:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Competition Phases
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-400">Follow your journey through our three challenging phases</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {phases.map((phase, index) => {
              const PhaseIcon = phase.icon;
              const isActive = activePhase === index;

              return (
                <motion.div
                  key={index}
                  className={`relative group rounded-2xl p-8 ${
                    isActive ? 'bg-gradient-to-br from-emerald-500/20 to-teal-500/20' : 'bg-white/5'
                  } backdrop-blur-xl border border-white/10 hover:border-emerald-500/50 transition-all duration-500`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                >
                  {/* Glow effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`} />

                  <div className="relative">
                    <motion.div
                      className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 p-3 mb-6"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <PhaseIcon className={`w-full h-full ${phase.color}`} />
                    </motion.div>

                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{phase.title}</h3>
                    <p className="text-sm md:text-base text-gray-400 mb-4 md:mb-6 leading-relaxed">{phase.description}</p>

                    <div className={`inline-flex items-center gap-2 ${phase.color} text-sm md:text-base font-semibold`}>
                      <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                      Deadline: {phase.deadline}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-16 md:py-24 lg:py-32 px-4 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/20 via-green-900/20 to-transparent" />
          <div className="absolute inset-0 backdrop-blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center space-y-3 md:space-y-4 mb-12 md:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Who Can Participate?
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-400">Check if you meet our eligibility criteria</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {eligibilityItems.map((item, index) => {
              const ItemIcon = item.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative rounded-2xl p-8 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-emerald-500/50 transition-all duration-500"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl" />

                  <div className="relative">
                    <motion.div
                      className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 p-3 mb-6"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <ItemIcon className={`w-full h-full ${item.color}`} />
                    </motion.div>

                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Past Exams Section */}
      <section className="py-16 md:py-24 lg:py-32 px-4 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/20 via-green-900/20 to-transparent" />
          <div className="absolute inset-0 backdrop-blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center space-y-3 md:space-y-4 mb-12 md:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Past Exams
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-400">
              Practice with our previous competition papers and solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                year: 2023,
                title: "Winter Competition",
                description: "Test your knowledge in genetics, cell biology, and ecology.",
                pdfUrl: "/exams/Phase One 2023.pdf",
                solutionsUrl: "/exams/Phase One Answers 2023.pdf"
              },
              {
                year: 2023,
                title: "Summer Competition",
                description: "Challenge yourself with molecular biology and evolution questions.",
                pdfUrl: "/exams/Phase Two 2023.pdf",
                solutionsUrl: "/exams/Phase Two Answers 2023.pdf"
              },
              {
                year: 2022,
                title: "Winter Competition",
                description: "Explore topics in biochemistry and plant biology.",
                pdfUrl: "/exams/Phase Two 2022.pdf",
                solutionsUrl: "/exams/Phase Two Answers 2022.pdf"
              }
            ].map((exam, index) => (
              <motion.div
                key={`${exam.year}-${exam.title}`}
                className="relative group rounded-2xl p-8 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-emerald-500/50 transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl" />

                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-400">
                      {exam.year}
                    </span>
                    <span className="px-3 py-1 text-xs font-medium text-emerald-400 bg-emerald-500/10 rounded-full">
                      Past Exam
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">
                    {exam.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6">
                    {exam.description}
                  </p>
                  
                  <div className="flex flex-col space-y-2">
                    <motion.a
                      href={exam.pdfUrl}
                      className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download Exam
                    </motion.a>
                    
                    {exam.solutionsUrl && (
                      <motion.a
                        href={exam.solutionsUrl}
                        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-emerald-400 bg-emerald-500/10 rounded-lg hover:bg-emerald-500/20 transition-all"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        View Solutions
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 md:py-24 lg:py-32 px-4 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/20 via-green-900/20 to-transparent" />
          <div className="absolute inset-0 backdrop-blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center space-y-4 mb-20"
          >
            <h2 className="text-6xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Competition Results
            </h2>
            <p className="text-xl text-gray-400">Celebrating our outstanding participants</p>
          </motion.div>

          {/* Phase 1 Results */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <FaMicroscope className="text-emerald-400" />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                First Phase Qualifiers
              </span>
            </h3>
            <div className="overflow-hidden rounded-2xl border border-emerald-500/20">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10 bg-emerald-500/10 backdrop-blur-xl">
                    <th className="p-6 text-left font-bold text-emerald-300">Team Name</th>
                    <th className="p-6 text-left font-bold text-emerald-300">Country</th>
                    <th className="p-6 text-left font-bold text-emerald-300">Members</th>
                    <th className="p-6 text-left font-bold text-emerald-300">School</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {firstPhaseResults.map((team, index) => (
                    <motion.tr 
                      key={index}
                      className="bg-white/5 backdrop-blur-xl hover:bg-emerald-500/10 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <td className="p-6 font-semibold text-emerald-400">{team.teamName}</td>
                      <td className="p-6">{team.country}</td>
                      <td className="p-6">{team.members.join(", ")}</td>
                      <td className="p-6">{team.school}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Phase 2 Results */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <FaFlask className="text-teal-400" />
              <span className="bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">
                Second Phase Qualifiers
              </span>
            </h3>
            <div className="overflow-hidden rounded-2xl border border-teal-500/20">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10 bg-teal-500/10 backdrop-blur-xl">
                    <th className="p-6 text-left font-bold text-teal-300">Team Name</th>
                    <th className="p-6 text-left font-bold text-teal-300">Members</th>
                    <th className="p-6 text-left font-bold text-teal-300">School</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {secondPhaseResults.map((team, index) => (
                    <motion.tr 
                      key={index}
                      className="bg-white/5 backdrop-blur-xl hover:bg-teal-500/10 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <td className="p-6 font-semibold text-teal-400">{team.teamName}</td>
                      <td className="p-6">{team.members.join(", ")}</td>
                      <td className="p-6">{team.school}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Register Section */}
      <section className="min-h-[80vh] py-16 md:py-24 lg:py-32 px-4 relative flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/20 via-green-900/20 to-transparent" />
          <div className="absolute inset-0 backdrop-blur-3xl" />
          {/* Animated particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-emerald-400"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 2, 1],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="mx-auto w-24 h-24 relative"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 opacity-25 blur-xl" />
              <FaAtom className="w-full h-full text-emerald-400" />
            </motion.div>

            <div>
              <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Ready to Join?
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
                Take part in this exciting journey of scientific discovery and innovation
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button
                className="group w-full sm:w-auto px-12 py-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-xl font-semibold flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-emerald-500/25 transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Register Now
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                className="group w-full sm:w-auto px-12 py-6 border border-teal-500/30 rounded-full text-xl font-semibold flex items-center justify-center gap-3 hover:bg-teal-500/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
