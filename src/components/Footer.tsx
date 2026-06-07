import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="mb-4">© {new Date().getFullYear()} RSTravels. Private Driver & Tour Guide.</p>
        <div className="flex justify-center gap-4">
          <Link href="/packages" className="hover:text-white">Tours</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </div>
      </div>
    </footer>
  );
}