"use client";

import { useState } from "react";

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
          <div>
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
            <div className="mt-14 flex gap-14">
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
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[320px] h-[320px]">
              <div className="absolute inset-0 rounded-full border border-teal-400/40" />
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-full h-full rounded-full object-cover relative"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="px-6 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-20">
            <p className="text-sm uppercase tracking-widest text-teal-400 mb-4">
              About Me
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Crafting digital experiences with precision
            </h2>
            <p className="text-gray-400">
              I build clean, scalable, and user‑focused applications with strong
              performance and thoughtful design systems.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {["Clean Code", "Design Systems", "Performance", "Collaboration"].map(
              (item) => (
                <div
                  key={item}
                  className="p-6 rounded-xl border border-gray-800 hover:border-teal-400/60 transition"
                >
                  <div className="w-10 h-10 mb-4 rounded-md bg-teal-400/10" />
                  <h3 className="font-semibold mb-2">{item}</h3>
                  <p className="text-sm text-gray-400">
                    High‑quality, maintainable solutions.
                  </p>
                </div>
              )
            )}
          </div>

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
              <div key={group.title}>
                <p className="text-sm uppercase tracking-widest text-teal-400 mb-4">
                  {group.title}
                </p>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-md border border-gray-700 hover:border-teal-400/60 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="px-6 py-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Featured Projects
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["E‑Commerce Platform", "SaaS Dashboard", "Portfolio Website"].map(
              (title) => (
                <div
                  key={title}
                  className="rounded-xl border border-gray-800 overflow-hidden hover:border-teal-400/60 transition"
                >
                  <div className="aspect-video bg-gray-900" />
                  <div className="p-6">
                    <h3 className="font-semibold mb-2">{title}</h3>
                    <p className="text-sm text-gray-400">
                      High‑performance web application.
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="px-6 py-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            What I Can Do For You
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Web Development",
              "Frontend Engineering",
              "Backend Development",
              "UI / UX",
              "Performance Optimization",
              "Deployment & Maintenance",
            ].map((service) => (
              <div
                key={service}
                className="p-6 rounded-xl border border-gray-800 hover:border-teal-400/60 transition"
              >
                <h3 className="font-semibold text-xl mb-3">{service}</h3>
                <p className="text-sm text-gray-400">
                  Professional, scalable solutions tailored to your needs.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section id="testimonials" className="px-6 py-32 text-center">
        <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
        <p className="text-gray-400">Coming soon.</p>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="px-6 py-32">
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
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-gray-800 px-6 py-16">
        <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-3">
          <div>
            <p className="text-xl font-bold">
              Bonface<span className="text-teal-400">.</span>
            </p>
            <p className="text-sm text-gray-400 mt-2 max-w-sm">
              Building accessible, pixel‑perfect digital experiences for the
              web.
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
