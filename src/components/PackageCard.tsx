import Image from 'next/image';
import { MapPin, Clock } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

// 1. Define the TypeScript interface for your package object
interface TourPackage {
  id?: number | string;
  title: string;
  duration: string;
  places: string[];
  price: string;
  image: string;
}

// 2. Replace 'any' with the new TourPackage type
export default function PackageCard({ pkg }: { pkg: TourPackage }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-slate-100">
      <div className="relative h-48 w-full">
        <Image src={pkg.image} alt={pkg.title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800 mb-2">{pkg.title}</h3>
        <div className="flex items-center text-slate-600 mb-2">
          <Clock size={18} className="mr-2 text-green-600" />
          <span className="text-sm">{pkg.duration}</span>
        </div>
        <div className="flex items-start text-slate-600 mb-4">
          {/* 3. Updated flex-shrink-0 to shrink-0 */}
          <MapPin size={18} className="mr-2 mt-1 shrink-0 text-green-600" />
          <span className="text-sm">{pkg.places.join(" • ")}</span>
        </div>
        <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
          <span className="text-slate-800 font-medium">{pkg.price}</span>
          <WhatsAppButton text="Enquire Now" className="w-full text-sm py-2" message={`Hi, I'm interested in the ${pkg.title} package.`} />
        </div>
      </div>
    </div>
  );
}