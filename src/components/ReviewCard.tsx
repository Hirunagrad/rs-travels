import { Star } from 'lucide-react';

export default function ReviewCard({ review }: { review: any }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-slate-100 hover:border-green-100 cursor-default">
      <div className="flex text-yellow-400 mb-3">
        {[...Array(review.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
      </div>
      <p className="text-slate-700 italic mb-4">"{review.comment}"</p>
      <div>
        <p className="font-bold text-slate-800">{review.name}</p>
        <p className="text-sm text-slate-500">{review.country}</p>
      </div>
    </div>
  );
}