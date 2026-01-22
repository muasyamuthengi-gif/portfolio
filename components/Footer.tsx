"use client";

import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 px-6 py-12">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3 items-center">
        
        {/* LEFT */}
        <div>
          <p className="text-xl font-bold">
            Bonface<span className="text-teal-400">.</span>
          </p>
          <p className="text-sm text-gray-400 mt-2 max-w-sm">
            Building modern, scalable, and user‑focused web experiences with
            performance and precision.
          </p>
        </div>

        {/* CENTER */}
        <div className="flex justify-center">
          <ul className="flex gap-6 text-sm text-gray-400">
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Projects", "#projects"],
              ["Services", "#services"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  className="hover:text-teal-400 transition"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT — SOCIAL ICONS */}
        <div className="flex md:justify-end gap-4 text-gray-400">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="mt-10 border-t border-gray-800 pt-6 text-sm text-gray-500 flex justify-between max-w-7xl mx-auto">
        <p>© {new Date().getFullYear()} Bonface. All rights reserved.</p>
        <p>
          Built with <span className="text-teal-400">Next.js</span> &{" "}
          <span className="text-teal-400">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
