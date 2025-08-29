import React, { useState } from "react";
import { Copy, Check, Github } from "lucide-react";
import { motion } from "framer-motion";

function Home() {
  const [copied, setCopied] = useState(false);

  // Framer Motion variants for fade-in
  const fadeInUp = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-100 px-4 relative overflow-hidden">

      {/* Title */}
      <motion.h1
        className="text-6xl font-extrabold text-gray-800 mb-4 tracking-tight text-center"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        Nep CSS Framework
      </motion.h1>

      {/* Opening Message */}
      <motion.p
        className="text-gray-600 text-2xl mb-8 text-center"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3 }}
      >
        Opening Sunday 10 AM
      </motion.p>

      {/* Install Command + GitHub Link */}
      <motion.div
        className="bg-gray-200 border border-gray-300 rounded-lg px-6 py-4 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md w-full max-w-md"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5 }}
      >
        <span className="text-gray-800 font-mono text-base select-all">
          npm i nep-css-framework
        </span>
        <div className="flex items-center gap-3">
          <button
            className="p-2 rounded hover:bg-gray-300 transition flex items-center"
            aria-label="Copy install command"
            onClick={() => {
              navigator.clipboard.writeText('npm i nep-css-framework');
              setCopied(true);
              setTimeout(() => setCopied(false), 1200);
            }}
          >
            {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-gray-700" />}
          </button>
          <a
            href="https://github.com/abhayabikramshahi/nep-css-npmjs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition"
            aria-label="GitHub Repository"
          >
            <Github className="w-5 h-5" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.p
        className="text-gray-500 text-sm mt-8 text-center"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.6 }}
      >
        &copy; {new Date().getFullYear()} Nep CSS Framework |{" "}
        <a
          href="https://github.com/abhayabikramshahi/nep-css-npmjs"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:underline"
        >
          GitHub
        </a>
      </motion.p>

      {/* Background Blobs */}
      <div className="absolute -z-10 w-96 h-96 bg-gray-300 rounded-full top-20 left-10 opacity-20 animate-pulse"></div>
      <div className="absolute -z-10 w-72 h-72 bg-gray-200 rounded-full bottom-20 right-10 opacity-15 animate-pulse"></div>

    </div>
  );
}

export default Home;
