import { useState, useEffect } from 'react'

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Check if we're on the client side
    if (typeof window === 'undefined') return false
    
    // Check if there's a saved preference in localStorage
    const saved = localStorage.getItem('darkMode')
    if (saved !== null) {
      return JSON.parse(saved)
    }
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    // Save preference to localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
    
    // Apply dark mode class to document element
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e) => {
      // Only update if user hasn't manually set a preference
      const saved = localStorage.getItem('darkMode')
      if (saved === null) {
        setDarkMode(e.matches)
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return [darkMode, toggleDarkMode]
}
