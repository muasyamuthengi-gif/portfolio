"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((res) => setTimeout(res, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <main className="bg-black text-white pt-24">
      {/* ================= HERO ================= */}
      <section id="home" className="min-h-screen pt-40 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-xs tracking-[0.3em] text-teal-400 mb-6">
              FULL‑STACK DEVELOPER
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05]">
              Hi, I&apos;m <span className="text-teal-400">Bonface</span>
            </h1>
            <p className="mt-8 text-lg text-gray-400 max-w-lg">
              I build accessible, pixel‑perfect digital experiences using React,
              Next.js, and modern web technologies.
            </p>
            <div className="mt-10 flex gap-6">
              <a
                href="#contact"
                className="px-7 py-3 rounded-md bg-teal-400 text-black font-semibold hover:bg-teal-300 transition"
              >
                Let&apos;s Work Together →
              </a>
              <a
                href="/resume.pdf"
                className="px-7 py-3 rounded-md border border-gray-700 hover:bg-gray-900 transition"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-[320px] h-[320px]">
              <div className="absolute inset-0 rounded-full border border-teal-400/40" />
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-full h-full rounded-full object-cover relative"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <motion.section
        id="about"
        className="px-6 py-32"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-gray-400 max-w-2xl">
            I build clean, scalable, and user‑focused applications with strong
            performance and thoughtful design systems.
          </p>
        </div>
      </motion.section>

      {/* ================= PROJECTS ================= */}
      <motion.section
        id="projects"
        className="px-6 py-32"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Featured Projects
          </h2>
        </div>
      </motion.section>

      {/* ================= CONTACT ================= */}
      <motion.section
        id="contact"
        className="px-6 py-32"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <p className="mb-2">muasyamuthengi@gmail.com</p>
            <p className="mb-2">+254715345572</p>
            <p>Nairobi, Kenya</p>
          </div>

          <div className="p-8 rounded-xl border border-gray-800">
            {isSubmitted ? (
              <p className="text-center text-teal-400 font-semibold">
                Message sent successfully!
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  required
                  placeholder="Name"
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md"
                />
                <input
                  required
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md"
                />
                <textarea
                  required
                  rows={5}
                  placeholder="Message"
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md"
                />
                <button
                  disabled={isSubmitting}
                  className="w-full py-3 bg-teal-400 text-black rounded-md font-semibold"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </motion.section>

      {/* ================= FOOTER (YOUR EXACT ONE) ================= */}
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
                  <a href={href} className="hover:text-teal-400 transition">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div className="text-sm text-gray-400 md:text-right">
            <p>© {new Date().getFullYear()} Bonface.</p>
            <p className="mt-1">All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
