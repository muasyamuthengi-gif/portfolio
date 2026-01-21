"use client";

import { useState } from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full py-6">
      <div className="flex items-center justify-between">
        {/* Left: Brand + Social Icons */}
        <div className="flex items-center gap-6">
          <h1 className="text-xl font-bold tracking-wide">Bonface</h1>

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-4 text-gray-400">
            <a
              href="https://github.com/muasyamuthengi-gif"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 transition"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-gray-400">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/about" className="hover:text-white transition">About</Link>
          <Link href="/projects" className="hover:text-white transition">Projects</Link>
          <Link href="/services" className="hover:text-white transition">Services</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-6 flex flex-col gap-6 text-gray-400">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>

          {/* Mobile Social Icons */}
          <div className="flex gap-6 pt-4">
            <a href="https://github.com/muasyamuthengi-gif">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://twitter.com">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
