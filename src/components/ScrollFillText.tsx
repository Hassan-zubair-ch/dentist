import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollFillTextProps {
  text: string;
  highlightWordsCount?: number;
}

export const ScrollFillText: React.FC<ScrollFillTextProps> = ({ text }) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.35'],
  });

  const words = text.split(' ');

  return (
    <h2
      ref={containerRef}
      className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.25] flex flex-wrap gap-x-3 gap-y-1"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
        const color = useTransform(
          scrollYProgress,
          [start, end],
          ['#94A3B8', '#0F172A']
        );

        return (
          <motion.span
            key={i}
            style={{ opacity, color }}
            className="inline-block transition-colors duration-150 select-none"
          >
            {word}
          </motion.span>
        );
      })}
    </h2>
  );
};
