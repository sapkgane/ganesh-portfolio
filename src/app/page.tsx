'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <section className="min-h-screen bg-black text-white px-6 sm:px-12 pt-32 pb-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left: Intro Text */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 font-serif tracking-wide">
            Ganesh Sapkota
          </h1>
          <p className="text-lg sm:text-xl text-yellow-400 font-semibold mb-6">
            QA Team Lead | Test Automation Architect | DevOps | CI/CD | SDLC | Software Quality | Guidewire Cloud | Guidewire Certified
          </p>
          <p className="text-md text-gray-400 leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
            Building quality at speed through automation, DevOps, and technical leadership.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Link
              href="/professional"
              className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-medium px-6 py-3 rounded transition"
            >
              See My Work
            </Link>
            <Link
              href="/projects"
              className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-medium px-6 py-3 rounded transition"
            >
              View Projects
            </Link>
            <Link
              href="/about"
              className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-medium px-6 py-3 rounded transition"
            >
              About Me
            </Link>
            <Link
              href="/contact"
              className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-medium px-6 py-3 rounded transition"
            >
              Contact
            </Link>
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            src="/logo.png"
            alt="Ganesh Sapkota"
            width={300}
            height={300}
            className="rounded-full shadow-lg border-4 border-yellow-400"
          />
        </motion.div>
      </div>
    </section>
  )
}
