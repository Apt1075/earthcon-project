import { Link } from 'react-router-dom';

// Sample property data
const featuredProperties = [
  {
    id: 1,
    title: 'Modern Villa with Pool',
    price: 750000,
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    address: '123 Luxury Lane, Beverly Hills, CA',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bHV4dXJ5JTIwaG91c2V8ZW58MHx8MHx8fDI%3D'
  },
  {
    id: 2,
    title: 'Downtown Apartment',
    price: 450000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    address: '456 Urban Street, New York, NY',
    imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRtZW50fGVufDB8fDB8fHww'
  },
  {
    id: 3,
    title: 'Beachfront Property',
    price: 1200000,
    bedrooms: 5,
    bathrooms: 4,
    area: 3200,
    address: '789 Coastal Road, Malibu, CA',
    imageUrl: 'https://images.unsplash.com/photo-1527030280862-64139fba04ca?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D'
  },
];

const HomePage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[600px]"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D)' }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 sm:py-48 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Find Your Dream Home
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              Discover the perfect property that fits your lifestyle and budget.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/properties"
                className="rounded-md bg-blue-600 px-5 py-3 text-md font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Browse Properties
              </Link>
              <Link to="/contact" className="text-md font-semibold leading-6 text-white">
                Contact Us <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Properties Section */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Featured Properties
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Explore our handpicked selection of premium properties.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProperties.map((property) => (
            <div key={property.id} className="overflow-hidden rounded-lg bg-white shadow transition hover:shadow-lg">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={property.imageUrl}
                  alt={property.title}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{property.title}</h3>
                <p className="mt-2 text-lg font-medium text-blue-600">${property.price.toLocaleString()}</p>
                <p className="mt-2 text-sm text-gray-500">{property.address}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex space-x-4 text-sm text-gray-500">
                    <span>{property.bedrooms} beds</span>
                    <span>{property.bathrooms} baths</span>
                    <span>{property.area} sqft</span>
                  </div>
                  <Link
                    to={`/properties/${property.id}`}
                    className="text-sm font-medium text-blue-600 hover:text-blue-500"
                  >
                    View details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/properties"
            className="rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            View All Properties
          </Link>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Comprehensive real estate services tailored to your needs.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-8 shadow">
              <h3 className="text-xl font-semibold text-gray-900">Property Sales</h3>
              <p className="mt-4 text-gray-600">
                We help you find the perfect property or sell your current one at the best possible price.
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 shadow">
              <h3 className="text-xl font-semibold text-gray-900">Property Management</h3>
              <p className="mt-4 text-gray-600">
                Let us handle the day-to-day management of your investment properties.
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 shadow">
              <h3 className="text-xl font-semibold text-gray-900">Investment Consulting</h3>
              <p className="mt-4 text-gray-600">
                Expert advice on real estate investments to maximize your returns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
