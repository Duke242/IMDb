export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <header className="bg-yellow-500 py-4 w-full">
        <div className="container mx-auto flex items-center justify-between">
          <div className="logo">
            <img src="your-logo.png" alt="Your Logo" className="h-8" />
          </div>
          <nav>
            <ul className="flex items-center space-x-6">
              <li>
                <a href="#" className="text-black hover:text-gray-800">
                  Menu
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-gray-800">
                  All
                </a>
              </li>
              <li>
                <form action="#" method="get" className="flex">
                  <input
                    type="text"
                    name="search"
                    placeholder="Search..."
                    className="px-3 py-1 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-1 bg-black text-white border border-black rounded-r-md hover:bg-gray-800"
                  >
                    Search
                  </button>
                </form>
              </li>
            </ul>
          </nav>
          <div className="user-actions flex items-center space-x-4">
            <a href="#" className="text-black hover:text-gray-800">
              Watchlist
            </a>
            <a href="#" className="text-black hover:text-gray-800">
              Sign In
            </a>
            <select className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500">
              <option value="en">EN</option>
              <option value="es">ES</option>
              <option value="fr">FR</option>
            </select>
          </div>
        </div>
      </header>
      <main className="flex-grow container mx-auto py-8">
        <section>
          <h2 className="text-xl font-bold mb-4">About Us</h2>
          <p>
            We are a company dedicated to providing high-quality products and
            services.
          </p>
        </section>
        <section className="mt-8">
          <h2 className="text-xl font-bold mb-4">Our Services</h2>
          <ul className="list-disc pl-6">
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
          </ul>
        </section>
      </main>
      <footer className="bg-gray-100 py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 My Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
