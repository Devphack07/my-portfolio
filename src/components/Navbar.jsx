import { useState } from "react";
import { Menu, X } from "lucide-react";

const sections = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-xl">My Portfolio</h1>

        <div className="hidden md:flex gap-6">
          {sections.map((sec) => (
            <a key={sec} href={`#${sec.toLowerCase()}`} className="hover:text-blue-500">
              {sec}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* Placeholder to keep spacing consistent where the ThemeToggle used to be */}
          <div className="hidden md:block w-8" aria-hidden="true" />
          <button
            className="md:hidden p-2 rounded-md"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg px-6 py-4 space-y-4">
          {sections.map((sec) => (
            <a
              key={sec}
              href={`#${sec.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block hover:text-blue-500"
            >
              {sec}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

