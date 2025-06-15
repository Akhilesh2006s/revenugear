"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const TypewriterEffectSmooth = ({
  words,
  className,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
}) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const renderWords = () => {
    return (
      <div className="flex flex-wrap justify-center gap-x-2 text-center leading-relaxed">
        {wordsArray.map((word, wordIdx) => (
          <div key={`word-${wordIdx}`} className="block">
            {word.text.map((char, charIdx) => (
              <motion.span
                key={`char-${wordIdx}-${charIdx}`}
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: (wordIdx * 0.1) + (charIdx * 0.02),
                  ease: "easeOut",
                }}
                className={cn("text-slate-800 dark:text-white", word.className)}
              >
                {char}
              </motion.span>
            ))}
            &nbsp;
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={cn("flex items-center justify-center flex-wrap", className)}>
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      >
        <div className="text-lg sm:text-xl md:text-3xl lg:text-5xl font-semibold max-w-4xl mx-auto">
          {renderWords()}
        </div>
      </motion.div>
    </div>
  );
};
