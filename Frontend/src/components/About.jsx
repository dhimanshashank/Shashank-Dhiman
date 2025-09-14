const About = () => {
  const skills = [
    'React', 'JavaScript', 'TypeScript', 'Node.js', 'HTML5', 'CSS3',
    'Tailwind CSS', 'Git', 'Vite', 'Webpack', 'REST APIs', 'Responsive Design'
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Passionate Frontend Developer
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm a dedicated frontend developer with a passion for creating beautiful, 
              functional, and user-friendly web applications. With expertise in modern 
              JavaScript frameworks and a keen eye for design, I bring ideas to life 
              through clean, efficient code.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I believe in continuous learning and staying up-to-date with the latest 
              technologies and best practices. When I'm not coding, you can find me 
              exploring new technologies, contributing to open-source projects, or 
              sharing knowledge with the developer community.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">2+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">24/7</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Available</div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Technical Skills
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg text-center font-medium hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
                >
                  {skill}
                </div>
              ))}
            </div>
            
            {/* Download CV Button */}
            <div className="pt-6">
              <a
                href="#"
                className="btn-primary inline-flex items-center"
                download
              >
                <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
