'use client';

import dynamic from 'next/dynamic';

const CompetitionContent = dynamic(
  () => import('@/components/competition/CompetitionContent'),
  {
    loading: () => (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex items-center justify-center">
        <div className="text-2xl">Loading Competition Page...</div>
      </div>
    ),
    ssr: false
  }
)

export default function CompetitionPage() {
  return <CompetitionContent />
}
