import { useState } from 'react'

const ProfileManager = ({ onClose, onProfileSelect }) => {
  const [profiles, setProfiles] = useState([
    {
      id: 'recruiter',
      name: 'Recruiter',
      icon: '👔',
      description: 'Hiring Manager',
      color: 'from-blue-500 to-blue-700'
    },
    {
      id: 'developer',
      name: 'Developer',
      icon: '💻',
      description: 'Tech Professional',
      color: 'from-green-500 to-green-700'
    },
    {
      id: 'stalker',
      name: 'Stalker',
      icon: '🕵️',
      description: 'Curious Visitor',
      color: 'from-purple-500 to-purple-700'
    },
    {
      id: 'adventure',
      name: 'Adventure',
      icon: '🏔️',
      description: 'Explorer',
      color: 'from-orange-500 to-orange-700'
    }
  ])

  const [editingProfile, setEditingProfile] = useState(null)

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-lg p-8 max-w-4xl w-full mx-4 max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white">Manage Profiles</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="group cursor-pointer"
              onClick={() => onProfileSelect(profile.id)}
            >
              <div className={`w-32 h-32 rounded-lg bg-gradient-to-br ${profile.color} flex flex-col items-center justify-center mb-4 shadow-2xl group-hover:shadow-3xl transition-all duration-300 group-hover:scale-110`}>
                <div className="text-4xl mb-2">{profile.icon}</div>
                <div className="text-white font-semibold text-sm">{profile.name}</div>
              </div>
              <p className="text-gray-400 text-sm text-center">{profile.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center space-x-4">
          <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded font-semibold transition-colors duration-200">
            Add Profile
          </button>
          <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded font-semibold transition-colors duration-200">
            Edit Profiles
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfileManager
