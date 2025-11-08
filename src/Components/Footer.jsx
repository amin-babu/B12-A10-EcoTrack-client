import React from 'react';
import logo from '../assets/logo-ecoTract.png';
import { Link } from 'react-router';
import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-base-100 w-11/12 rounded-2xl shadow-md mx-auto text-base-content px-6 py-8 border border-base-300">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">

        <ul className="flex gap-4 text-sm font-medium">
          <li>
            <a href="/about" className="hover:text-primary transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </li>
        </ul>

        <Link to={'/'}><img className='h-10' src={logo} alt="EcoTrack Logo" /></Link>

        <div className="flex gap-3 text-xl">
          <a href="#" className="hover:text-primary transition-colors">
            <FaXTwitter />
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            <FaInstagram />
          </a>
        </div>
      </div>


      <div className="max-w-6xl mx-auto mt-6 border-t border-base-300 pt-4 text-center text-sm text-gray-600">
        <p>© 2025 EcoTrack. All rights reserved.</p>
        <p className="mt-1">
          ♿ Accessibility Friendly | We care about your privacy and environment ♻️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
