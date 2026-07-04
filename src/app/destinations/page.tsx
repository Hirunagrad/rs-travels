"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { MapPin, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import WhatsAppButton from "@/components/WhatsAppButton";
import { destinations } from "@/data/destinations";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function DestinationsPage() {
  const [selectedRegion, setSelectedRegion] = useState<string>("All");
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredDestinations = selectedRegion === "All" 
    ? destinations 
    : destinations.filter(d => d.region === selectedRegion);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header and Top CTA */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Explore <span className="text-green-600">Destinations</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Discover the breathtaking beauty of Sri Lanka. Browse through the regions and attractions I can take you to.
          </p>
          <WhatsAppButton text="Let's build your custom itinerary!" className="text-lg px-8 py-4 shadow-md hover:scale-105 transition-transform" />
        </motion.div>

        {/* Filter Bar with Carousel */}
        <motion.div 
          className="flex items-center gap-2 sm:gap-4 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          
          {/* Left Scroll Button */}
          <button 
            onClick={() => scroll("left")}
            className="shrink-0 bg-white p-2.5 rounded-full shadow-sm text-slate-600 hidden md:flex items-center justify-center transition-all border border-slate-200 hover:border-green-600 hover:text-green-600 hover:shadow-md"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>

          <div 
            ref={scrollRef}
            className="flex-1 flex overflow-x-auto py-2 px-1 gap-3 hide-scrollbar snap-x scroll-smooth"
          >
            <button
              onClick={() => setSelectedRegion("All")}
              className={`shrink-0 snap-start whitespace-nowrap px-6 py-3 rounded-full font-medium transition-all ${
                selectedRegion === "All"
                  ? "bg-green-600 text-white shadow-md scale-105"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-green-600 hover:text-green-600"
              }`}
            >
              All Regions
            </button>
            {destinations.map((dest) => (
              <button
                key={dest.id}
                onClick={() => setSelectedRegion(dest.region)}
                className={`shrink-0 snap-start whitespace-nowrap px-6 py-3 rounded-full font-medium transition-all ${
                  selectedRegion === dest.region
                    ? "bg-green-600 text-white shadow-md scale-105"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-green-600 hover:text-green-600"
                }`}
              >
                {dest.region}
              </button>
            ))}
          </div>

          {/* Right Scroll Button */}
          <button 
            onClick={() => scroll("right")}
            className="shrink-0 bg-white p-2.5 rounded-full shadow-sm text-slate-600 hidden md:flex items-center justify-center transition-all border border-slate-200 hover:border-green-600 hover:text-green-600 hover:shadow-md"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </motion.div>

        {/* Results Info */}
        <motion.div 
          className="mb-6"
          layout
        >
          <h2 className="text-2xl font-bold text-slate-800">
            {selectedRegion === "All" ? "All Destinations" : selectedRegion} <span className="text-slate-400 font-normal text-lg">({filteredDestinations.length} Results)</span>
          </h2>
        </motion.div>

        {/* Grid Layout */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredDestinations.map((dest) => (
              <motion.div 
                key={dest.id} 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 flex flex-col group"
              >
                {/* Image Top Half */}
                <div className="relative h-72 w-full overflow-hidden">
                  <Image
                    src={dest.image}
                    alt={dest.region}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                </div>
                
                {/* Content Bottom Half */}
                <div className="p-6 flex-1 flex flex-col">
                  <h2 className="text-2xl font-bold text-slate-800 mb-2">{dest.region}</h2>
                  <p className="text-slate-600 mb-6 flex-1">{dest.description}</p>
                  
                  <div>
                    <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Top Attractions</h3>
                    <ul className="space-y-2">
                      {dest.attractions.map((attraction, idx) => {
                        const isObj = typeof attraction === 'object';
                        const name = isObj ? attraction.name : attraction;
                        const wikiUrl = isObj ? attraction.wikiUrl : null;

                        return (
                          <li key={idx} className="flex items-start text-slate-700 group/link">
                            <MapPin size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm leading-tight flex-1">
                              {name}
                              {wikiUrl && (
                                <a 
                                  href={wikiUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center ml-2 text-slate-400 hover:text-green-600 transition-colors opacity-60 hover:opacity-100"
                                  title="Read more on Wikipedia"
                                  aria-label={`Read more about ${name} on Wikipedia`}
                                >
                                  <ExternalLink size={14} className="hover:scale-110 transition-transform" />
                                </a>
                              )}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-20 text-center bg-white rounded-3xl p-10 shadow-sm border border-slate-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Ready to explore these beautiful places?</h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            See a place you like? Let&apos;s build your custom itinerary! I can help you plan the perfect route to maximize your time in Sri Lanka.
          </p>
          <WhatsAppButton text="Start Planning Now" className="text-lg px-8 py-4 shadow-md hover:scale-105 transition-transform" />
        </motion.div>

      </div>
    </div>
  );
}
