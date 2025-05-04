import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <nav className="top-0 absolute bg-black z-10 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className="text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            href="/"
          >
            <Link to="/">THE GYM</Link>
          </a>
          <button
            className="cursor-pointer text-2xl text-white leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={toggleNavbar}
          >
            <i className="text-orange-500 fas fa-bars"></i>
          </button>
        </div>

        <div
          className={`lg:flex flex-grow items-center bg-black lg:bg-transparent lg:shadow-none ${
            navbarOpen ? 'flex' : 'hidden'
          }`}
          id="collapse"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="flex items-center">
              <a
                className="lg:text-white lg:hover:text-gray-300 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                href="/"
              >
                <Link to="/">Home</Link>
              </a>
            </li>
            <li className="flex items-center">
              <a
                className="lg:text-white lg:hover:text-gray-300 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                href="/trainers"
              >
                <Link to="/trainers">Trainers</Link>
              </a>
            </li>
            <li className="flex items-center">
              <a
                className="lg:text-white lg:hover:text-gray-300 text-white px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                href="/contact"
              >
                <Link to="/contact">Contact</Link>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
