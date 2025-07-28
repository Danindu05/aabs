import React, { useEffect } from 'react';

const Navbar = () => {
  useEffect(() => {
    const btn = document.getElementById('hamburgerBtn');
    const menu = document.getElementById('mobileMenu');
    btn?.addEventListener('click', () => {
      menu?.classList.toggle('hidden');
    });
  }, []);

  return (
    <nav className="bg-gradient-to-r from-green-100 via-emerald-100 to-green-50 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/favicon.svg" alt="CABS Logo" className="h-8 w-8" />
            <span className="text-xl font-bold text-emerald-800">CABS Ayurveda</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 text-emerald-700 font-medium">
            <a href="/" className="hover:text-emerald-900 transition">Home</a>
            <a href="/doctors" className="hover:text-emerald-900 transition">Doctors</a>
            <a href="/appointment" className="hover:text-emerald-900 transition">Book</a>
            <a href="/about" className="hover:text-emerald-900 transition">About</a>
            <a href="/contact" className="hover:text-emerald-900 transition">Contact</a>
          </div>

          {/* Actions */}
          <div className="hidden md:flex space-x-4">
            <a href="/login" className="px-4 py-1 text-sm rounded-md bg-white text-emerald-800 border border-emerald-300 hover:bg-emerald-100 transition">Login</a>
            <a href="/register" className="px-4 py-1 text-sm rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition">Register</a>
          </div>

          {/* Hamburger */}
          <div className="md:hidden">
            <button id="hamburgerBtn" className="text-emerald-800 focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div id="mobileMenu" className="hidden md:hidden px-4 pb-4 space-y-2 text-emerald-700 font-medium">
        <a href="/" className="block hover:text-emerald-900">Home</a>
        <a href="/doctors" className="block hover:text-emerald-900">Doctors</a>
        <a href="/appointment" className="block hover:text-emerald-900">Book</a>
        <a href="/about" className="block hover:text-emerald-900">About</a>
        <a href="/contact" className="block hover:text-emerald-900">Contact</a>
        <div className="pt-2 border-t border-emerald-200">
          <a href="/login" className="block hover:text-emerald-900">Login</a>
          <a href="/register" className="block hover:text-emerald-900">Register</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
