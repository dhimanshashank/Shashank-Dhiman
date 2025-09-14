const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'TypeScript', 'Socket.io', 'Express', 'PostgreSQL'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that displays current weather conditions and forecasts for multiple cities with interactive maps.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'CSS3'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects, skills, and experience with smooth animations and dark mode support.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false
    },
    {
      id: 5,
      title: 'Blog Platform',
      description: 'A content management system for bloggers with rich text editor, comment system, and admin dashboard.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'MongoDB', 'Quill.js', 'JWT'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false
    },
    {
      id: 6,
      title: 'Chat Application',
      description: 'A real-time chat application with private messaging, group chats, file sharing, and emoji reactions.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Socket.io', 'Express', 'Redis', 'Multer'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      featured: false
    }
  ]

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience in web development.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="card group hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <div className="w-full h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                    <div className="text-white text-6xl font-bold">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-primary-600 px-4 py-2 rounded-lg font-medium hover:bg-primary-50 transition-colors duration-200"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Other Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <div key={project.id} className="card group hover:shadow-lg transition-shadow duration-300">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <div className="w-full h-32 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                    <div className="text-white text-3xl font-bold">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex space-x-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
                  >
                    View Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
