'use client';

import { motion } from 'framer-motion';

export default function Magazines() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
          <span className="block">Our Magazines</span>
          <span className="block text-primary mt-2">Coming Soon</span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          We're working on bringing you exciting biology publications. Stay tuned for our upcoming magazine releases!
        </p>
      </motion.div>
    </div>
  );
}