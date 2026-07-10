"use client";

import React, { useCallback, useEffect, useState, useRef } from "react";
import { AnimatePresence, m } from "framer-motion";
import { cn } from "@/lib/utils";

interface FlipWordsProps {
  words: string[];
  duration?: number;
  className?: string;
}

export const FlipWords: React.FC<FlipWordsProps> = ({
  words,
  duration = 3000,
  className,
}) => {
  const [currentWord, setCurrentWord] = useState<string>(words[0]);

  const startAnimation = useCallback(() => {
    setCurrentWord((prev) => words[words.indexOf(prev) + 1] || words[0]);
  }, [words]);

  const onAnimateRef = useRef(startAnimation);
  useEffect(() => {
    onAnimateRef.current = startAnimation;
  }, [startAnimation]);

  useEffect(() => {
    const timer = setTimeout(() => {
      onAnimateRef.current();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        setTimeout(() => {
          startAnimation();
        }, duration);
      }}
    >
      <m.div
        style={{ color: '#0B74E3', fontFamily: 'var(--font-jetbrains-mono), monospace' }}
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: "blur(8px)",
          scale: 2,
          position: "absolute",
        }}
        className={cn(
          "z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2",
          className
        )}
        key={currentWord}
      >
        
        {currentWord.split(" ").map((word: string, wordIndex: number) => (
          <m.span
            key={word + wordIndex}
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: wordIndex * 0.3,
              duration: 0.3,
            }}
            className="inline-block whitespace-nowrap"
          >
            {word.split("").map((letter: string, letterIndex: number) => (
              <m.span
                key={word + letterIndex}
                initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: wordIndex * 0.3 + letterIndex * 0.05,
                  duration: 0.2,
                }}
                className="inline-block"
              >
                {letter}
              </m.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </m.span>
        ))}
      </m.div>
    </AnimatePresence>
  );
};