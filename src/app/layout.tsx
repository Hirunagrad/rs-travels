import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MessageCircle } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RSTravels | Private Driver & Tour Guide in Sri Lanka",
  description:
    "Experience the real Sri Lanka with a trusted, experienced private driver. Custom tours, safe transport, and unforgettable memories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-50 min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />

        {/* Sticky Global WhatsApp Button */}
        <a
          href="https://wa.me/94774546822?text=Hello%20I%20want%20a%20tour"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:bg-green-600 transition-all"
        >
          <MessageCircle size={32} />
        </a>
      </body>
    </html>
  );
}
