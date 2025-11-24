import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-[#050814]">
      <div className="max-w-6xl mx-auto px-4 py-6 md:py-8 text-sm text-gray-400 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="space-y-1">
          <div className="text-xs text-gray-500">
            © 2025 <span className="text-gray-300">JBAlive</span>. All rights reserved.
          </div>
          <div className="text-xs text-gray-500">
            Powered by <a href="https://jba-consults.com" className="text-indigo-400 hover:text-indigo-300">JBA Consults</a>.
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs">
          <Link to="/features" className="hover:text-indigo-300">Features</Link>
          <Link to="/pricing" className="hover:text-indigo-300">Pricing</Link>
          <Link to="/about" className="hover:text-indigo-300">About</Link>
          <Link to="/contact" className="hover:text-indigo-300">Contact</Link>
          <a
            href="https://jba-consults.com"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-indigo-300 font-medium"
          >
            JBA Consults
          </a>
        </div>
      </div>
    </footer>
  );
}
