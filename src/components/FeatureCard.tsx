"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 0 25px rgba(251, 191, 36, 0.3)",
        transition: { duration: 0.3 },
      }}
      className="w-full max-w-4xl min-h-[220px] mx-auto rounded-2xl bg-gradient-to-br from-amber-400 via-yellow-500 to-orange-400 backdrop-blur-md border border-amber-300/30 shadow-[0_4px_30px_rgba(245,158,11,0.4)] flex flex-row items-center justify-start space-x-6 px-10 py-8 transition-all duration-500"
    >
      {/* Your content here */}
      <div className="w-16 h-16 min-w-16 flex items-center justify-center rounded-full bg-amber-600/20 border border-amber-300/40">
        {icon}
      </div>
      <div className="flex flex-col justify-center space-y-2">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="text-white/90 text-base max-w-2xl">{description}</p>
      </div>
    </motion.div>
  );
};