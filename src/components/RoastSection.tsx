import React from 'react';
import { motion } from 'motion/react';
import { AlertTriangle } from 'lucide-react';
import { ProjectSpexy } from './ProjectSpexy';

const FUNNY_ASSETS = [
  "https://images.unsplash.com/photo-1758598737850-d32f0ff00687?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGZ1bm55JTIwZmFjZSUyMHNpbGx5JTIwZXhwcmVzc2lvbnxlbnwxfHx8fDE3NzA5ODg5NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1587014634329-dac89ca698d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5kaWQlMjBzbGVlcGluZyUyMHdvbWFuJTIwdGlyZWR8ZW58MXx8fHwxNzcwOTg4OTU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1709603928625-dba8eba95102?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGVhdGluZyUyMG1lc3N5JTIwZnVubnl8ZW58MXx8fHwxNzcwOTg4OTU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1639351823493-9e451eca0b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMG1ha2luZyUyMHdlaXJkJTIwZmFjZSUyMGxhdWdoaW5nfGVufDF8fHx8MTc3MDk4ODk1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1770803204288-31382ee0daec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGNhc3VhbCUyMG1vbWVudCUyMGF1dGhlbnRpY3xlbnwxfHx8fDE3NzA5ODg5NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
];

export function RoastSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#0F172A] to-[#020617]" />
      
      {/* Section Header */}
      <div className="text-center mb-16 relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Warning Badge */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-flex items-center gap-2 px-4 py-2 border border-[#FCD34D]/30 rounded-full bg-[#FCD34D]/10 mb-6"
          >
            <AlertTriangle className="w-4 h-4 text-[#FCD34D]" />
            <span className="text-[#FCD34D] text-xs font-mono tracking-wider uppercase">
              Warning: Sensitive Content
            </span>
          </motion.div>

          <h2 
            className="text-3xl md:text-4xl lg:text-5xl mb-4"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            <span className="bg-gradient-to-r from-[#FCD34D] to-[#F59E0B] bg-clip-text text-transparent">
              The Training Data:
              <br />
              Unfiltered & Raw
            </span>
          </h2>
          
          <p className="text-[#94A3B8] mt-3 font-mono text-sm md:text-base">
            {'>'} Analyzing outliers... Conclusion: <span className="text-[#10B981]">Still cute.</span>
          </p>
        </motion.div>
      </div>

      {/* The Infinite Scroll Container */}
      <div className="relative">
        {/* Fade mask on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#020617] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#020617] to-transparent z-10" />
        
        <div className="flex w-full overflow-hidden">
          {/* We duplicate the list twice to create a seamless loop */}
          <motion.div 
            className="flex gap-6 pr-6"
            animate={{ x: "-50%" }}
            transition={{ 
              repeat: Infinity, 
              ease: "linear", 
              duration: 30, // Adjust speed (lower is faster)
            }}
          >
            {[...FUNNY_ASSETS, ...FUNNY_ASSETS].map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative w-64 h-80 flex-shrink-0 rounded-2xl overflow-hidden group cursor-pointer"
              >
                {/* Glass border frame */}
                <div className="absolute inset-0 glassmorphism rounded-2xl p-[2px] z-10 pointer-events-none">
                  <div className="w-full h-full rounded-2xl border-2 border-[#FCD34D]/20 group-hover:border-[#FCD34D]/50 transition-colors" />
                </div>

                {/* Image */}
                <div className="relative w-full h-full overflow-hidden bg-[#0F172A]">
                  <img 
                    src={src}
                    alt={`Anomaly ${index + 1}`}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"
                  />
                  
                  {/* Scan line effect */}
                  <motion.div
                    animate={{
                      y: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.5,
                    }}
                    className="absolute inset-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#FCD34D] to-transparent opacity-50"
                  />

                  {/* Data label overlay - always visible */}
                  <div className="absolute top-3 left-3 glassmorphism rounded-lg px-3 py-1 border border-[#FCD34D]/30">
                    <span className="text-[#FCD34D] text-xs font-mono">
                      ANOMALY #{(index % FUNNY_ASSETS.length) + 1}
                    </span>
                  </div>

                  {/* Bottom info - slides up on hover */}
                  <motion.div 
                    className="absolute bottom-0 left-0 w-full glassmorphism-card border-t border-[#FCD34D]/30 p-4"
                    initial={{ y: '100%' }}
                    whileHover={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <p className="text-white text-sm font-mono mb-1">
                      Data Point #{(index % FUNNY_ASSETS.length) + 1}
                    </p>
                    <p className="text-[#94A3B8] text-xs">
                      Classification: Outlier
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="flex-1 h-1 bg-[#020617] rounded-full overflow-hidden">
                        <div className="h-full w-full bg-gradient-to-r from-[#F43F5E] to-[#10B981]" />
                      </div>
                      <span className="text-[#10B981] text-xs font-mono">100%</span>
                    </div>
                  </motion.div>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#FCD34D] via-[#F59E0B] to-[#FCD34D] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* The Sweet Turnaround */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-3xl mx-auto text-center mt-16 px-6 relative z-10"
      >
        <div className="glassmorphism-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="absolute w-1 h-1 bg-[#F43F5E] rounded-full"
                  style={{
                    left: `${(i * 5) % 100}%`,
                    top: `${(i * 7) % 100}%`,
                  }}
                />
              ))}
            </div>
          </div>

          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative z-10"
          >
            <p className="text-lg md:text-xl lg:text-2xl text-[#94A3B8] italic leading-relaxed mb-4">
              "I gathered all this training data, and the result is always the same:"
            </p>
            
            <motion.p 
              className="text-2xl md:text-3xl lg:text-4xl not-italic mb-6"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
            >
              <span className="bg-gradient-to-r from-[#F43F5E] via-[#06B6D4] to-[#F43F5E] bg-clip-text text-transparent inline-block"
                style={{ backgroundSize: '200% 200%' }}
              >
                You are my favorite human.
              </span>
            </motion.p>

            {/* Model accuracy indicator */}
            <div className="glassmorphism rounded-xl px-6 py-3 inline-block border border-[#10B981]/30">
              <p className="text-[#10B981] font-mono text-sm flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                Model Accuracy: 100% ✓
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Project Spexy Card */}
      <div className="max-w-2xl mx-auto px-6 mt-16 relative z-10">
        <ProjectSpexy />
      </div>

      {/* Bottom decoration */}
      <div className="flex justify-center gap-2 mt-12">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            className="w-2 h-2 rounded-full bg-[#FCD34D]"
          />
        ))}
      </div>
    </section>
  );
}