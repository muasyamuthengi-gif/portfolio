"use client";

import { useState } from "react";
import { motion } from "framer-motion";

/* ================= ANIMATIONS ================= */

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

/* ================= PAGE ================= */

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
      <section className="min-h-screen pt-40 px-6">
        <motion.div
          className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-20"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.p
              variants={itemVariants}
              className="text-xs tracking-[0.3em] text-teal-400 mb-6"
            >
              FULL‑STACK DEVELOPER
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-extrabold leading-[1.05]"
            >
              Hi, I&apos;m <span className="text-teal-400">Bonface</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-8 text-lg text-gray-400 max-w-lg"
            >
              I build accessible, pixel‑perfect digital experiences using React,
              Next.js, and modern web technologies.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-10 flex items-center gap-6">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-7 py-3 rounded-md bg-teal-400 text-black font-semibold"
              >
                Let&apos;s Work Together →
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                className="px-7 py-3 rounded-md border border-gray-700"
              >
                Download CV
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-14 flex gap-14">
              {[
                ["2+", "Years Experience"],
                ["50+", "Projects"],
                ["30+", "Clients"],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="text-3xl font-bold">{value}</p>
                  <p className="text-sm text-gray-500 mt-1">{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
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
        </motion.div>
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
          <div className="max-w-2xl mb-20">
            <p className="text-sm uppercase tracking-widest text-teal-400 mb-4">
              About Me
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Crafting digital experiences with precision
            </h2>
            <p className="text-gray-400">
              I build clean, scalable, and user-focused applications with strong
              performance and thoughtful design systems.
            </p>
          </div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {["Clean Code", "Design Systems", "Performance", "Collaboration"].map(
              (item) => (
                <motion.div
                  key={item}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  className="p-6 rounded-xl border border-gray-800"
                >
                  <div className="w-10 h-10 mb-4 rounded-md bg-teal-400/10" />
                  <h3 className="font-semibold mb-2">{item}</h3>
                  <p className="text-sm text-gray-400">
                    High-quality, maintainable solutions.
                  </p>
                </motion.div>
              )
            )}
          </motion.div>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["E-Commerce Platform", "SaaS Dashboard", "Portfolio Website"].map(
              (title) => (
                <motion.div
                  key={title}
                  whileHover={{ y: -6 }}
                  className="rounded-xl border border-gray-800 overflow-hidden"
                >
                  <div className="aspect-video bg-gray-900" />
                  <div className="p-6">
                    <h3 className="font-semibold mb-2">{title}</h3>
                    <p className="text-sm text-gray-400">
                      High-performance web application.
                    </p>
                  </div>
                </motion.div>
              )
            )}
          </div>
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

          <motion.div
            className="p-8 rounded-xl border border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {isSubmitted ? (
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold mb-3">Message Sent!</h3>
                <p className="text-gray-400">I&apos;ll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input required placeholder="Name" className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md" />
                <input required type="email" placeholder="Email" className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md" />
                <textarea required rows={5} placeholder="Message" className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md" />
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-md bg-teal-400 text-black font-medium"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
