import { useState, useEffect } from 'react'

const NetflixHeader = ({ profile, onProfileChange, onManageProfiles }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showProfileMenu, setShowProfileMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const profileIcons = {
    recruiter: '👔',
    developer: '💻',
    stalker: '🕵️',
    adventure: '🏔️'
  }

  const profileNames = {
    recruiter: 'Recruiter',
    developer: 'Developer',
    stalker: 'Stalker',
    adventure: 'Adventure'
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black' : 'bg-gradient-to-b from-black/70 to-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-red-600">
              SHASHANK
            </h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#home" className="text-white hover:text-gray-300 transition-colors duration-200">Home</a>
              <a href="#about" className="text-white hover:text-gray-300 transition-colors duration-200">About</a>
              <a href="#skills" className="text-white hover:text-gray-300 transition-colors duration-200">Skills</a>
              <a href="#projects" className="text-white hover:text-gray-300 transition-colors duration-200">Projects</a>
              <a href="#contact" className="text-white hover:text-gray-300 transition-colors duration-200">Contact</a>
            </nav>
          </div>

          {/* Profile Menu */}
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded flex items-center justify-center">
                <span className="text-sm">{profileIcons[profile]}</span>
              </div>
              <span className="hidden sm:block">{profileNames[profile]}</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-black/90 backdrop-blur-md rounded-lg shadow-xl border border-gray-700">
                <div className="py-2">
                  {Object.entries(profileNames).map(([key, name]) => (
                    <button
                      key={key}
                      onClick={() => {
                        onProfileChange(key)
                        setShowProfileMenu(false)
                      }}
                      className={`w-full text-left px-4 py-2 text-white hover:bg-gray-800 transition-colors duration-200 flex items-center space-x-2 ${
                        profile === key ? 'bg-gray-800' : ''
                      }`}
                    >
                      <span className="text-sm">{profileIcons[key]}</span>
                      <span>{name}</span>
                    </button>
                  ))}
                  <div className="border-t border-gray-700 my-2"></div>
                  <button
                    onClick={() => {
                      onManageProfiles()
                      setShowProfileMenu(false)
                    }}
                    className="w-full text-left px-4 py-2 text-white hover:bg-gray-800 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Manage Profiles</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default NetflixHeader
