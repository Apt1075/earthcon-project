const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Himanshu Singh Chahaun',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
      bio: 'Himanshu has over 5 years of experience in real estate and founded the company in 2020.',
    },
    {
      name: 'Aman Singh',
      role: 'Head of Sales',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
      bio: 'Aman leads our sales team and has closed over $50 million in property transactions.',
    },
    {
      name: 'Shiva mathur',
      role: 'Property Manager',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
      bio: 'Shiva ensures that all our properties are well-maintained and tenant needs are met promptly.',
    },
    {
      name: 'Raja Tiwari',
      role: 'Marketing Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
      bio: 'Raja handles our marketing strategies, ensuring our properties reach the right audience.',
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* About Us Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Us</h1>
          <p className="mt-4 text-lg text-gray-600">
          At " Earthcon projects "we are dedicated to helping clients find their perfect property. With years of experience in the real estate industry, our team offers expert advice, personalized service, and a deep understanding of local markets. Whether you're buying, selling, or renting, we provide seamless solutions to meet your needs. Our mission is to make your real estate journey stress-free and rewarding, with a commitment to integrity, professionalism, and exceptional customer service." <br />
          <br />
          we believe in honesty and transparency with our customers. We never make fake promises and always provide the best solutions to ensure complete satisfaction, backed by trust. Our motive is simple – to help turn everyone’s dreams into reality, offering the perfect property with genuine care and commitment. We aim to make your property journey seamless, while building long-lasting trust every step of the way.  <br />
          <br />
          we believe in providing complete transparency and unwavering support to help you invest in the property of your dreams . With a strong commitment to guiding you through every step of the real estate process, we focus on offering clear, honest advice and tailored solutions to meet your unique needs. Our team of experts is dedicated to ensuring a smooth and informed journey, whether you’re buying, selling, or investing. Let us help you make smart property decisions that turn your dreams into reality."

          </p>
        </div>

        {/* Company Story */}
        {/* <div className="mt-16">
          <div className="relative overflow-hidden rounded-lg bg-blue-600 px-6 py-12 shadow-xl sm:px-12 sm:py-16">
            <div className="relative">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Story</h2>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/90">
                we believe in honesty and transparency with our customers. We never make fake promises and always provide the best solutions to ensure complete satisfaction, backed by trust. Our motive is simple – to help turn everyone’s dreams into reality, offering the perfect property with genuine care and commitment. We aim to make your property journey seamless, while building long-lasting trust every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div> */}

        {/* Mission & Values */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            <p className="mt-4 text-gray-600">
            Our mission is to provide exceptional real estate services by helping clients find their ideal properties while delivering personalized, transparent, and trustworthy guidance. We aim to create lasting relationships with our clients and communities through innovative solutions, integrity, and dedication to excellence.
            </p>
          </div>
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900">Our Values</h2>
            <ul className="mt-4 space-y-3 text-gray-600">
              <li className="flex items-start">
                <svg className="mr-2 h-5 w-5 flex-shrink-0 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Integrity:</strong> We operate with honesty and transparency in all our dealings.</span>
              </li>
              <li className="flex items-start">
                <svg className="mr-2 h-5 w-5 flex-shrink-0 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Excellence:</strong> We strive for excellence in customer service and property management.</span>
              </li>
              <li className="flex items-start">
                <svg className="mr-2 h-5 w-5 flex-shrink-0 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Innovation:</strong> We embrace new technologies and approaches to improve our services.</span>
              </li>
              <li className="flex items-start">
                <svg className="mr-2 h-5 w-5 flex-shrink-0 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong>Community:</strong> We are committed to giving back to the communities we serve.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Meet the Team */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center text-gray-900">Meet Our Team</h2>
          <p className="mt-4 text-center text-gray-600">
            Our dedicated professionals are here to help you with all your real estate needs.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-lg text-center">
                <div className="mx-auto h-32 w-32 overflow-hidden rounded-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-4 text-xl font-medium text-gray-900">{member.name}</h3>
                <p className="text-blue-600">{member.role}</p>
                <p className="mt-3 text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-16 bg-gray-50 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-900">Why Choose Us</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-blue-600 text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mt-3 text-lg font-medium text-gray-900">Expert Knowledge</h3>
              <p className="mt-2 text-gray-600">
                Our agents have in-depth knowledge of local markets and property values.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-blue-600 text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-3 text-lg font-medium text-gray-900">Responsive Service</h3>
              <p className="mt-2 text-gray-600">
                We pride ourselves on quick responses and personalized attention.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-blue-600 text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mt-3 text-lg font-medium text-gray-900">Client-Focused</h3>
              <p className="mt-2 text-gray-600">
                Your satisfaction is our priority. We listen to your needs and deliver results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
