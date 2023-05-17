import './App.css'

function App() {

  return (
    <>
      <div className="bg-gray-800 py-4">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a className="text-white text-lg font-semibold" href="#">Logo</a>
          </div>
          <div className="hidden md:block">
            <ul className="space-x-4">
              <li>
                <a className="text-gray-300 hover:text-white" href="#">Home</a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-white" href="#">About</a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-white" href="#">Services</a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-white" href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white focus:outline-none">
              <svg className="h-6 w-6" viewBox="0 0 24 24">
                <path
                  className="fill-current"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
    </>
  )
}

export default App
