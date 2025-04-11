/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
// import logo from "../assets/image/logo.png";
import logo from "../../assets/images/logo.png";



export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Home className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">ThinkBuy Properties</span>
            </Link>
          </div> */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 ">
              <img
                src={logo} // Replace with your actual logo path
                alt="ThinkBuy Logo"
                className="h-20 w-25"
              />
            </Link>
          </div>
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link to="/properties" className="text-gray-600 hover:text-blue-600">Properties</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
            {/* <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center">
              add property
            </button> */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-4">
          <Link to="/" className="block text-gray-600 hover:text-blue-600" onClick={toggleMenu}>Home</Link>
          <Link to="/properties" className="block text-gray-600 hover:text-blue-600" onClick={toggleMenu}>Properties</Link>
          <Link to="/about" className="block text-gray-600 hover:text-blue-600" onClick={toggleMenu}>About</Link>
          <Link to="/contact" className="block text-gray-600 hover:text-blue-600" onClick={toggleMenu}>Contact</Link>
          <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center">
            add property
          </button>
        </div>
      )}
    </nav>
  );
}
