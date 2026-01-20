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

        {/* RIGHT */}
        <div className="text-sm text-gray-400 md:text-right">
          <p>© {new Date().getFullYear()} Bonface.</p>
          <p className="mt-1">All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
