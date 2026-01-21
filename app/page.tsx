"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
      <section id="home" className="min-h-screen pt-40 px-6">
        <motion.div
          className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
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

            <motion.div variants={itemVariants} className="mt-10 flex gap-6">
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
  className="px-6 py-16 bg-zinc-950"
  variants={sectionVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <div className="max-w-7xl mx-auto">
    {/* Header */}
    <motion.div
      className="max-w-2xl mb-20"
      variants={containerVariants}
    >
      <motion.p
        variants={itemVariants}
        className="text-sm uppercase tracking-widest text-teal-400 mb-4"
      >
        About Me
      </motion.p>

      <motion.h2
        variants={itemVariants}
        className="text-3xl md:text-4xl font-bold mb-6"
      >
        Crafting digital experiences with precision
      </motion.h2>

      <motion.p
        variants={itemVariants}
        className="text-gray-400"
      >
        I build clean, scalable, and user-focused applications with strong
        performance and thoughtful design systems.
      </motion.p>
    </motion.div>
{/* Highlights */}
<motion.div
  className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {[
    {
      title: "Clean Code",
      description: "Readable, scalable, and maintainable codebases.",
    },
    {
      title: "Design Systems",
      description: "Consistent UI patterns and reusable components.",
    },
    {
      title: "Performance",
      description: "Fast, optimized experiences across devices.",
    },
    {
      title: "Collaboration",
      description: "Clear communication and teamwork.",
    },
  ].map(({ title, description }) => (
    <motion.div
      key={title}
      variants={itemVariants}
      whileHover={{ scale: 1.05, y: -6 }}
      className="p-6 rounded-xl border border-gray-800 hover:border-teal-400/60 transition"
    >
      <div className="w-10 h-10 mb-4 rounded-md bg-teal-400/10" />
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </motion.div>
  ))}
</motion.div>

    {/* Skills */}
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h3
        variants={itemVariants}
        className="text-xl font-semibold mb-8"
      >
        Technical Skills
      </motion.h3>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Frontend",
            skills: ["React", "Next.js", "TypeScript", "Tailwind", "Vue"],
          },
          {
            title: "Backend",
            skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"],
          },
          {
            title: "Tools",
            skills: ["Git", "Docker", "AWS", "Figma", "VS Code"],
          },
        ].map((group) => (
          <motion.div
            key={group.title}
            variants={itemVariants}
          >
            <p className="text-sm uppercase tracking-widest text-teal-400 mb-4">
              {group.title}
            </p>

            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.08 }}
                  className="px-3 py-1 text-sm rounded-md border border-gray-700 hover:border-teal-400/60 transition"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
