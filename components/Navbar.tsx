"use client";

import { useState } from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navigation = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/muasyamuthengi-gif",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/",
      icon: Linkedin,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/",
      icon: Twitter,
    },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-800 bg-black/80 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left — Brand */}
        <Link href="/" className="flex flex-col">
          <span className="text-xl font-bold">Bonface</span>
          <span className="text-xs text-teal-400">Developer</span>
        </Link>

        {/* Center — Desktop Nav */}
        <div className="hidden md:flex gap-8 text-gray-400">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-white transition"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right — Desktop Social + CTA */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          <a
            href="#contact"
            className="px-4 py-2 rounded-md bg-teal-400 text-black font-medium hover:bg-teal-300 transition"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-gray-800 bg-black px-6 py-6 space-y-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block text-gray-400 hover:text-white"
            >
              {item.name}
            </Link>
          ))}

          <div className="flex gap-6 pt-4 border-t border-gray-800">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block text-center mt-4 px-4 py-3 rounded-md bg-teal-400 text-black font-medium"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}
