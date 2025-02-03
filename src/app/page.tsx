'use client';

import dynamic from 'next/dynamic';
import WhatWeOffer from '@/components/home/WhatWeOffer';
import Branches from '@/components/home/Branches';
import Competitions from '@/components/home/Competitions';

// Dynamically import Hero component
const Hero = dynamic(() => import('@/components/home/Hero'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-gray-900 to-black">
      <div className="text-white text-2xl">Loading...</div>
    </div>
  ),
});

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Hero />
      <WhatWeOffer />
      <Competitions />
      <Branches />
    </main>
  );
}
