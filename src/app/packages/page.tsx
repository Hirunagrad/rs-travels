"use client";

import { motion } from "framer-motion";
import PackageCard from "@/components/PackageCard";
import { packages } from "@/data/packages";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Tour <span className="text-green-600">Packages</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose from our carefully curated tour packages or contact us to build a custom itinerary that perfectly suits your dream vacation.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {packages.map((pkg) => (
            <motion.div key={pkg.id} variants={fadeUp}>
              {/* @ts-ignore */}
              <PackageCard pkg={pkg} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
