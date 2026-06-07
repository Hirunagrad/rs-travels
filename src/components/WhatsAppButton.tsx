import React from 'react';
import { MessageCircle } from 'lucide-react';

interface Props {
  text?: string;
  className?: string;
  message?: string;
}

export default function WhatsAppButton({ 
  text = "Chat on WhatsApp", 
  className = "", 
  message = "Hello! I am interested in a Sri Lanka tour." 
}: Props) {
  const phoneNumber = "94771234567"; // Replace with actual driver number (include country code, no +)
  const encodedMessage = encodeURIComponent(message);
  const waLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a 
      href={waLink} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 ${className}`}
    >
      <MessageCircle size={24} />
      {text}
    </a>
  );
}