import React from 'react';
import { AiOutlineMedicineBox } from 'react-icons/ai';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { GoArrowUpRight } from 'react-icons/go';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-around items-center">
          <div>
           
            <div className="text-yellow-400 text-3xl font-bold flex mb-4">D<span className="border text-white border-gray-300 rounded-3xl p-1 text-lg bg-yellow-400"> <AiOutlineMedicineBox /></span>C+</div>
            <p className="mb-1">123 Main Street Anytown, USA</p>
            <p className="mb-4">Postal Code: 12345</p>
            <p className="mb-1">Support: support@oyolloo.com</p>
            <p>(Available : 10:00am to 07:00pm)</p>
          </div>
          <div className="flex space-x-8">
            <ul>
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Success Page</a></li>
              <li><a href="#" className="hover:underline">Terms And Condition</a></li>
            </ul>
            <ul>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Scheduling</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Patient Portal</a></li>
            </ul>
            <div>
              <p className="mb-4">Follow us</p>
              <ul className="flex space-x-4">
                <li><a href="#" className="hover:underline"><FaFacebook size={24} /></a></li>
                <li><a href="#" className="hover:underline"><FaInstagram size={24} /></a></li>
                <li><a href="#" className="hover:underline"><FaLinkedin size={24} /></a></li>
                <li><a href="#" className="hover:underline"><FaYoutube size={24} /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center mt-6">
          <p>©Docplus 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
