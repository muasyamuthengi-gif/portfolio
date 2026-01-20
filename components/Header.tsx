"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <nav className="h-16 flex items-center justify-between">
          
          {/* LEFT — LOGO */}
          <Link href="/" className="flex items-baseline gap-2">
            <span className="text-white font-semibold text-lg">
              Bonface
            </span>
            <span className="text-teal-400 text-sm">
              Developer
            </span>
          </Link>

          {/* CENTER — NAV LINKS */}
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#about" className="hover:text-white transition">
              About
            </a>
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
            <a href="#services" className="hover:text-white transition">
              Services
            </a>
            <a href="#testimonials" className="hover:text-white transition">
              Testimonials
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </div>

          {/* RIGHT — SOCIALS + CTA */}
          <div className="flex items-center gap-5 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition"
            >
              Twitter
            </a>
            <a
              href="#contact"
              className="ml-2 px-4 py-2 rounded-md bg-teal-400 text-black font-medium hover:bg-teal-300 transition"
            >
              Hire Me
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
