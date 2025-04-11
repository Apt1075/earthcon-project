import React from "react";
import himanshu from "../assets/images/himanshu.jpeg";
import aman from "../assets/images/aman.jpeg";
import shiva from "../assets/images/shiva.jpg";
import raja from "../assets/images/raja.jpeg";

const teamMembers = [
  {
    name: "Himanshu Singh Chahaun",
    role: "CEO & Founder",
    image: himanshu, //"https://www.dropbox.com/scl/fi/e3zqf1bmo4uje0zqpymwo/WhatsApp-Image-2025-03-28-at-16.46.13.jpeg?rlkey=pmnqnw2mqo7z5g9ruwb1cz3om&st=gp06b3tx&dl=0",
    bio: "Himanshu has over 5 years of experience in real estate and founded the company in 2020.",
  },
  {
    name: "Aman Savita",
    role: "Head of Sales",
    image: aman, //"https://unsplash.com/photos/tyvd0s0ZNME",
    bio: "Aman is an accomplished Head of Sales with extensive experience in the market and exceptional leadership qualities. His strategic vision and ability to inspire his team have consistently driven business growth and significantly improved sales performance within the organization.",
  },
  {
    name: "Shiva Mathur",
    role: "Property Manager",
    image: shiva, //"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    bio: "Shiva plays a dual role in our organization as a Property Manager and a Sales Channel Driver. His expertise in property management combined with his sales acumen makes him a vital asset in maximizing property value and optimizing sales strategies",
  },
  {
    name: "Raja Tiwari",
    role: "Marketing Director",
    image: raja, //"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    bio: "Raja handles our marketing strategies, ensuring our properties reach the right audience.",
  },
];

const AboutPage = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            At "Earthcon Projects," we are dedicated to helping clients find their perfect property. With years of
            experience in real estate, we provide expert guidance, personalized service, and transparent solutions.
          </p>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
          <p className="text-gray-600 mt-2">Our dedicated professionals are here to help you with all your real estate needs.</p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="mx-auto w-32 h-32 overflow-hidden rounded-full border-4 border-gray-200">
                <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{member.name}</h3>
              <p className="text-blue-600 font-medium">{member.role}</p>
              <p className="mt-3 text-gray-600 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-blue-600 text-white">
                ✅
              </div>
              <h3 className="mt-3 text-lg font-semibold text-gray-900">Expert Knowledge</h3>
              <p className="mt-2 text-gray-600">Our agents have in-depth knowledge of local markets.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-blue-600 text-white">
                📞
              </div>
              <h3 className="mt-3 text-lg font-semibold text-gray-900">Responsive Service</h3>
              <p className="mt-2 text-gray-600">We offer quick responses and personalized attention.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-blue-600 text-white">
                ❤️
              </div>
              <h3 className="mt-3 text-lg font-semibold text-gray-900">Client-Focused</h3>
              <p className="mt-2 text-gray-600">Your satisfaction is our priority.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;