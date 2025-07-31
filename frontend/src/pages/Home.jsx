import { Layout } from "../pages/Layout.jsx"

export function Home() {
  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to Island Grill</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Authentic Caribbean cuisine in the heart of Brooklyn
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                View Menu
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-colors">
                Order Now
              </button>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Menu</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white rounded-lg shadow-md p-6">
                  <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                  <h3 className="text-xl font-semibold mb-2">Menu Item {item}</h3>
                  <p className="text-gray-600 mb-4">
                    Delicious Caribbean dish with authentic flavors and fresh ingredients.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-600">$12.99</span>
                    <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">About Island Grill</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  For over 20 years, Island Grill has been serving authentic Caribbean cuisine to the Brooklyn
                  community. Our recipes have been passed down through generations, ensuring every dish captures the
                  true essence of island flavors.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We use only the freshest ingredients and traditional cooking methods to bring you an unforgettable
                  dining experience that transports you straight to the Caribbean.
                </p>
              </div>
              <div className="h-96 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Visit Us Today</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Location & Hours</h3>
                <div className="space-y-2 text-gray-600 mb-6">
                  <p>123 4th Street</p>
                  <p>Brooklyn NY 10013</p>
                  <p>(555) 123-4567</p>
                  <p>info@islandgrill.com</p>
                </div>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Monday - Thursday:</strong> 11am - 10pm</p>
                  <p><strong>Friday - Saturday:</strong> 11am - 11pm</p>
                  <p><strong>Sunday:</strong> 12pm - 9pm</p>
                </div>
              </div>
              <div className="h-64 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}