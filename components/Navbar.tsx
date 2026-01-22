"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Twitter,
  Menu,
  X,
} from "lucide-react";

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
    icon: Github,
    href: "https://github.com/...",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/...",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/...",
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Left: Brand */}
        <Link href="/" className="flex flex-col">
          <span className="text-xl font-bold">Bonface</span>
          <span className="text-xs text-teal-400">Developer</span>
        </Link>

        {/* Center: Desktop Navigation */}
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

        {/* Right: Desktop Actions */}
        <div className="hidden md:flex items-center gap-6">
          {/* Social Icons */}
          <div className="flex gap-3">
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
                  <span className="sr-only">{social.name}</span>
                </a>
              );
            })}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="px-4 py-2 rounded-md bg-teal-400 text-black font-semibold hover:bg-teal-300 transition"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-400 hover:text-white transition"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          <span className="sr-only">Toggle menu</span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-black px-6 py-6 space-y-6">
          {/* Mobile Navigation */}
          <div className="flex flex-col gap-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-400 hover:text-white transition"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Social Icons */}
          <div className="flex gap-4 pt-4 border-t border-white/10">
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

          {/* Mobile CTA */}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-center px-4 py-2 rounded-md bg-teal-400 text-black font-semibold hover:bg-teal-300 transition"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}
