import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, Unlock, ShieldAlert, CheckCircle } from 'lucide-react';

interface SecretMemoryProps {
  memoryImage: string;
}

export function SecretMemory({ memoryImage }: SecretMemoryProps) {
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6 py-16">
      <div className="max-w-3xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl text-center mb-12" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            <span className="gradient-text">Classified File</span>
          </h2>

          {/* Bio-Hazard Containment Box */}
          <div className="relative">
            {/* Warning stripes */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#F43F5E] via-[#FCD34D] to-[#F43F5E] opacity-20 blur-lg animate-pulse" />
            
            {/* File header */}
            <div className="relative glassmorphism-card rounded-t-2xl border-2 border-[#F43F5E]/50 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ShieldAlert className="w-6 h-6 text-[#F43F5E]" />
                  </motion.div>
                  <div>
                    <p className="text-[#F43F5E] font-mono text-xs">TOP SECRET</p>
                    <p className="text-white font-mono text-sm">Operation: Hospital Visit</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-[#F43F5E]" />
                    <div className="w-2 h-2 rounded-full bg-[#FCD34D]" />
                    <div className="w-2 h-2 rounded-full bg-[#10B981]" />
                  </div>
                </div>
              </div>
            </div>

            {/* File content */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative glassmorphism-card border-x-2 border-b-2 border-[#F43F5E]/50 p-8 cursor-pointer"
              onClick={() => setIsUnlocked(!isUnlocked)}
            >
              {/* Bio-hazard symbol in background */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="text-9xl"
                >
                  ☣️
                </motion.div>
              </div>

              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#F43F5E]/30">
                {/* Locked state */}
                <AnimatePresence>
                  {!isUnlocked && (
                    <motion.div
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute inset-0 z-20 flex flex-col items-center justify-center glassmorphism-card"
                    >
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="mb-6"
                      >
                        <div className="relative">
                          <Lock className="w-20 h-20 text-[#F43F5E]" />
                          <motion.div
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute inset-0 bg-[#F43F5E] blur-xl opacity-30"
                          />
                        </div>
                      </motion.div>
                      
                      <p className="text-white text-xl font-mono mb-2">Bio-Auth Required</p>
                      <p className="text-[#94A3B8] text-sm font-mono mb-4">Click to decrypt</p>
                      
                      {/* Risk level indicator */}
                      <div className="glassmorphism rounded-lg px-4 py-2 border border-[#F43F5E]/30">
                        <p className="text-[#F43F5E] text-xs font-mono">
                          RISK LEVEL: <span className="font-bold">HIGH</span>
                        </p>
                      </div>
                      
                      {/* Scanning grid effect */}
                      <motion.div
                        animate={{ y: [0, 100, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute inset-0 h-1 bg-gradient-to-r from-transparent via-[#F43F5E] to-transparent opacity-50"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Image with blur effect */}
                <motion.div
                  initial={{ filter: 'blur(30px)' }}
                  animate={{ filter: isUnlocked ? 'blur(0px)' : 'blur(30px)' }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full"
                >
                  <img
                    src={memoryImage}
                    alt="Secret Memory"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Verified indicator */}
                <AnimatePresence>
                  {isUnlocked && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="absolute top-4 right-4 glassmorphism rounded-full p-3 neon-glow-green border border-[#10B981]/50"
                    >
                      <CheckCircle className="w-8 h-8 text-[#10B981]" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Description */}
              <AnimatePresence>
                {isUnlocked && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6"
                  >
                    <div className="glassmorphism rounded-xl p-5 border border-[#10B981]/30">
                      <div className="flex items-start gap-3 mb-3">
                        <Unlock className="w-5 h-5 text-[#10B981] mt-1" />
                        <div>
                          <p className="text-[#10B981] font-mono text-sm mb-2">
                            {'>'} Decryption.complete() → Success
                          </p>
                          <p className="text-white text-base leading-relaxed">
                            The day everything changed. A random hospital visit that turned into something unforgettable. 
                            Sometimes the best moments happen when you least expect them. 💫
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-white/10">
                        <div className="text-center">
                          <p className="text-[#94A3B8] text-xs font-mono mb-1">RISK LEVEL</p>
                          <p className="text-[#F43F5E] font-mono">High</p>
                        </div>
                        <div className="text-center">
                          <p className="text-[#94A3B8] text-xs font-mono mb-1">MEMORY LEVEL</p>
                          <p className="text-[#10B981] font-mono">Core</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Bottom status bar */}
            <div className="relative glassmorphism-card rounded-b-2xl border-x-2 border-b-2 border-[#F43F5E]/50 px-4 py-3 flex justify-between items-center text-xs font-mono">
              <span className="text-[#94A3B8]">
                Status: {isUnlocked ? 
                  <span className="text-[#10B981]">DECRYPTED</span> : 
                  <span className="text-[#F43F5E]">ENCRYPTED</span>
                }
              </span>
              <span className="text-[#94A3B8]">
                Classification: <span className="text-[#F43F5E]">TOP SECRET</span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
