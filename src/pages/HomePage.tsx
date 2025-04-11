/* eslint-disable import/no-unresolved */
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import contactside from "../assets/images/contactside.png";
import slidervideo from "../assets/videos/slidervideo.mp4"; // this will work now
import himanshu from "../assets/images/himanshu.jpeg";
import aman from "../assets/images/aman.jpeg";
import shiva from "../assets/images/shiva.jpg";
import vivek from "../assets/images/vivek.jpeg";
import ankit from "../assets/images/ankit.jpeg";
import satyam from "../assets/images/satyam.png";
import maavaishnavilogo from "../assets/images/maa-vaishnavi.png"; 
import vacl from "../assets/images/vacl.jpeg";
import agentImage from "../assets/images/salephoto.png"; 

const teamMembers = [
  {
    name: "Vivek Kumar",
    role: "Sales Manager",
    image: vivek, //"https://www.dropbox.com/scl/fi/e3zqf1bmo4uje0zqpymwo/WhatsApp-Image-2025-03-28-at-16.46.13.jpeg?rlkey=pmnqnw2mqo7z5g9ruwb1cz3om&st=gp06b3tx&dl=0",
    bio: "Vivek serves as a Sales Coach at Earthcon  projects , where he is dedicated to enhancing the sales team's performance through targeted training, coaching, and strategic development initiatives. His expertise plays a crucial role in driving sales effectiveness and achieving organizational goals.",
  },
  {
    name: "Ankit Chaurasia",
    role: "Sales Manager",
    image: ankit, //"https://unsplash.com/photos/tyvd0s0ZNME",
    bio: "Ankit serves as a vital leader within the organization, responsible for driving sales performance and overseeing the sales team. His contributions are crucial to achieving the company's revenue goals and fostering a culture of high performance.",
  },
  {
    name: "Satyam Yadav",
    role: "Sales Manager",
    image: satyam, //"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    bio: "Satyam is an integral part of our organization, serving as the Sales Manager. His leadership and strategic approach are pivotal in driving sales performance and achieving the company's revenue objectives.",
  },
];

// const heroImages = [
//   "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
//   "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bHV4dXJ5JTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D",
//   "https://images.unsplash.com/photo-1592595896551-12b642b05e3e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
// ];

const featuredProperties = [
  {
    id: 1,
    title: "Modern Villa with Pool",
    price: 750000,
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    address: "123 Luxury Lane, Beverly Hills, CA",
    imageUrl:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bHV4dXJ5JTIwaG91c2V8ZW58MHx8MHx8fDI%3D",
  },
  {
    id: 2,
    title: "Downtown Apartment",
    price: 450000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    address: "456 Urban Street, New York, NY",
    imageUrl:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRtZW50fGVufDB8fDB8fHww",
  },
  {
    id: 3,
    title: "Beachfront Property",
    price: 1200000,
    bedrooms: 5,
    bathrooms: 4,
    area: 3200,
    address: "789 Coastal Road, Malibu, CA",
    imageUrl:
      "https://images.unsplash.com/photo-1527030280862-64139fba04ca?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const clientTestimonials = [
  {
    id: 1,
    name: "Rishabh Patel",
    review:
      "This company made my dream of owning a home a reality! Their team's dedication and professionalism helped me find the perfect property within my budget. I highly recommend them to anyone looking for their ideal home.",
    company: "RG LUXURY",
  },
  {
    id: 2,
    name: "Raghav Singhal",
    review:
      "I couldn't be happier with the service provided. From the initial consultation to the final closing, they were with me every step of the way, ensuring a smooth and stress-free experience. Thank you for helping me find my dream home!",
    company: "IRIS PLATINUM",
  },
  {
    id: 3,
    name: "Akash Singh",
    review:
      "Collaborating with this team was a game-changer for me. Their extensive market knowledge and personalized approach made the entire property buying process much easier. I'm grateful for their expertise to work with them again in the future.",
    company: "NX ONE",
  },
];

const services = [
  { title: "Home Loan", icon: "https://img.icons8.com/fluency/96/money.png" },
  { title: "Home Interior", icon: "https://img.icons8.com/fluency/96/sofa.png" },
  { title: "Property Legal Services", icon: "https://img.icons8.com/color/96/law.png" },
  { title: "Property Management", icon: "https://img.icons8.com/fluency/96/home.png" },
  { title: "Escrow Services", icon: "https://img.icons8.com/fluency/96/security-checked.png" },
  { title: "Online Rent Agreement", icon: "https://img.icons8.com/fluency/96/agreement.png" },
  { title: "Rent Receipt Generator", icon: "https://img.icons8.com/fluency/96/receipt-approved.png" },
  { title: "Sell or Rent Property", icon: "https://img.icons8.com/fluency/96/real-estate.png" },
  { title: "Title Search", icon: "https://img.icons8.com/fluency/96/search-property.png" },
  { title: "Litigation", icon: "https://img.icons8.com/color/96/court-judge.png" },
  { title: "Valuation", icon: "https://img.icons8.com/fluency/96/combo-chart.png" },
  { title: "Property Registration", icon: "https://img.icons8.com/fluency/96/document.png" },

];


const associations = [
  { id: 1, name: "VACL", imageUrl: vacl },
  { id: 2, name: "Maa vaishnavi", imageUrl: maavaishnavilogo },
  { id: 3, name: "VACL", imageUrl: vacl },
  { id: 4, name: "ACE Group", imageUrl: "https://via.placeholder.com/150?text=ACE+Group" },
  { id: 5, name: "M3M", imageUrl: "https://via.placeholder.com/150?text=M3M" },
];


const videos = [
  {
    url: "https://www.youtube.com/embed/RM1azZ0dRzU",
    size: "large",
  },
  {
    url: "https://www.youtube.com/embed/qUVh1HmhZc8",
    size: "medium",
  },
  {
    url: "https://www.youtube.com/embed/mbYkBqUWr-k",
    size: "small",
  },
  {
    url: "https://www.youtube.com/embed/YQHsXMglC9A",
    size: "small",
  },
];


const sliderSettingsASSOCIATIONS = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 1 } },
  ],
};
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
};

