"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function ContactPage() {
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
            Get in <span className="text-green-600">Touch</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ready to plan your dream vacation? Have a question about an itinerary? Send a message and I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          {/* Contact Information Cards */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex items-start gap-6 hover:shadow-md transition-shadow">
              <div className="bg-green-50 p-4 rounded-full text-green-600 shrink-0">
                <Phone size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">WhatsApp / Phone</h3>
                <p className="text-slate-600 mb-2">Available 24/7 for fast replies</p>
                <a href="https://wa.me/94770000000" target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold hover:underline text-lg">
                  +94 77 000 0000
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex items-start gap-6 hover:shadow-md transition-shadow">
              <div className="bg-green-50 p-4 rounded-full text-green-600 shrink-0">
                <Mail size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Email Address</h3>
                <p className="text-slate-600 mb-2">Drop me a line anytime</p>
                <a href="mailto:hello@rstravels.com" className="text-green-600 font-semibold hover:underline text-lg">
                  hello@rstravels.com
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex items-start gap-6 hover:shadow-md transition-shadow">
              <div className="bg-green-50 p-4 rounded-full text-green-600 shrink-0">
                <MapPin size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Location</h3>
                <p className="text-slate-600 text-lg">Colombo, Sri Lanka</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form UI (Mock) */}
          <motion.div 
            className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Send a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
                <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Your Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-green-600 focus:border-transparent outline-none transition-all resize-none" placeholder="Tell me about your travel plans..."></textarea>
              </div>
              <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md">
                <Send size={20} />
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
