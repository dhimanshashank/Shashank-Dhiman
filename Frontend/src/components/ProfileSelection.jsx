import { useState } from 'react'

const ProfileSelection = ({ onProfileSelect }) => {
  const profiles = [
    {
      id: 'recruiter',
      name: 'Recruiter',
      icon: '👔',
      description: 'Hiring Manager',
      color: 'from-blue-500 to-blue-700',
      hoverColor: 'hover:from-blue-600 hover:to-blue-800'
    },
    {
      id: 'developer',
      name: 'Developer',
      icon: '💻',
      description: 'Tech Professional',
      color: 'from-green-500 to-green-700',
      hoverColor: 'hover:from-green-600 hover:to-green-800'
    },
    {
      id: 'stalker',
      name: 'Stalker',
      icon: '🕵️',
      description: 'Curious Visitor',
      color: 'from-purple-500 to-purple-700',
      hoverColor: 'hover:from-purple-600 hover:to-purple-800'
    },
    {
      id: 'adventure',
      name: 'Adventure',
      icon: '🏔️',
      description: 'Explorer',
      color: 'from-orange-500 to-orange-700',
      hoverColor: 'hover:from-orange-600 hover:to-orange-800'
    }
  ]

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">
          Who's watching?
        </h1>
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              onClick={() => onProfileSelect(profile.id)}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-110"
            >
              <div className={`w-32 h-32 rounded-lg bg-gradient-to-br ${profile.color} ${profile.hoverColor} flex flex-col items-center justify-center mb-4 shadow-2xl group-hover:shadow-3xl transition-all duration-300`}>
                <div className="text-4xl mb-2">{profile.icon}</div>
                <div className="text-white font-semibold text-sm">{profile.name}</div>
              </div>
              <p className="text-gray-400 text-sm">{profile.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <button className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded text-lg font-semibold transition-colors duration-200">
            Manage Profiles
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfileSelection
