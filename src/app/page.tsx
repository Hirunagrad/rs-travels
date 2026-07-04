"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import WhatsAppButton from "@/components/WhatsAppButton";
import PackageCard from "@/components/PackageCard";
import ReviewCard from "@/components/ReviewCard";
import { packages } from "@/data/packages";
import { reviews } from "@/data/reviews";
import { ShieldCheck, Map, Clock, Star, Users, Navigation, CheckCircle2, MessageCircle, MapPin, ChevronRight } from "lucide-react";

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

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-slate-50">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center">
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
          className="relative z-10 text-center px-4 max-w-5xl mx-auto text-white mt-10"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp} className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg">
              <Star fill="currentColor" size={16} className="text-yellow-400" />
              <span className="font-medium tracking-wide text-sm">5.0 Rated on TripAdvisor & Google</span>
            </div>
          </motion.div>
          <motion.h1 
            variants={fadeUp}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight"
          >
            Experience Sri Lanka <br/><span className="text-green-400">Like a Local</span>
          </motion.h1>
          <motion.p 
            variants={fadeUp}
            className="text-lg md:text-2xl mb-10 text-slate-200 max-w-3xl mx-auto font-light"
          >
            Your trusted private driver and guide. Safe, comfortable, and personalized tours across the Pearl of the Indian Ocean.
          </motion.p>
          <motion.div 
            variants={fadeUp}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <WhatsAppButton
              text="Plan Your Trip via WhatsApp"
              className="text-lg px-8 py-4 shadow-xl hover:scale-105 transition-transform bg-green-500 hover:bg-green-600 border-none"
            />
            <Link href="/packages" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 hover:bg-white/10 backdrop-blur-sm rounded-full transition-all">
              View Tour Packages
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. QUICK STATS STRIP */}
      <section className="relative -mt-16 z-20 max-w-6xl mx-auto px-4">
        <motion.div 
          className="bg-white rounded-3xl shadow-xl p-8 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x border border-slate-100"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="text-center">
            <h4 className="text-4xl font-black text-slate-800 mb-1">10+</h4>
            <p className="text-slate-500 font-medium">Years Experience</p>
          </div>
          <div className="text-center">
            <h4 className="text-4xl font-black text-slate-800 mb-1">100%</h4>
            <p className="text-slate-500 font-medium">Customizable Tours</p>
          </div>
          <div className="text-center">
            <h4 className="text-4xl font-black text-slate-800 mb-1">500+</h4>
            <p className="text-slate-500 font-medium">Happy Guests</p>
          </div>
          <div className="text-center">
            <h4 className="text-4xl font-black text-slate-800 mb-1">24/7</h4>
            <p className="text-slate-500 font-medium">Local Support</p>
          </div>
        </motion.div>
      </section>

      {/* 3. FEATURED DESTINATIONS VISUAL GRID */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-50px", once: false }}
            variants={fadeUp}
          >
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold text-slate-800 mb-4">Discover the Magic</h2>
              <p className="text-slate-600 text-lg">From misty mountains to golden beaches, explore the places that make Sri Lanka unforgettable. I'll take you there.</p>
            </div>
            <Link href="/destinations" className="inline-flex items-center text-green-600 font-bold hover:text-green-700 group shrink-0">
              Explore All Destinations <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-4 md:h-[600px]"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-50px", once: false }}
          >
            {/* Main large card */}
            <motion.div variants={fadeUp} className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-3xl h-[300px] md:h-auto shadow-sm">
              <Link href="/destinations">
                <Image src="https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1000&auto=format&fit=crop" alt="Ella Train" fill className="object-cover group-hover:scale-110 transition-transform duration-700" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">Hill Country</span>
                  <h3 className="text-3xl font-bold text-white mb-2">Ella & Nuwara Eliya</h3>
                  <p className="text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-4 group-hover:translate-y-0 hidden md:block">Ride the famous blue train through misty tea plantations.</p>
                </div>
              </Link>
            </motion.div>
            
            {/* Wide card */}
            <motion.div variants={fadeUp} className="md:col-span-2 relative group overflow-hidden rounded-3xl h-[250px] md:h-auto shadow-sm">
              <Link href="/destinations">
                <Image src="https://picsum.photos/id/1024/1000/600" alt="Wildlife Safaris" fill className="object-cover group-hover:scale-110 transition-transform duration-700 object-center" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">Wildlife Safaris</h3>
                  <p className="text-slate-200 text-sm">Yala, Udawalawe & Minneriya</p>
                </div>
              </Link>
            </motion.div>

            {/* Small card 1 */}
            <motion.div variants={fadeUp} className="relative group overflow-hidden rounded-3xl h-[250px] md:h-auto shadow-sm">
              <Link href="/destinations">
                <Image src="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1000&auto=format&fit=crop" alt="Galle Fort" fill className="object-cover group-hover:scale-110 transition-transform duration-700" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">South Coast</h3>
                  <p className="text-slate-200 text-sm">Galle & Mirissa</p>
                </div>
              </Link>
            </motion.div>

            {/* Small card 2 */}
            <motion.div variants={fadeUp} className="relative group overflow-hidden rounded-3xl h-[250px] md:h-auto shadow-sm">
              <Link href="/destinations">
                <Image src="https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=1000&auto=format&fit=crop" alt="Kandy Temple" fill className="object-cover group-hover:scale-110 transition-transform duration-700" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">Culture Hub</h3>
                  <p className="text-slate-200 text-sm">Kandy & Dambulla</p>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. MEET YOUR GUIDE (TRUST BUILDING) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ margin: "-50px", once: false }}
              transition={{ duration: 0.8 }}
            >
              <Image 
                src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=1000&auto=format&fit=crop" 
                alt="Your driver" 
                fill 
                className="object-cover"
                unoptimized
              />
              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-white">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full"><ShieldCheck className="text-green-600" size={24} /></div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">Licensed Guide</p>
                    <p className="text-xs text-slate-500">Tourist Board Approved</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ margin: "-50px", once: false }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeUp} className="text-4xl font-bold text-slate-800 mb-6">More than just a driver—<br/>your local friend.</motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-slate-600 mb-6 leading-relaxed">
                Ayubowan! I am dedicated to showing you the true, authentic side of Sri Lanka. With over a decade on these roads, I don't just take you to tourist traps; I take you to hidden viewpoints, local food spots, and untouched nature.
              </motion.p>
              <motion.ul variants={fadeUp} className="space-y-4 mb-10">
                <li className="flex items-center text-slate-700 font-medium">
                  <CheckCircle2 className="text-green-500 mr-3 shrink-0" size={20} /> Clean, Air-Conditioned SUV or Hybrid Sedan
                </li>
                <li className="flex items-center text-slate-700 font-medium">
                  <CheckCircle2 className="text-green-500 mr-3 shrink-0" size={20} /> Safe, defensive driving guaranteed
                </li>
                <li className="flex items-center text-slate-700 font-medium">
                  <CheckCircle2 className="text-green-500 mr-3 shrink-0" size={20} /> Fluent English & Deep Local History Knowledge
                </li>
              </motion.ul>
              <motion.div variants={fadeUp}>
                <Link href="/about" className="inline-flex items-center px-8 py-4 bg-slate-800 text-white font-semibold rounded-full hover:bg-slate-700 transition-colors shadow-lg">
                  Read My Full Story
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS SECTION */}
      <section className="py-24 bg-green-900 text-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ margin: "-50px", once: false }} variants={fadeUp}>
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-green-100 text-lg max-w-2xl mx-auto">Booking your private tour is incredibly simple. No complicated forms, just direct communication.</p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-12 text-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-50px", once: false }}
          >
            <motion.div variants={fadeUp} className="flex flex-col items-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6 border border-white/20 backdrop-blur-sm">
                <MessageCircle size={32} className="text-green-300" />
              </div>
              <h3 className="text-2xl font-bold mb-3">1. Send a Message</h3>
              <p className="text-green-100">Contact me via WhatsApp with your travel dates, group size, and any must-see places.</p>
            </motion.div>
            
            <motion.div variants={fadeUp} className="flex flex-col items-center relative">
              {/* Connector line for desktop */}
              <div className="hidden md:block absolute top-10 -left-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent -z-10"></div>
              
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6 border border-white/20 backdrop-blur-sm">
                <Map size={32} className="text-green-300" />
              </div>
              <h3 className="text-2xl font-bold mb-3">2. Plan Itinerary</h3>
              <p className="text-green-100">I will suggest a logical, time-efficient route and provide a transparent, all-inclusive price.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col items-center relative">
              <div className="hidden md:block absolute top-10 -left-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent -z-10"></div>
              
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6 border border-white/20 backdrop-blur-sm">
                <Navigation size={32} className="text-green-300" />
              </div>
              <h3 className="text-2xl font-bold mb-3">3. Enjoy the Ride</h3>
              <p className="text-green-100">I'll pick you up from the airport. Sit back, relax, and let me handle the chaotic Sri Lankan roads!</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 6. POPULAR PACKAGES */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-50px", once: false }}
            variants={fadeUp}
          >
            <div>
              <h2 className="text-4xl font-bold text-slate-800">Popular Tour Packages</h2>
              <p className="text-slate-600 mt-3 text-lg">Fully customizable itineraries based on your interests and schedule.</p>
            </div>
            <Link
              href="/packages"
              className="inline-flex items-center text-green-600 font-bold hover:text-green-700 group shrink-0"
            >
              View All Tours <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-50px", once: false }}
          >
            {packages.slice(0, 3).map((pkg: TourPackage) => (
              <motion.div key={pkg.id} variants={fadeUp}>
                <PackageCard pkg={pkg} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. REVIEWS SECTION */}
      <section className="py-24 bg-white relative">
        <motion.div 
          className="max-w-7xl mx-auto px-4 text-center relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-50px", once: false }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Guest Testimonials</h2>
            <p className="text-slate-600 text-lg">Read what travelers from around the world have to say.</p>
          </motion.div>
          
          <motion.div className="grid md:grid-cols-3 gap-8 text-left" variants={staggerContainer}>
            {reviews.slice(0, 3).map((review: Review) => (
              <motion.div key={review.id} variants={fadeUp}>
                <ReviewCard review={review} />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div variants={fadeUp} className="mt-16">
            <Link
              href="/reviews"
              className="inline-block border-2 border-slate-200 text-slate-700 font-bold px-10 py-4 rounded-full hover:border-slate-800 hover:bg-slate-800 hover:text-white transition-all shadow-sm"
            >
              Read All Reviews
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* 8. FINAL CTA BANNER */}
      <section className="py-24 relative overflow-hidden flex items-center justify-center">
        <Image src="https://picsum.photos/id/1043/2000/1000" alt="Beautiful landscape" fill className="object-cover brightness-[0.3]" unoptimized />
        <motion.div 
          className="relative z-10 text-center px-4 max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-50px", once: false }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready for the trip of a lifetime?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-xl text-slate-300 mb-10 font-light">
            Contact me today and let's start planning your perfect Sri Lankan adventure.
          </motion.p>
          <motion.div variants={fadeUp}>
            <WhatsAppButton text="Message Me on WhatsApp" className="text-lg px-10 py-5 shadow-2xl hover:scale-105 transition-transform bg-green-500 hover:bg-green-600 border-none" />
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
}
