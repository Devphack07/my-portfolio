import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-4"
      >
        Hi, I'm <span className="text-blue-500">Your Name</span>
      </motion.h2>
      <p className="max-w-xl text-lg mb-6">
        A short tagline about you. Example: "ECE Engineer & Web Developer
        passionate about AI tools."
      </p>
      <div className="flex gap-4">
        <a
          href="#projects"
          className="px-6 py-2 rounded-2xl bg-blue-500 text-white shadow-md hover:bg-blue-600"
        >
          View Projects
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          className="px-6 py-2 rounded-2xl border shadow-md hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
