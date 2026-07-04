"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { CheckCircle2, ShieldCheck, Map, Clock } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            About <span className="text-green-600">Me</span>
          </h1>
        </motion.div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div 
            className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Placeholder Image for the Driver */}
            <Image 
              src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=1000&auto=format&fit=crop" 
              alt="Driver profile picture" 
              fill 
              className="object-cover"
              unoptimized
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Hello, I'm your private driver & guide in Sri Lanka!</h2>
            <p className="text-slate-600 mb-6 text-lg leading-relaxed">
              With over 10 years of experience navigating the beautiful roads of Sri Lanka, I have dedicated my life to showing travelers the true magic of the Pearl of the Indian Ocean. My goal is not just to drive you from point A to point B, but to give you an unforgettable, authentic Sri Lankan experience.
            </p>
            <p className="text-slate-600 mb-8 text-lg leading-relaxed">
              Whether you want to explore ancient ruins, hike through misty tea plantations, or relax on pristine beaches, I will ensure your journey is safe, comfortable, and tailored exactly to your preferences.
            </p>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-center text-slate-700 font-medium">
                <CheckCircle2 className="text-green-600 mr-3" size={24} /> 10+ Years of Professional Driving Experience
              </li>
              <li className="flex items-center text-slate-700 font-medium">
                <CheckCircle2 className="text-green-600 mr-3" size={24} /> Fully Licensed Tourist Chauffeur
              </li>
              <li className="flex items-center text-slate-700 font-medium">
                <CheckCircle2 className="text-green-600 mr-3" size={24} /> Fluent in English
              </li>
              <li className="flex items-center text-slate-700 font-medium">
                <CheckCircle2 className="text-green-600 mr-3" size={24} /> Modern, Air-Conditioned Vehicle
              </li>
            </ul>

            <WhatsAppButton text="Say Hello on WhatsApp" className="text-lg px-8 py-4 shadow-lg hover:scale-105 transition-transform" />
          </motion.div>
        </div>

        {/* Vehicles Section */}
        <motion.div 
          className="mt-24 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          <motion.div variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">My Vehicles</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              I provide clean, modern, and highly comfortable vehicles suitable for any terrain in Sri Lanka.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            
            {/* Vehicle 1 */}
            <motion.div variants={fadeUp} className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 group">
              <div className="relative h-64 w-full overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1590362891991-f776e747a588?q=80&w=1000&auto=format&fit=crop" 
                  alt="Toyota Prius V3" 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  unoptimized
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Toyota Prius V3</h3>
                <p className="text-slate-600">
                  A highly comfortable, eco-friendly hybrid sedan. Perfect for couples or small families looking for a smooth, quiet ride across the country.
                </p>
              </div>
            </motion.div>

            {/* Vehicle 2 */}
            <motion.div variants={fadeUp} className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 group">
              <div className="relative h-64 w-full overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1000&auto=format&fit=crop" 
                  alt="Honda Vezel 2014" 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  unoptimized
                />
              </div>
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Honda Vezel 2014</h3>
                <p className="text-slate-600">
                  A spacious and capable compact SUV. Provides excellent ground clearance and comfort, making it ideal for hilly areas like Nuwara Eliya and Ella.
                </p>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </div>
  );
}
