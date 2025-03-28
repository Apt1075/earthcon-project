import { useState } from 'react';
import { Link } from 'react-router-dom';

// Sample property data
const properties = [
  {
    id: 1,
    title: 'Modern Villa with Pool',
    price: 750000,
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    address: '123 Luxury Lane, Beverly Hills, CA',
    type: 'Sale',
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
    type: 'Sale',
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
    type: 'Sale',
    imageUrl: 'https://images.unsplash.com/photo-1527030280862-64139fba04ca?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    id: 4,
    title: 'Suburban Family Home',
    price: 520000,
    bedrooms: 4,
    bathrooms: 2,
    area: 2200,
    address: '456 Family Ave, Austin, TX',
    type: 'Sale',
    imageUrl: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8fDA%3D'
  },
  {
    id: 5,
    title: 'Luxury Condo',
    price: 2200,
    bedrooms: 2,
    bathrooms: 2,
    area: 1400,
    address: '100 Skyline Dr, Miami, FL',
    type: 'Rent',
    imageUrl: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZG98ZW58MHx8MHx8fDA%3D'
  },
  {
    id: 6,
    title: 'Mountain Retreat',
    price: 850000,
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    address: '210 Mountain View, Aspen, CO',
    type: 'Sale',
    imageUrl: 'https://images.unsplash.com/photo-1542889601-399c4f3a8402?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhYmlufGVufDB8fDB8fHww'
  },
];

const PropertyListingPage = () => {
  const [filters, setFilters] = useState({
    propertyType: 'All',
    priceRange: 'All',
    bedrooms: 'All',
  });

  const filteredProperties = properties;

  return (
    <div className="bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Available Properties
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Browse our extensive collection of properties for sale and rent.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-8 bg-white p-4 rounded-lg shadow sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div>
              <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700">
                Property Type
              </label>
              <select
                id="propertyType"
                name="propertyType"
                className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                value={filters.propertyType}
                onChange={(e) => setFilters({ ...filters, propertyType: e.target.value })}
              >
                <option value="All">All Types</option>
                <option value="House">House</option>
                <option value="Apartment">Apartment</option>
                <option value="Condo">Condo</option>
                <option value="Villa">Villa</option>
              </select>
            </div>

            <div>
              <label htmlFor="priceRange" className="block text-sm font-medium text-gray-700">
                Price Range
              </label>
              <select
                id="priceRange"
                name="priceRange"
                className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                value={filters.priceRange}
                onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
              >
                <option value="All">Any Price</option>
                <option value="0-300000">Under $300,000</option>
                <option value="300000-500000">$300,000 - $500,000</option>
                <option value="500000-750000">$500,000 - $750,000</option>
                <option value="750000-1000000">$750,000 - $1,000,000</option>
                <option value="1000000+">$1,000,000+</option>
              </select>
            </div>

            <div>
              <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700">
                Bedrooms
              </label>
              <select
                id="bedrooms"
                name="bedrooms"
                className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                value={filters.bedrooms}
                onChange={(e) => setFilters({ ...filters, bedrooms: e.target.value })}
              >
                <option value="All">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="5">5+</option>
              </select>
            </div>
          </div>
        </div>

        {/* Property Grid */}
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProperties.map((property) => (
            <div key={property.id} className="overflow-hidden rounded-lg bg-white shadow transition hover:shadow-lg">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={property.imageUrl}
                  alt={property.title}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-gray-900">{property.title}</h3>
                  <span className={`text-xs font-medium px-2 py-1 rounded ${property.type === 'Sale' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                    {property.type}
                  </span>
                </div>
                <p className="mt-2 text-lg font-medium text-blue-600">
                  {property.type === 'Rent' ? `$${property.price}/month` : `$${property.price.toLocaleString()}`}
                </p>
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
      </div>
    </div>
  );
};

export default PropertyListingPage;
