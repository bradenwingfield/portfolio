'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center border-b border-gray-200 fixed top-0 bg-white z-50 shadow-sm">
      <Link href="/" className="text-xl font-bold text-black hover:text-gray-600">
        BW
      </Link>

      <div className="space-x-6 text-gray-700 font-medium">
        <Link href="/#about" className="hover:text-black">About</Link>
        <Link href="/projects" className="hover:text-black">Projects</Link>
        <Link href="/#contact" className="hover:text-black">Contact</Link>
      </div>
    </nav>
  )
}
