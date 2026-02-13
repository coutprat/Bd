import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Lock, Radio } from 'lucide-react';

export function LocalNetwork() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6 py-16">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl text-center mb-12" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            <span className="gradient-text">Local Network</span>
          </h2>

          <div className="glassmorphism-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Mission Impossible style header */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Radio className="w-6 h-6 text-[#10B981]" />
                </motion.div>
                <span className="text-[#10B981] font-mono text-sm">LIVE</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#F43F5E]" />
                <span className="text-[#94A3B8] font-mono text-sm">CLASSIFIED</span>
              </div>
            </div>

            {/* Map visualization */}
            <div className="relative h-80 md:h-96 flex items-center justify-center mb-8">
              {/* Background grid */}
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#06B6D4" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              {/* Central pulse zone */}
              <div className="relative">
                {/* Pulsating circles */}
                <motion.div
                  animate={{
                    scale: [1, 2.5, 1],
                    opacity: [0.6, 0, 0.6],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                  className="absolute inset-0 -m-32 md:-m-40 rounded-full border-2 border-[#F43F5E]"
                />
                <motion.div
                  animate={{
                    scale: [1, 2.5, 1],
                    opacity: [0.6, 0, 0.6],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: 1,
                  }}
                  className="absolute inset-0 -m-32 md:-m-40 rounded-full border-2 border-[#06B6D4]"
                />
                <motion.div
                  animate={{
                    scale: [1, 2.5, 1],
                    opacity: [0.6, 0, 0.6],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: 2,
                  }}
                  className="absolute inset-0 -m-32 md:-m-40 rounded-full border-2 border-[#10B981]"
                />

                {/* Central point */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#F43F5E] via-[#06B6D4] to-[#10B981] flex items-center justify-center neon-glow-mixed"
                >
                  <MapPin className="w-10 h-10 text-white" />
                </motion.div>

                {/* Location label */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap"
                >
                  <p className="text-white font-mono text-lg">Vadodara</p>
                  <p className="text-[#06B6D4] text-sm font-mono">(Home Base)</p>
                </motion.div>
              </div>

              {/* Scanning effect */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#10B981] to-transparent" />
              </motion.div>
            </div>

            {/* Status cards - Bento Grid style */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glassmorphism rounded-xl p-4 border border-[#F43F5E]/30"
              >
                <p className="text-[#94A3B8] text-xs font-mono mb-2">PROXIMITY</p>
                <p className="text-2xl font-bold text-white font-mono">
                  {'<'} <span className="text-[#F43F5E]">5km</span>
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="glassmorphism rounded-xl p-4 border border-[#06B6D4]/30"
              >
                <p className="text-[#94A3B8] text-xs font-mono mb-2">PROTOCOL</p>
                <p className="text-lg font-bold text-[#06B6D4] font-mono flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  Stealth Mode
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="glassmorphism rounded-xl p-4 border border-[#10B981]/30"
              >
                <p className="text-[#94A3B8] text-xs font-mono mb-2">STATUS</p>
                <p className="text-lg font-bold text-[#10B981] font-mono flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  Chupke Chupke
                </p>
              </motion.div>
            </div>

            {/* Footer note */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="mt-6 text-center"
            >
              <p className="text-[#94A3B8] text-xs font-mono">
                // Mission Objective: Meet without detection. Status: In Progress
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
