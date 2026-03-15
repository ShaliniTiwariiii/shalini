"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WhatsAppFloat() {
  const phoneNumber = "+918960696450"; // Replace with your actual WhatsApp number
  const message = "Hello! I would like to know more about your services.";
  const [whatsappUrl, setWhatsappUrl] = React.useState("");

  React.useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const baseUrl = isMobile ? "whatsapp://send" : "https://web.whatsapp.com/send";
    setWhatsappUrl(`${baseUrl}?phone=${phoneNumber}&text=${encodeURIComponent(message)}`);
  }, []);

  if (!whatsappUrl) return null; // Avoid hydration mismatch by waiting for client-side check

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
        className="bg-white px-4 py-2 rounded-2xl shadow-lg border border-gray-100/50 rounded-br-sm hidden md:block backdrop-blur-sm pointer-events-auto"
      >
        <p className="text-sm font-medium text-gray-700">
          Have a question? <span className="text-[#25D366] font-semibold">Chat with us!</span> <span className="animate-pulse inline-block ml-1">👋</span>
        </p>
      </motion.div>

      {/* Button With Ripple Effect */}
      <div className="relative flex items-center justify-center pointer-events-auto group">
        {/* Pulsing Outer Rings */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-0 group-hover:animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
        <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-pulse delay-75" />
        
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white shadow-xl hover:shadow-[0_8px_30px_rgb(37,211,102,0.4)] focus:outline-none focus:ring-4 focus:ring-[#25D366]/50 transition-all duration-300 ring-offset-2 hover:-translate-y-1 z-10"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Chat with us on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-9 w-9 drop-shadow-md"
          >
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766 0 1.252.344 2.457.971 3.513l.3.5-1.026 3.75 3.901-1.02.482.288c1.036.619 2.227.946 3.447.946h.001c3.181 0 5.768-2.586 5.768-5.766 0-3.181-2.587-5.768-5.768-5.768zm3.321 8.358c-.183.516-1.056.965-1.464 1.011-.408.046-1.02.138-2.882-.658-2.23-1.036-3.66-3.323-3.77-3.473-.109-.15-1.02-1.371-1.02-2.617 0-1.246.66-1.859.904-2.109.243-.25.545-.311.728-.311.183 0 .366.002.529.009.167.009.432-.057.674.522.25.6 1.056 2.58 1.151 2.766.096.186.155.405.034.646-.12.241-.183.393-.366.613-.183.22-.38.483-.544.67-.183.208-.38.431-.17.794.21.363.935 1.55 2.016 2.518 1.401 1.255 2.553 1.637 2.918 1.81.366.173.578.143.794-.094.215-.236.93-1.077 1.173-1.446.243-.369.486-.307.822-.186.335.12 2.126.997 2.49 1.176.365.18.608.271.696.425.089.155.089.897-.094 1.413zm-3.32-12.53h-.002c-4.996 0-9.052 4.055-9.052 9.052 0 1.954.512 3.868 1.488 5.548l-1.465 5.352 5.485-1.438c1.633.882 3.492 1.348 5.388 1.348h.002c4.996 0 9.053-4.055 9.053-9.052 0-4.997-4.057-9.053-9.053-9.053z"/>
          </svg>
        </motion.a>
      </div>
    </div>
  );
}
