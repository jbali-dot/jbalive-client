import React from "react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Header = () => {
  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500 text-xs font-bold">
            JB
          </div>
          <span className="text-lg font-semibold tracking-tight">
            JBAlive
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-5 text-sm">
          {/* Public links always visible */}
          <Link to="/" className="text-slate-300 hover:text-indigo-300">
            Home
          </Link>
          <Link
            to="/features"
            className="text-slate-300 hover:text-indigo-300"
          >
            Features
          </Link>
          <Link
            to="/pricing"
            className="text-slate-300 hover:text-indigo-300"
          >
            Pricing
          </Link>
          <Link
            to="/about"
            className="text-slate-300 hover:text-indigo-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-slate-300 hover:text-indigo-300"
          >
            Contact
          </Link>

          {/* When signed OUT: show Sign in / Sign up */}
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

          {/* When signed IN: show Dashboard + user menu */}
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