const HomePage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section Slider */}
      <div className="relative">
      {/* <Slider {...sliderSettings}> */}
    <div className="relative h-[700px]">
      <video
        src={slidervideo}
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  {/* </Slider> */}
      </div>

      {/* Featured Properties Section */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Featured Properties
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProperties.map((property) => (
            <div
              key={property.id}
              className="overflow-hidden rounded-lg bg-white shadow transition hover:shadow-lg"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={property.imageUrl}
                  alt={property.title}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{property.title}</h3>
                <p className="mt-2 text-lg font-medium text-blue-600">
                  ${property.price.toLocaleString()}
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





      <div className="bg-white">
        {/* Other Sections (Hero, Featured Properties) */}

        {/* Clients Section */}
        <div className="bg-white py-16 ">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-black ">OUR CLIENT'S VOICES!</h2>
            <div className="border-brown-500 mx-auto my-4 w-16 border-t-4"></div>
            <p className="uppercase tracking-wide text-gray-600">
              HEAR WHAT OUR SATISFIED CLIENTS HAVE TO SAY
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-7xl gap-8 px-6 md:grid-cols-2 lg:grid-cols-3">
            {clientTestimonials.map((client) => (
              <div key={client.id} className="rounded-lg bg-teal-700 p-6 text-white shadow-lg">
                <p className="italic">"{client.review}"</p>
                <p className="mt-4 text-right font-semibold">-{client.name}</p>
                {/* <hr className="my-4 border-gray-300" />
                <p className="text-center font-bold uppercase">{client.company}</p> */}
              </div>
            ))}
          </div>
        </div>
      </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Meet Our Sales Team</h2>
          <p className="text-gray-600 mt-2">Our dedicated professionals are here to help you with all your real estate needs.</p>
        </div>

        <div className="mx-auto mt-12 grid max-w-7xl gap-8 px-6 md:grid-cols-2 lg:grid-cols-3">
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

        {/* <div className="text-center mt-10">
          <h2 className="text-3xl font-bold text-gray-900">CONTACT WITH OUR AGENTS</h2>
          <p className="text-gray-600 mt-2">Your perfect home is closer than you think. Connect with our expert agent today and
          start your journey with confidence and ease.</p>
       </div>
        <div className="flex justify-center items-center py-10 bg-white">
   
      <div className="flex rounded-3xl shadow-xl overflow-hidden max-w-6xl w-full">
  
        <div className="w-1/3">
          <img src={agentImage} alt="Sales Agent" className="h-full w-full object-cover" />
        </div>

   
        <div className="w-2/3 bg-[#035468] p-10 text-white flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
          <p className="text-lg leading-relaxed mb-6">
            Reach out to us via phone for personalized guidance and assistance
            in navigating the complexities of the real estate market. Let our
            experienced team help you achieve your property goals. Call us now!
          </p>
          <button className="bg-[#FF6C52] hover:bg-[#e55a44] text-white font-semibold py-2 px-5 rounded-md w-fit">
            Contact Us
          </button>
        </div>
      </div>
    </div> */}

<div className="text-center mt-10 px-4">
  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
    CONTACT WITH OUR AGENTS
  </h2>
  <p className="text-gray-600 mt-2 text-sm md:text-base max-w-xl mx-auto">
    Your perfect home is closer than you think. Connect with our expert agent today and
    start your journey with confidence and ease.
  </p>
</div>

<div className="flex justify-center items-center py-10 bg-white px-4">
  <div className="w-full max-w-md md:max-w-6xl bg-white shadow-xl overflow-hidden rounded-3xl flex flex-col md:flex-row">
    
    {/* Image */}
    <div className="w-full md:w-1/3">
      <img
        src={agentImage}
        alt="Sales Agent"
        className="w-full h-auto object-cover md:h-full"
      />
    </div>

    {/* Text Block */}
    <div className="w-full md:w-2/3 bg-[#035468] p-6 md:p-10 text-white flex flex-col justify-center">
      <h2 className="text-xl md:text-3xl font-bold mb-3">Let's Connect</h2>
      <p className="text-sm md:text-lg leading-relaxed mb-5">
        Reach out to us via phone for personalized guidance and assistance
        in navigating the complexities of the real estate market. Let our
        experienced team help you achieve your property goals. Call us now!
      </p>
      <button className="bg-[#FF6C52] hover:bg-[#e55a44] text-white font-semibold py-2 px-5 rounded-md w-fit">
        Contact Us
      </button>
    </div>
  </div>
</div>




<div className="bg-white py-12 px-4 sm:px-8 lg:px-16">
      <h2 className="text-3xl font-bold text-center text-gray-900">
        Everything you Need at One Place
      </h2>
      <p className="text-lg text-center text-gray-700 font-semibold mt-2 mb-10">
        In-House Services
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 border rounded-lg p-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center px-2 py-4 border hover:shadow-md rounded-md transition"
          >
            <img
              src={service.icon}
              alt={service.title}
              className="w-16 h-16 object-contain mb-3"
            />
            <p className="text-sm font-medium text-gray-800">{service.title}</p>
          </div>
        ))}
      </div>
    </div>






    <section className="py-12 px-4 max-w-screen-xl mx-auto">
      <h2 className="text-3xl font-bold text-center">Earthcon properties VIDEOS</h2>
      <p className="text-center text-gray-600 mt-2 mb-8 max-w-xl mx-auto">
        Enjoy high-quality videos and stay informed about all the latest news, updates, features, and more on our YouTube page!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left Large Video */}
        <div className="md:col-span-2">
          <div className="w-full aspect-video rounded-2xl overflow-hidden">
            <iframe
              src={videos[0].url}
              title="Large Video"
              className="w-full h-full"
              allowFullScreen
            />
          </div>
        </div>

        {/* Right Top Medium + Bottom Two Small */}
        <div className="flex flex-col gap-4">
          {/* Top Medium */}
          <div className="w-full aspect-video rounded-2xl overflow-hidden">
            <iframe
              src={videos[1].url}
              title="Medium Video"
              className="w-full h-full"
              allowFullScreen
            />
          </div>

          {/* Bottom Two Small */}
          <div className="grid grid-cols-2 gap-4">
            {videos.slice(2).map((video, index) => (
              <div key={index} className="aspect-video rounded-2xl overflow-hidden">
                <iframe
                  src={video.url}
                  title={`Small Video ${index}`}
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

      {/* <div className="bg-white">
        <div className="bg-white py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-black">CONTACT WITH OUR AGENTS</h2>
            <div className="border-brown-500 mx-auto my-4 w-16 border-t-4"></div>
          </div>

          <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 md:flex-row">
            <div className="w-full md:w-1/2">
              <img
                src={contactside}
                alt="Real Estate Agent"
                className="h-auto w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold text-black">CONTACT SALES AGENTS</h3>
              <p className="mt-4 italic text-gray-600">
                "Your perfect home is closer than you think. Connect with our expert agent today and
                start your journey with confidence and ease."
              </p>
              <Link to="/contact">
                <button className="mt-6 rounded bg-black px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-gray-800">
                  CONTACT NOW
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div> */}
      <div className="bg-white">
        {/* Other Sections */}

        {/* Our Associations Section */}
        <div className="bg-white py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-black">OUR ASSOCIATIONS</h2>
            <div className="border-brown-500 mx-auto my-4 w-16 border-t-4"></div>
          </div>
          <div className="mx-auto max-w-7xl px-6">
            <Slider {...sliderSettingsASSOCIATIONS}>
              {associations.map((assoc) => (
                <div key={assoc.id} className="p-4">
                  <div className="overflow-hidden rounded-lg bg-white text-center shadow-lg">
                    <img src={assoc.imageUrl} alt={assoc.name} className="mx-auto h-40" />
                    <p className="mt-2 text-lg font-semibold text-gray-900">{assoc.name}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
