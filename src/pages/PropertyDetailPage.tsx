import { useState } from 'react';
import { useParams } from 'react-router-dom';

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
    description: 'This beautiful modern villa features a private pool, spacious living areas, and premium finishes throughout. Perfect for entertaining and located in a prestigious neighborhood.',
    features: [
      'Private Pool',
      'Gourmet Kitchen',
      'Open Floor Plan',
      'Smart Home Technology',
      'Home Office',
      'Walk-in Closets',
      'Landscaped Garden',
    ],
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bHV4dXJ5JTIwaG91c2V8ZW58MHx8MHx8fDI%3D',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGx1eHVyeSUyMGtpdGNoZW58ZW58MHx8MHx8fDA%3D',
      'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGx1eHVyeSUyMHBvb2x8ZW58MHx8MHx8fDA%3D',
    ],
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
    description: 'Stylish downtown apartment with modern amenities, high ceilings, and stunning city views. Walking distance to restaurants, shops, and public transportation.',
    features: [
      'City Views',
      'Hardwood Floors',
      'Stainless Steel Appliances',
      'In-unit Laundry',
      'Fitness Center',
      'Rooftop Terrace',
      '24-hour Security',
    ],
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRtZW50fGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXBhcnRtZW50JTIwbGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBhcnRtZW50JTIwYmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
    ],
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
    description: 'Stunning beachfront property with panoramic ocean views. This luxury home offers direct beach access, expansive outdoor living spaces, and high-end finishes throughout.',
    features: [
      'Ocean Views',
      'Direct Beach Access',
      'Outdoor Kitchen',
      'Fire Pit',
      'Wine Cellar',
      'Home Theater',
      'Multiple Decks',
    ],
    images: [
      'https://images.unsplash.com/photo-1527030280862-64139fba04ca?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2glMjB2aWV3fGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmVhY2glMjBkZWNrfGVufDB8fDB8fHww',
    ],
  },
];

const PropertyDetailPage = () => {
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState(0);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: 'I am interested in this property. Please contact me with more information.',
  });

  // Find the property based on the ID from the URL params
  const property = properties.find((p) => p.id === Number(id)) || properties[0];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    alert('Your message has been sent to our agent. We will contact you shortly!');
  };

  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Property Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{property.title}</h1>
          <p className="mt-2 text-lg text-gray-600">{property.address}</p>
          <div className="mt-4 flex items-center">
            <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${property.type === 'Sale' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
              For {property.type}
            </span>
            <span className="ml-4 text-2xl font-bold text-blue-600">
              {property.type === 'Rent' ? `$${property.price}/month` : `$${property.price.toLocaleString()}`}
            </span>
          </div>
        </div>

        {/* Property Images */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {/* Main Image */}
          <div className="md:col-span-3">
            <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
              <img
                src={property.images[activeImage]}
                alt={property.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex flex-row gap-2 md:flex-col">
            {property.images.map((image, index) => (
              <div
                key={index}
                className={`overflow-hidden rounded-lg ${activeImage === index ? 'ring-2 ring-blue-500' : ''}`}
                onClick={() => setActiveImage(index)}
              >
                <img src={image} alt={`${property.title} - Image ${index + 1}`} className="h-24 w-full object-cover cursor-pointer" />
              </div>
            ))}
          </div>
        </div>

        {/* Property Details and Contact Form */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Property Details */}
          <div className="lg:col-span-2">
            <div className="rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900">Property Details</h2>

              <div className="mt-6 grid grid-cols-2 gap-6 border-b border-gray-200 pb-6 sm:grid-cols-4">
                <div>
                  <p className="text-sm text-gray-500">Bedrooms</p>
                  <p className="text-lg font-medium text-gray-900">{property.bedrooms}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Bathrooms</p>
                  <p className="text-lg font-medium text-gray-900">{property.bathrooms}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Area</p>
                  <p className="text-lg font-medium text-gray-900">{property.area} sqft</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Type</p>
                  <p className="text-lg font-medium text-gray-900">For {property.type}</p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900">Description</h3>
                <p className="mt-2 text-gray-600">{property.description}</p>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900">Features</h3>
                <ul className="mt-2 grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
                  {property.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg className="mr-2 h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">Contact Agent</h2>
              <form className="mt-6" onSubmit={handleContactSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      placeholder="Your name"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      placeholder="Your email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      placeholder="Your phone number"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;
