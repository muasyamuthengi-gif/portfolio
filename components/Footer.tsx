"use client";

import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 pt-16 pb-8">
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-3">
        
        {/* LEFT */}
        <div>
          <p className="text-xl font-semibold">
            Bonface<span className="text-teal-400">.</span>
          </p>
          <p className="mt-4 text-sm text-gray-400 max-w-sm">
            Building accessible, pixel‑perfect digital experiences for the web.
          </p>
        </div>

        {/* CENTER */}
        <div>
          <p className="text-sm font-semibold tracking-widest text-white mb-4">
            QUICK LINKS
          </p>
          <ul className="space-y-3 text-sm text-gray-400">
            {["About", "Projects", "Services", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-teal-400 transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <div>
          <p className="text-sm font-semibold tracking-widest text-white mb-4">
            CONNECT
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mb-4">
            {[
              { icon: Github, href: "https://github.com/" },
              { icon: Linkedin, href: "https://linkedin.com/" },
              { icon: Twitter, href: "https://twitter.com/" },
              { icon: Mail, href: "mailto:hello@example.com" },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-md
                           bg-white/5 border border-white/10
                           text-gray-400 hover:text-white hover:border-teal-400/40
                           transition"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Email */}
          <p className="text-sm text-gray-400">
            hello@example.com
          </p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="mt-16 pt-6 border-t border-white/10 text-sm text-gray-500 flex flex-col md:flex-row justify-between gap-4 max-w-7xl mx-auto">
        <p>© {new Date().getFullYear()} Bonface. All rights reserved.</p>
        <p>
          Built with{" "}
          <span className="text-teal-400">Next.js</span> &{" "}
          <span className="text-teal-400">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
