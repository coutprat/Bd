import React from 'react';
import { motion } from 'motion/react';

export function DistanceMap() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6 py-16">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glassmorphism rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Background grid pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#22D3EE" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              Distance Map
            </h2>

            {/* Map visualization */}
            <div className="relative h-64 md:h-80 flex items-center justify-center">
              {/* Connection line */}
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  d="M 20% 50% Q 50% 20%, 80% 50%"
                  stroke="#22D3EE"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                  fill="none"
                  opacity="0.6"
                />
              </svg>

              {/* Vadodara - Left point */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute left-[20%] top-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.7, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-6 h-6 rounded-full bg-[#F43F5E] neon-glow-rose"
                />
                <p className="text-white text-sm mt-3 whitespace-nowrap font-mono">Vadodara</p>
              </motion.div>

              {/* Her City - Right point */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, type: "spring" }}
                className="absolute left-[80%] top-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.7, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="w-6 h-6 rounded-full bg-[#22D3EE] neon-glow-cyan"
                />
                <p className="text-white text-sm mt-3 whitespace-nowrap font-mono">Your City</p>
              </motion.div>

              {/* Label on the curve */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 2 }}
                className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2"
              >
                <p className="text-[#22D3EE] text-sm font-mono whitespace-nowrap">
                  Infinite Connection
                </p>
              </motion.div>
            </div>

            {/* Data card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="mt-12 bg-[#0F172A]/50 rounded-xl p-6 border border-[#22D3EE]/30"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
                <div>
                  <p className="text-[#94A3B8] text-sm font-mono mb-2">Distance</p>
                  <p className="text-2xl md:text-3xl font-bold text-white font-mono">
                    <span className="text-[#F43F5E]">∞</span> km
                  </p>
                </div>
                <div>
                  <p className="text-[#94A3B8] text-sm font-mono mb-2">Emotional Lag</p>
                  <p className="text-2xl md:text-3xl font-bold text-[#22D3EE] font-mono">0ms</p>
                </div>
              </div>
              <p className="text-center text-[#94A3B8] text-xs font-mono mt-4">
                // Distance means nothing when hearts are synced
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
