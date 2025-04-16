import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-900 py-12 h-50%">
      <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-4 sm:px-6 lg:px-8">
        <div>
          <h1 className="text-white text-lg mb-4 font-semibold tracking-wide">
            About Us
          </h1>
          <p className="text-base text-white mb-4">
            Music School is a premier institution dedicated to teaching the art
            and science of music. We nurture talent from the ground up,
            fostering a vibrant community of musicians.
          </p>
        </div>
        <div>
          <h1 className="text-white text-lg mb-4 font-semibold tracking-wide">
            Quick Links
          </h1>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-white hover:text-gray-400">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-white hover:text-gray-400">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-white hover:text-gray-400">
                Courses
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-white hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-white text-lg mb-4 font-semibold tracking-wide">
            Follow Us
          </h1>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-white hover:text-gray-400">
                Instagram
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-white hover:text-gray-400">
                Facebook
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-white hover:text-gray-400">
                Youtube
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-white hover:text-gray-400">
                TikTok
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-white text-lg mb-4 font-semibold tracking-wide">
            Contact Us
          </h1>
          <ul>
            <li className="mb-2 text-white">Punjab, Pakistan</li>
            <li className="mb-2 text-white">Faisalabad 38000</li>
            <li className="mb-2 text-white">Email: info@musicschool.com</li>
            <li className="mb-2 text-white">Phone: +92 322-603-903</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-8">
        <span className="text-white text-sm">
          © 2023 Music School. All rights reserved.
        </span>
        <p className="text-white text-sm ml-2">Designed By M.Abdullah Tanveer</p>
      </div>
    </footer>
  );
};

export default Footer;
