import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';

export function HeartfeltNote() {
  return (
    <section className="relative py-24 px-6 flex justify-center items-center overflow-hidden">
      {/* Background Decoration (Subtle Heartbeat) */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#F43F5E]/10 rounded-full blur-[120px]"
      />

      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              x: `${Math.random() * 100}%`,
              y: `${100 + Math.random() * 20}%`,
            }}
            animate={{
              opacity: [0, 0.3, 0],
              y: `-${20 + Math.random() * 20}%`,
              x: `${Math.random() * 100}%`,
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear",
            }}
            className="absolute"
          >
            <Heart className="w-3 h-3 text-[#F43F5E] fill-[#F43F5E]/30" />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl w-full"
      >
        <div className="glassmorphism-card rounded-3xl p-8 md:p-12 shadow-2xl relative group hover:shadow-[0_0_40px_rgba(244,63,94,0.3)] transition-all duration-500 border border-[#F43F5E]/20">
          {/* Animated border glow */}
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -inset-[1px] bg-gradient-to-r from-[#F43F5E] via-[#C026D3] to-[#F43F5E] rounded-3xl blur-sm -z-10"
            style={{ backgroundSize: '200% 200%' }}
          />

          {/* Header Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-14 h-14 bg-gradient-to-br from-[#F43F5E] to-[#C026D3] rounded-full flex items-center justify-center shadow-lg neon-glow-rose"
            >
              <Sparkles className="text-white" size={24} />
            </motion.div>
          </motion.div>

          {/* The Message */}
          <div className="space-y-6 text-center relative">
            {/* Decorative opening quote */}
            <span className="absolute -top-4 -left-2 md:top-0 md:left-4 text-6xl md:text-7xl text-[#F43F5E]/20 font-serif leading-none select-none">"</span>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-lg md:text-2xl text-[#CBD5E1] font-light leading-relaxed relative z-10 px-8 md:px-12">
                "You are the most precious gift I've found in all these years. 
                But recently? You've become so much more than that.
                <span className="text-white block mt-3" style={{ fontWeight: 500 }}>
                  You are my world now.
                </span>"
              </p>
            </motion.div>

            {/* The Hindi Line - Highlighted with handwriting effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="py-6 my-6 relative"
            >
              <motion.div
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="inline-block"
              >
                <p 
                  className="text-2xl md:text-4xl lg:text-5xl bg-gradient-to-r from-[#F43F5E] via-[#E879F9] to-[#F43F5E] bg-clip-text text-transparent"
                  style={{
                    fontFamily: "'Dancing Script', cursive",
                    backgroundSize: '200% 200%',
                    fontWeight: 600,
                  }}
                >
                  "Bas dhyan rakha kar tera..."
                </p>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="text-sm text-[#64748B] mt-3 font-mono tracking-wide"
              >
                // because you are too special to me.
              </motion.p>

              {/* Sparkle decorations */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute -left-4 top-1/2 -translate-y-1/2"
              >
                <Sparkles className="w-5 h-5 text-[#F43F5E]" />
              </motion.div>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [360, 180, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 1.5,
                }}
                className="absolute -right-4 top-1/2 -translate-y-1/2"
              >
                <Sparkles className="w-5 h-5 text-[#E879F9]" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
            >
              <p className="text-xl md:text-2xl text-[#E2E8F0] leading-relaxed">
                "I just want to be with you,{' '}
                <br className="hidden md:block" />
                <span className="text-[#06B6D4] font-mono inline-block mt-2" style={{ fontWeight: 700 }}>
                  today_and_forever
                </span>
                ."
              </p>
            </motion.div>

            {/* Decorative closing quote */}
            <span className="absolute -bottom-4 -right-2 md:bottom-0 md:right-4 text-6xl md:text-7xl text-[#F43F5E]/20 font-serif leading-none select-none">"</span>
          </div>

          {/* Bottom decoration */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-8 h-px bg-gradient-to-r from-transparent via-[#F43F5E]/50 to-transparent"
          />

          {/* Small hearts decoration */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.4 }}
            className="flex justify-center gap-3 mt-6"
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              >
                <Heart className="w-3 h-3 text-[#F43F5E] fill-[#F43F5E]" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Import Dancing Script font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
    </section>
  );
}
