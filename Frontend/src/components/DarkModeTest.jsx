const DarkModeTest = () => {
  return (
    <div className="fixed bottom-4 right-4 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
      <div className="text-sm text-gray-600 dark:text-gray-400">
        <div className="font-semibold mb-2">Dark Mode Test</div>
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span>Blue</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span>Green</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span>Red</span>
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-500 mt-2">
            This should change colors in dark mode
          </div>
        </div>
      </div>
    </div>
  )
}

export default DarkModeTest
