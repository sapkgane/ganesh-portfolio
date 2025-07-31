'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navItems = [
  ['/', 'Home'],
  ['/professional', 'Work'],
  ['/projects', 'Projects'],
  ['/about', 'About'],
  ['/contact', 'Contact'],
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] bg-opacity-90 shadow-lg backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Logo" width={36} height={36} />
          <span className="text-white font-semibold text-lg tracking-wide font-serif">
            Ganesh Sapkota
          </span>
        </Link>

        <div className="flex gap-6 text-sm sm:text-base">
          {navItems.map(([path, label]) => (
            <Link
              key={path}
              href={path}
              className={`${
                pathname === path
                  ? 'text-yellow-400 underline'
                  : 'text-gray-300 hover:text-yellow-300'
              } transition font-medium`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
