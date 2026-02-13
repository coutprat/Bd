import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles, Zap } from 'lucide-react';

export function ValentineProposal() {
  const [showCelebration, setShowCelebration] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noButtonAttempts, setNoButtonAttempts] = useState(0);
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const runAwayFromCursor = (e: React.MouseEvent) => {
    if (!noButtonRef.current || !containerRef.current) return;

    const button = noButtonRef.current.getBoundingClientRect();
    const container = containerRef.current.getBoundingClientRect();
    
    const buttonCenterX = button.left + button.width / 2;
    const buttonCenterY = button.top + button.height / 2;
    const distanceX = e.clientX - buttonCenterX;
    const distanceY = e.clientY - buttonCenterY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    if (distance < 120) {
      const angle = Math.atan2(distanceY, distanceX);
      const runDistance = 200;
      
      let newX = -Math.cos(angle) * runDistance;
      let newY = -Math.sin(angle) * runDistance;

      const maxX = container.width / 2 - button.width;
      const maxY = container.height / 2 - button.height;
      newX = Math.max(-maxX, Math.min(maxX, newX));
      newY = Math.max(-maxY, Math.min(maxY, newY));

      setNoButtonPosition({ x: newX, y: newY });
      setNoButtonAttempts(prev => prev + 1);
    }
  };

  const handleYesClick = () => {
    setShowCelebration(true);
  };

  const messages = [
    "No",
    "Try clicking me! 😏",
    "Oops, missed! 😅",
    "So close! 😆",
    "Nice try! 🏃",
    "Come on! 💕",
    "Just say yes! 😘",
    "You know you want to! 💖",
    "Give up already! ❤️",
  ];

  const getNoButtonText = () => {
    return messages[Math.min(noButtonAttempts, messages.length - 1)];
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-16 relative overflow-hidden">
      {/* Floating hearts background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0,
              y: '100vh',
              x: `${Math.random() * 100}vw`,
            }}
            animate={{
              opacity: [0, 1, 0],
              y: '-20vh',
              rotate: 360,
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
            className="absolute"
          >
            <Heart className="w-4 h-4 text-[#F43F5E] fill-[#F43F5E]" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-5xl w-full relative z-10" ref={containerRef}>
        <AnimatePresence mode="wait">
          {!showCelebration ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center"
            >
              {/* Decorative tech elements */}
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                }}
                className="mx-auto mb-8 w-32 h-32 relative"
              >
                <div className="absolute inset-0 border-4 border-[#F43F5E] rounded-full opacity-20" />
                <div className="absolute inset-3 border-4 border-[#06B6D4] rounded-full opacity-20" />
                <div className="absolute inset-6 border-4 border-[#10B981] rounded-full opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="glassmorphism rounded-full p-6 neon-glow-mixed">
                    <Heart className="w-12 h-12 text-[#F43F5E] fill-[#F43F5E]" />
                  </div>
                </div>
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl lg:text-6xl mb-6" 
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                <span className="gradient-text">
                  Initialize Valentine
                  <br />
                  Protocol?
                </span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="glassmorphism rounded-xl px-6 py-3 inline-block mb-12"
              >
                <p className="text-[#94A3B8] font-mono text-sm flex items-center gap-2">
                  <motion.span
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Zap className="w-4 h-4 text-[#10B981]" />
                  </motion.span>
                  {'>'} Executing: love_confession.exe
                </p>
              </motion.div>

              {/* Buttons */}
              <div 
                className="flex flex-col sm:flex-row gap-6 justify-center items-center min-h-[150px] relative px-4"
                onMouseMove={runAwayFromCursor}
              >
                {/* YES Button - Irresistible */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleYesClick}
                  className="relative group"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -inset-2 bg-gradient-to-r from-[#F43F5E] via-[#FF6B9D] to-[#F43F5E] rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="relative bg-gradient-to-r from-[#F43F5E] to-[#FF1744] text-white px-16 py-5 rounded-2xl font-bold text-2xl shadow-2xl neon-glow-rose overflow-hidden">
                    <motion.div
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    />
                    <span className="relative z-10 flex items-center gap-3">
                      YES! 
                      <motion.span
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                      >
                        ❤️
                      </motion.span>
                    </span>
                  </div>
                </motion.button>

                {/* NO Button - The Runaway (smaller, off-center, unstable) */}
                <motion.button
                  ref={noButtonRef}
                  animate={{
                    x: noButtonPosition.x,
                    y: noButtonPosition.y,
                    rotate: noButtonAttempts * 10,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="glassmorphism border border-white/20 text-white/40 px-8 py-3 rounded-xl text-base hover:scale-95 transition-all relative"
                  style={{ 
                    opacity: Math.max(0.2, 1 - noButtonAttempts * 0.08),
                    transform: `scale(${Math.max(0.7, 1 - noButtonAttempts * 0.05)})`,
                  }}
                >
                  {getNoButtonText()}
                </motion.button>
              </div>

              {/* Hint */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="glassmorphism rounded-xl px-6 py-3 inline-block mt-12"
              >
                <p className="text-[#94A3B8] text-sm font-mono">
                  // Pro tip: The "No" button has a mind of its own 😏
                </p>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="text-center"
            >
              {/* Success celebration */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  scale: { duration: 1, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                }}
                className="mx-auto mb-8 w-40 h-40 rounded-full bg-gradient-to-br from-[#F43F5E] via-[#06B6D4] to-[#10B981] flex items-center justify-center neon-glow-mixed relative"
              >
                <Heart className="w-20 h-20 text-white fill-white" />
                {/* Orbiting particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.1,
                    }}
                    className="absolute inset-0"
                    style={{
                      transform: `rotate(${i * 45}deg)`,
                    }}
                  >
                    <div className="absolute top-0 left-1/2 w-3 h-3 bg-white rounded-full -translate-x-1/2" />
                  </motion.div>
                ))}
              </motion.div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                <motion.span
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="gradient-animated bg-clip-text text-transparent inline-block"
                  style={{
                    backgroundSize: '200% 200%',
                  }}
                >
                  Perfect! 💕
                </motion.span>
              </h2>

              <div className="glassmorphism-card rounded-3xl p-8 md:p-12 max-w-2xl mx-auto mb-12 border border-[#10B981]/30">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <p className="text-white text-2xl mb-6">
                    I knew you'd say yes! 🎉
                  </p>
                  <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-6" />
                  <p className="text-[#94A3B8] text-lg leading-relaxed">
                    Happy 21st Birthday, Lisha! 🎂
                    <br />
                    Here's to more spontaneous reels, endless laughs,
                    <br />
                    and unforgettable memories together.
                  </p>
                </motion.div>
              </div>

              {/* Sparkles animation */}
              <div className="flex justify-center gap-6 mb-8">
                {[...Array(7)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -30, 0],
                      opacity: [1, 0.5, 1],
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  >
                    <Sparkles className="w-6 h-6 text-[#F43F5E]" />
                  </motion.div>
                ))}
              </div>

              {/* Success status */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="glassmorphism rounded-xl px-6 py-3 inline-block"
              >
                <p className="text-[#10B981] font-mono text-sm flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  {'>'} Mission Status: ACCOMPLISHED ✓
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}