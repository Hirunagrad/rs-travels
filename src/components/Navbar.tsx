"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-slate-800">
            RS<span className="text-green-600">Travels</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-slate-600 hover:text-green-600 font-medium transition-colors">Home</Link>
            <Link href="/destinations" className="text-slate-600 hover:text-green-600 font-medium transition-colors">Destinations</Link>
            <Link href="/about" className="text-slate-600 hover:text-green-600 font-medium transition-colors">About Me</Link>
            <Link href="/packages" className="text-slate-600 hover:text-green-600 font-medium transition-colors">Tours</Link>
            <Link href="/reviews" className="text-slate-600 hover:text-green-600 font-medium transition-colors">Reviews</Link>
            <Link href="/contact" className="text-slate-600 hover:text-green-600 font-medium transition-colors">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-green-600 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white shadow-lg border-t border-slate-100 absolute w-full overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
              <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-slate-600 hover:text-green-600 hover:bg-slate-50 rounded-md font-medium">Home</Link>
              <Link href="/destinations" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-slate-600 hover:text-green-600 hover:bg-slate-50 rounded-md font-medium">Destinations</Link>
              <Link href="/about" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-slate-600 hover:text-green-600 hover:bg-slate-50 rounded-md font-medium">About Me</Link>
              <Link href="/packages" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-slate-600 hover:text-green-600 hover:bg-slate-50 rounded-md font-medium">Tours</Link>
              <Link href="/reviews" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-slate-600 hover:text-green-600 hover:bg-slate-50 rounded-md font-medium">Reviews</Link>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-slate-600 hover:text-green-600 hover:bg-slate-50 rounded-md font-medium">Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}