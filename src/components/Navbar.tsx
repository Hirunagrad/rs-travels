import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-slate-800">
            RS<span className="text-green-600">Travels</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-slate-600 hover:text-green-600 font-medium transition-colors">Home</Link>
            <Link href="/destinations" className="text-slate-600 hover:text-green-600 font-medium transition-colors">Destinations</Link>
            <Link href="/about" className="text-slate-600 hover:text-green-600 font-medium transition-colors">About Me</Link>
            <Link href="/packages" className="text-slate-600 hover:text-green-600 font-medium transition-colors">Tours</Link>
            <Link href="/reviews" className="text-slate-600 hover:text-green-600 font-medium transition-colors">Reviews</Link>
            <Link href="/contact" className="text-slate-600 hover:text-green-600 font-medium transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}