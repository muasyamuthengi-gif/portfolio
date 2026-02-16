"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  Code2,
  Smartphone,
  Palette,
  Gauge,
  Database,
  Cloud,
} from "lucide-react";
import {
  Code,
  Paintbrush,
  Zap,
  Users,
} from "lucide-react";

/* ================= PROJECTS ================= */

const projects = [
  {
    title: "Blog Website",
    description:
      "A modern blog platform with clean UI, responsive layout, and optimized performance.",
    image: "/projects/blog.png",
  },
  {
    title: "Trading Journal",
    description:
      "A trading journal application for tracking trades, analyzing performance, and improving trading discipline.",
    image: "/projects/portfolio.png",
  },
  {
    title: "UI Showcase",
    description:
      "A polished demo project showcasing modern UI/UX patterns, smooth animations, and responsive layouts built with React and Tailwind CSS.",
    image: "/projects/demo.png",
  },
];

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

  /* ===== UPDATED CONTACT HANDLER ===== */

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    setIsSubmitting(false);

    if (res.ok) {
      setIsSubmitted(true);
      form.reset();
    } else {
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <main className="bg-black text-white pt-24">

      {/* ================= CONTACT ================= */}

      <section id="contact" className="px-6 py-16 bg-zinc-950">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="max-w-2xl mb-20">
            <p className="text-sm uppercase tracking-widest text-teal-400 mb-4">
              Get In Touch
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let&apos;s Work Together
            </h2>
            <p className="text-gray-400">
              Have a project in mind or just want to say hi? I&apos;d love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">

            {/* LEFT SIDE */}
            <div className="space-y-8">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-lg bg-teal-400/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-teal-400" />
                </div>
                <p>muasyamuthengi@gmail.com</p>
              </div>

              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-lg bg-teal-400/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-teal-400" />
                </div>
                <p>+254715345572</p>
              </div>

              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-lg bg-teal-400/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-teal-400" />
                </div>
                <p>Nairobi, Kenya</p>
              </div>
            </div>

            {/* RIGHT SIDE - FORM */}
            <motion.div
              className="p-8 rounded-xl border border-gray-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {isSubmitted ? (
                <p className="text-center text-teal-400 font-semibold">
                  Message sent successfully!
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  <input
                    name="name"
                    required
                    placeholder="Name"
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md"
                  />

                  <input
                    name="email"
                    required
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md"
                  />

                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Message"
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-md"
                  />

                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    disabled={isSubmitting}
                    className="w-full py-3 bg-teal-400 text-black rounded-md font-semibold"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </motion.button>

                </form>
              )}
            </motion.div>

          </div>
        </div>
      </section>

    </main>
  );
}
