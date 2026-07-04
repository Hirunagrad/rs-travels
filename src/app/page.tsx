"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import WhatsAppButton from "@/components/WhatsAppButton";
import PackageCard from "@/components/PackageCard";
import ReviewCard from "@/components/ReviewCard";
import { packages } from "@/data/packages";
import { reviews } from "@/data/reviews";
import { ShieldCheck, Map, Clock } from "lucide-react";

// 1. Define strict types so ESLint is happy!
interface TourPackage {
  id: number | string;
  title: string;
  duration: string;
  places: string[];
  price: string;
  image: string;
}

interface Review {
  id: number | string;
  name: string;
  country: string;
  rating: number;
  comment: string;
}

// Reusable animation variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-150 flex items-center justify-center">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Sigiriya_%28141688197%29.jpeg/1920px-Sigiriya_%28141688197%29.jpeg"
          alt="Sigiriya Lion Rock in Sri Lanka"
          fill
          className="object-cover brightness-50"
          priority
          quality={100}
          unoptimized
        />
        <motion.div 
          className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            Your Trusted Private Driver in Sri Lanka
          </motion.h1>
          <motion.p 
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-lg md:text-xl mb-10 text-slate-200"
          >
            Safe, comfortable, and personalized tours across the Pearl of the
            Indian Ocean. Let&apos;s build your dream itinerary together.
          </motion.p>
          <motion.div 
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <WhatsAppButton
              text="Chat on WhatsApp to Plan"
              className="text-lg px-8 py-4 shadow-lg hover:scale-105 transition-transform"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="grid md:grid-cols-3 gap-10 text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="flex flex-col items-center group">
              <div className="p-4 bg-green-50 rounded-full mb-4 group-hover:bg-green-100 transition-colors duration-300">
                <ShieldCheck size={40} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Safe & Reliable</h3>
              <p className="text-slate-600">
                10+ years of driving experience with zero accidents. Fully
                insured, modern, and air-conditioned vehicle.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="flex flex-col items-center group">
              <div className="p-4 bg-green-50 rounded-full mb-4 group-hover:bg-green-100 transition-colors duration-300">
                <Map size={40} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Local Knowledge</h3>
              <p className="text-slate-600">
                I know the hidden gems, authentic local restaurants, and the
                best times to visit busy tourist spots.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="flex flex-col items-center group">
              <div className="p-4 bg-green-50 rounded-full mb-4 group-hover:bg-green-100 transition-colors duration-300">
                <Clock size={40} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Flexible Schedules</h3>
              <p className="text-slate-600">
                It&apos;s your holiday. We stop when you want to stop, and move
                when you want to move. No rushing.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Preview Packages Section */}
      <section className="py-20 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="flex justify-between items-end mb-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h2 className="text-3xl font-bold text-slate-800">
                Popular Tour Packages
              </h2>
              <p className="text-slate-600 mt-2">
                Customizable itineraries based on your interests.
              </p>
            </div>
            <Link
              href="/packages"
              className="hidden sm:block text-green-600 font-semibold hover:underline"
            >
              View All Tours &rarr;
            </Link>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {packages.slice(0, 3).map((pkg: TourPackage) => (
              <motion.div key={pkg.id} variants={fadeUp} transition={{ duration: 0.5 }}>
                <PackageCard pkg={pkg} />
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/packages"
              className="text-green-600 font-semibold hover:underline"
            >
              View All Tours &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Preview Section */}
      <section className="py-20 bg-white overflow-hidden">
        <motion.div 
          className="max-w-7xl mx-auto px-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold text-slate-800 mb-2">
            What My Guests Say
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-600 mb-12">
            Don&apos;t just take my word for it.
          </motion.p>
          
          <motion.div className="grid md:grid-cols-3 gap-8 text-left" variants={staggerContainer}>
            {reviews.slice(0, 3).map((review: Review) => (
              <motion.div key={review.id} variants={fadeUp} transition={{ duration: 0.5 }}>
                <ReviewCard review={review} />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div variants={fadeUp} className="mt-12">
            <Link
              href="/reviews"
              className="inline-block border-2 border-slate-800 text-slate-800 font-semibold px-8 py-3 rounded-full hover:bg-slate-800 hover:text-white transition-colors"
            >
              Read All Reviews
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
