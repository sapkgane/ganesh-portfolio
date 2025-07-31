'use client'

import Link from 'next/link'

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-black text-white px-6 sm:px-12 pt-32 pb-16">
      <h1 className="text-4xl font-bold mb-6">Let’s Connect</h1>
      <p className="text-lg text-gray-300 mb-4">
        I’m always open to meaningful conversations, collaborations, or new challenges in quality engineering and leadership.
      </p>
      <p className="text-lg text-gray-300 mb-4">
        You can message me directly on LinkedIn or reach out through email.
      </p>
      <Link
        href="https://www.linkedin.com/in/ganeshsapkota"
        target="_blank"
        className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded transition"
      >
        Connect on LinkedIn
      </Link>
    </section>
  )
}
