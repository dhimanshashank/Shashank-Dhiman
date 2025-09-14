import { useState } from 'react'
import ProfileSelection from './components/ProfileSelection'
import NetflixHeader from './components/NetflixHeader'
import NetflixHero from './components/NetflixHero'
import ContentSection from './components/ContentSection'
import NetflixFooter from './components/NetflixFooter'
import { contentData } from './data/contentData'

function App() {
  const [selectedProfile, setSelectedProfile] = useState(null)
  const [showProfileManager, setShowProfileManager] = useState(false)

  const handleProfileSelect = (profileId) => {
    setSelectedProfile(profileId)
  }

  const handleProfileChange = (profileId) => {
    setSelectedProfile(profileId)
  }

  const handleManageProfiles = () => {
    setShowProfileManager(true)
  }

  const handleCloseProfileManager = () => {
    setShowProfileManager(false)
  }

  if (!selectedProfile) {
    return (
      <>
        <ProfileSelection onProfileSelect={handleProfileSelect} />
        {showProfileManager && (
          <ProfileManager 
            onClose={handleCloseProfileManager}
            onProfileSelect={handleProfileSelect}
          />
        )}
      </>
    )
  }

  const currentContent = contentData[selectedProfile]

  return (
    <div className="min-h-screen bg-black text-white">
      <NetflixHeader 
        profile={selectedProfile} 
        onProfileChange={handleProfileChange}
        onManageProfiles={handleManageProfiles}
      />
      <main>
        <NetflixHero profile={selectedProfile} />
        <div className="px-4 py-8">
          {currentContent.sections.map((section, index) => (
            <ContentSection
              key={index}
              title={section.title}
              items={section.items}
              profile={selectedProfile}
            />
          ))}
        </div>
      </main>
      <NetflixFooter />
    </div>
  )
}

export default App
