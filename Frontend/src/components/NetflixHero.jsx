const NetflixHero = ({ profile }) => {
  const heroContent = {
    recruiter: {
      title: "Hiring the Right Talent",
      subtitle: "Discover why Shashank is the perfect fit for your team",
      description: "Experienced frontend developer with a proven track record of delivering high-quality, scalable web applications. Ready to bring innovation to your organization.",
      cta: "View Resume",
      bgImage: "bg-gradient-to-r from-blue-900/50 to-blue-600/50"
    },
    developer: {
      title: "Code. Create. Innovate.",
      subtitle: "Exploring the world of modern web development",
      description: "Passionate about clean code, modern frameworks, and creating exceptional user experiences. Always learning, always building.",
      cta: "See Projects",
      bgImage: "bg-gradient-to-r from-green-900/50 to-green-600/50"
    },
    stalker: {
      title: "The Digital Footprint",
      subtitle: "Everything you need to know about Shashank",
      description: "From code repositories to social media presence, get the complete picture of this developer's journey and achievements.",
      cta: "Investigate Further",
      bgImage: "bg-gradient-to-r from-purple-900/50 to-purple-600/50"
    },
    adventure: {
      title: "The Journey Continues",
      subtitle: "Exploring new technologies and challenges",
      description: "Every project is an adventure, every line of code a step forward. Join the journey of continuous learning and innovation.",
      cta: "Start Adventure",
      bgImage: "bg-gradient-to-r from-orange-900/50 to-orange-600/50"
    }
  }

  const content = heroContent[profile]

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className={`absolute inset-0 ${content.bgImage} bg-cover bg-center`}>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
          {content.title}
        </h1>
        <h2 className="text-2xl md:text-3xl mb-6 text-gray-200">
          {content.subtitle}
        </h2>
        <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed">
          {content.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-black px-8 py-3 rounded font-semibold text-lg hover:bg-gray-200 transition-colors duration-200">
            {content.cta}
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded font-semibold text-lg hover:bg-white hover:text-black transition-colors duration-200">
            Learn More
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default NetflixHero
