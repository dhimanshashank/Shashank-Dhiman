const ContentSection = ({ title, items, profile }) => {
  const getItemStyle = (index) => {
    const styles = {
      recruiter: [
        'bg-gradient-to-br from-blue-500 to-blue-700',
        'bg-gradient-to-br from-indigo-500 to-indigo-700',
        'bg-gradient-to-br from-cyan-500 to-cyan-700',
        'bg-gradient-to-br from-teal-500 to-teal-700'
      ],
      developer: [
        'bg-gradient-to-br from-green-500 to-green-700',
        'bg-gradient-to-br from-emerald-500 to-emerald-700',
        'bg-gradient-to-br from-lime-500 to-lime-700',
        'bg-gradient-to-br from-yellow-500 to-yellow-700'
      ],
      stalker: [
        'bg-gradient-to-br from-purple-500 to-purple-700',
        'bg-gradient-to-br from-pink-500 to-pink-700',
        'bg-gradient-to-br from-rose-500 to-rose-700',
        'bg-gradient-to-br from-violet-500 to-violet-700'
      ],
      adventure: [
        'bg-gradient-to-br from-orange-500 to-orange-700',
        'bg-gradient-to-br from-red-500 to-red-700',
        'bg-gradient-to-br from-amber-500 to-amber-700',
        'bg-gradient-to-br from-yellow-500 to-yellow-700'
      ]
    }
    return styles[profile][index % 4] || styles[profile][0]
  }

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-white mb-6 px-4">{title}</h2>
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide px-4">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-64 h-36 rounded-lg ${getItemStyle(index)} p-6 flex flex-col justify-between cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
          >
            <div>
              <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-white/80 text-sm">{item.description}</p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white/60 text-xs">{item.category}</span>
              <svg className="w-4 h-4 text-white/60" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ContentSection
