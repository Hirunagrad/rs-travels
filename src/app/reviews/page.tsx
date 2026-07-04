"use client";

import { motion } from "framer-motion";
import ReviewCard from "@/components/ReviewCard";
import { reviews } from "@/data/reviews";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Guest <span className="text-green-600">Reviews</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Don't just take my word for it. Read what travelers from all over the world have to say about their experience exploring Sri Lanka with me.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {reviews.map((review) => (
            <motion.div key={review.id} variants={fadeUp}>
              <ReviewCard review={review} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
