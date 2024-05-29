import Header from "./components/Header"

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header />
      <main className="mx-auto py-8">
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
