import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function GlitchPersonality() {
  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecond(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-[60vh] flex items-center justify-center px-6 py-16">
      <div className="max-w-3xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl text-center mb-8"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            <span className="gradient-text">Personality Analysis</span>
          </motion.h2>

          {/* First bubble - glitched */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="glassmorphism-card rounded-3xl rounded-tl-none p-6 max-w-md relative"
          >
            <p className="text-white text-lg relative">
              <span className="relative inline-block">
                I really want to tell you—
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1.5, duration: 0.3 }}
                  className="absolute left-0 top-1/2 h-0.5 bg-[#F43F5E]"
                />
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0, 1, 0, 1] }}
                  transition={{ delay: 1.5, duration: 0.6 }}
                  className="absolute inset-0 bg-[#06B6D4]/20 blur-md"
                />
              </span>
            </p>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 rotate-45"
              style={{
                background: 'rgba(30, 41, 59, 0.4)',
                backdropFilter: 'blur(16px)',
                borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            />
          </motion.div>

          {/* Second bubble - active with glow */}
          <AnimatePresence>
            {showSecond && (
              <motion.div
                initial={{ opacity: 0, x: -20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="glassmorphism-card rounded-3xl rounded-tl-none p-6 max-w-md relative ml-0 neon-glow-cyan"
              >
                <p className="text-white text-lg flex items-center gap-2">
                  Wait! Look at this Reel! 
                  <span className="text-2xl">🤣</span>
                </p>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 rotate-45"
                  style={{
                    background: 'rgba(30, 41, 59, 0.4)',
                    backdropFilter: 'blur(16px)',
                    borderLeft: '1px solid rgba(6, 182, 212, 0.3)',
                    borderTop: '1px solid rgba(6, 182, 212, 0.3)',
                  }}
                />
                
                {/* Typing indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="flex gap-1.5 mt-4"
                >
                  <div className="w-2 h-2 rounded-full bg-[#06B6D4]" />
                  <div className="w-2 h-2 rounded-full bg-[#06B6D4]" />
                  <div className="w-2 h-2 rounded-full bg-[#06B6D4]" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Caption with error code style */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showSecond ? 1 : 0 }}
            transition={{ delay: 0.5 }}
            className="glassmorphism rounded-xl p-4 text-center mt-8"
          >
            <p className="text-[#F43F5E] font-mono text-sm mb-1">
              ERROR 404:
            </p>
            <p className="text-white font-mono">
              Attention Span Not Found
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
