import React from "react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import logo from "../assets/jbalive-logo1.png"; // <-- your new logo image

const Header = () => {
  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        
        {/* Logo + Homepage Link */}
        <Link to="/" className="flex items-center gap-3">
          <img 
            src={logo} 
            alt="JBAlive Logo" 
            className="h-10 w-auto md:h-12"  // <-- bigger logo
          />
          <span className="text-lg font-semibold tracking-tight">
            JBAlive
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-5 text-sm">
          <Link to="/" className="text-slate-300 hover:text-indigo-300">
            Home
          </Link>
          <Link to="/features" className="text-slate-300 hover:text-indigo-300">
            Features
          </Link>
          <Link to="/pricing" className="text-slate-300 hover:text-indigo-300">
            Pricing
          </Link>
          <Link to="/about" className="text-slate-300 hover:text-indigo-300">
            About
          </Link>
          <Link to="/contact" className="text-slate-300 hover:text-indigo-300">
            Contact
          </Link>

          {/* Signed Out */}
          <SignedOut>
            <Link
              to="/sign-in"
              className="text-slate-300 hover:text-indigo-300"
            >
              Sign in
            </Link>
            <Link
              to="/sign-up"
              className="rounded-full border border-indigo-500 px-3 py-1 text-xs text-indigo-300 hover:bg-indigo-500/10"
            >
              Sign up
            </Link>
          </SignedOut>

          {/* Signed In */}
          <SignedIn>
            <Link
              to="/dashboard"
              className="text-slate-300 hover:text-indigo-300"
            >
              Dashboard
            </Link>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </nav>
      </div>
    </header>
  );
};

export default Header;