</motion.section>
       
     {/* ================= PROJECTS ================= */}
      <motion.section
        id="projects"
        className="px-6 py-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Featured Projects
          </h2>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {["E‑Commerce Platform", "SaaS Dashboard", "Portfolio Website"].map(
              (title) => (
                <motion.div
                  key={title}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  className="rounded-xl border border-gray-800 overflow-hidden"
                >
                  <div className="aspect-video bg-gray-900" />
                  <div className="p-6">
                    <h3 className="font-semibold mb-2">{title}</h3>
                    <p className="text-sm text-gray-400">
                      High‑performance web application.
                    </p>
                  </div>
                </motion.div>
              )
            )}
          </motion.div>
        </div>
      </motion.section>
{/* ================= SERVICES ================= */}
<motion.section
  id="services"
  className="px-6 py-16 bg-zinc-950"
  variants={sectionVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
      What I Can Do For You
    </h2>

    <motion.div
      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Web Development */}
      <motion.div
        variants={itemVariants}
        whileHover={{ y: -6 }}
        className="p-6 rounded-xl border border-gray-800"
      >
        <div className="w-10 h-10 mb-4 rounded-md bg-teal-400/10 flex items-center justify-center">
          <Code2 className="text-teal-400" size={20} />
        </div>
        <h3 className="font-semibold text-xl mb-2">Web Development</h3>
        <p className="text-sm text-gray-400 mb-4">
          Building responsive, performant websites and web applications using
          modern frameworks and best practices.
        </p>
        <ul className="text-sm text-gray-400 space-y-2">
          <li>• Custom Web Apps</li>
          <li>• E-commerce Solutions</li>
          <li>• CMS Integration</li>
        </ul>
      </motion.div>

      {/* Mobile-First Design */}
      <motion.div
        variants={itemVariants}
        whileHover={{ y: -6 }}
        className="p-6 rounded-xl border border-gray-800"
      >
        <div className="w-10 h-10 mb-4 rounded-md bg-teal-400/10 flex items-center justify-center">
          <Smartphone className="text-teal-400" size={20} />
        </div>
        <h3 className="font-semibold text-xl mb-2">Mobile-First Design</h3>
        <p className="text-sm text-gray-400 mb-4">
          Creating responsive designs that look and work beautifully on all
          devices, from mobile to desktop.
        </p>
        <ul className="text-sm text-gray-400 space-y-2">
          <li>• Responsive Layouts</li>
          <li>• Progressive Web Apps</li>
          <li>• Touch-Friendly UI</li>
        </ul>
      </motion.div>

      {/* UI/UX Design */}
      <motion.div
        variants={itemVariants}
        whileHover={{ y: -6 }}
        className="p-6 rounded-xl border border-gray-800"
      >
        <div className="w-10 h-10 mb-4 rounded-md bg-teal-400/10 flex items-center justify-center">
          <Palette className="text-teal-400" size={20} />
        </div>
        <h3 className="font-semibold text-xl mb-2">UI/UX Design</h3>
        <p className="text-sm text-gray-400 mb-4">
          Designing intuitive user interfaces and experiences that delight users
          and drive engagement.
        </p>
        <ul className="text-sm text-gray-400 space-y-2">
          <li>• User Research</li>
          <li>• Wireframing</li>
          <li>• Prototyping</li>
        </ul>
      </motion.div>

      {/* Performance Optimization */}
      <motion.div
        variants={itemVariants}
        whileHover={{ y: -6 }}
        className="p-6 rounded-xl border border-gray-800"
      >
        <div className="w-10 h-10 mb-4 rounded-md bg-teal-400/10 flex items-center justify-center">
          <Gauge className="text-teal-400" size={20} />
        </div>
        <h3 className="font-semibold text-xl mb-2">
          Performance Optimization
        </h3>
        <p className="text-sm text-gray-400 mb-4">
          Improving website speed, Core Web Vitals, and overall performance for
          better user experience and SEO.
        </p>
        <ul className="text-sm text-gray-400 space-y-2">
          <li>• Speed Audits</li>
          <li>• Code Optimization</li>
          <li>• CDN Setup</li>
        </ul>
      </motion.div>

      {/* Backend Development */}
      <motion.div
        variants={itemVariants}
        whileHover={{ y: -6 }}
        className="p-6 rounded-xl border border-gray-800"
      >
        <div className="w-10 h-10 mb-4 rounded-md bg-teal-400/10 flex items-center justify-center">
          <Database className="text-teal-400" size={20} />
        </div>
        <h3 className="font-semibold text-xl mb-2">Backend Development</h3>
        <p className="text-sm text-gray-400 mb-4">
          Building robust APIs, database architectures, and server-side logic to
          power your applications.
        </p>
        <ul className="text-sm text-gray-400 space-y-2">
          <li>• REST & GraphQL APIs</li>
          <li>• Database Design</li>
          <li>• Authentication</li>
        </ul>
      </motion.div>

      {/* Cloud & DevOps */}
      <motion.div
        variants={itemVariants}
        whileHover={{ y: -6 }}
        className="p-6 rounded-xl border border-gray-800"
      >
        <div className="w-10 h-10 mb-4 rounded-md bg-teal-400/10 flex items-center justify-center">
          <Cloud className="text-teal-400" size={20} />
        </div>
        <h3 className="font-semibold text-xl mb-2">Cloud & DevOps</h3>
        <p className="text-sm text-gray-400 mb-4">
          Deploying and managing applications on cloud platforms with CI/CD
          pipelines and monitoring.
        </p>
        <ul className="text-sm text-gray-400 space-y-2">
          <li>• AWS / Vercel Hosting</li>
          <li>• CI/CD Pipelines</li>
          <li>• Monitoring</li>
        </ul>
      </motion.div>
    </motion.div>
  </div>
</motion.section>

      {/* ================= TESTIMONIALS ================= */}
      <motion.section
        id="testimonials"
        className="border-t border-gray-900 px-6 py-20 text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
        <p className="text-gray-400">Coming soon.</p>
      </motion.section>     
      
{/* ================= CONTACT ================= */}
<section id="contact" className="px-6 py-16 bg-zinc-950">
  <div className="max-w-7xl mx-auto">
    {/* Header (matches ABOUT structure) */}
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

    {/* Content */}
    <div className="grid lg:grid-cols-2 gap-12">
      {/* Left */}
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

        <div className="p-6 rounded-xl border border-gray-800">
          <div className="flex items-center gap-3 mb-2">
            <span className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />
            <p>Available for new projects</p>
          </div>
          <p className="text-sm text-gray-400">
            Response time: 24–48 hours
          </p>
        </div>
      </div>

      {/* Right — motion stays exactly the same */}
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

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-gray-800 px-6 py-16 bg-zinc-950">
        <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-3">
          <div>
            <p className="text-xl font-bold">
              Bonface<span className="text-teal-400">.</span>
            </p>
            <p className="text-sm text-gray-400 mt-2 max-w-sm">
              Building accessible, pixel‑perfect digital experiences for the web.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest mb-4">
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

          <div>
            <p className="text-sm font-semibold tracking-widest mb-4">CONNECT</p>
            <p className="text-sm text-gray-400">
              muasyamuthengi@gmail.com
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-14 pt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Bonface. All rights reserved.</p>
          <p>
            Built with <span className="text-teal-400">Next.js</span> &{" "}
            <span className="text-teal-400">Tailwind CSS</span>
          </p>
        </div>
      </footer>
    </main>
  );
}
