import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Code, Activity } from 'lucide-react';

interface HeroSectionProps {
  heroImage: string;
}

export function HeroSection({ heroImage }: HeroSectionProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentPhase, setCurrentPhase] = useState<'typing' | 'pausing' | 'backspacing' | 'retyping' | 'complete'>('typing');
  const [showMemoryNote, setShowMemoryNote] = useState(false);
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const beforeName = 'Happy 21st, ';
    const oldName = 'Lisha';
    const newName = 'Dhoklii ❤️';
    const fullOldText = beforeName + oldName;

    const phases = {
      typing: () => {
        if (displayedText.length < fullOldText.length) {
          setDisplayedText(fullOldText.slice(0, displayedText.length + 1));
          timeout = setTimeout(phases.typing, 80);
        } else {
          timeout = setTimeout(() => {
            setCurrentPhase('pausing');
            timeout = setTimeout(() => {
              setCurrentPhase('backspacing');
              phases.backspacing();
            }, 1200);
          }, 100);
        }
      },
      backspacing: () => {
        if (displayedText.length > beforeName.length) {
          setDisplayedText(displayedText.slice(0, -1));
          timeout = setTimeout(phases.backspacing, 40);
        } else {
          timeout = setTimeout(() => {
            setCurrentPhase('retyping');
            phases.retyping();
          }, 300);
        }
      },
      retyping: () => {
        const currentNewLength = displayedText.length - beforeName.length;
        if (currentNewLength < newName.length) {
          setDisplayedText(beforeName + newName.slice(0, currentNewLength + 1));
          timeout = setTimeout(phases.retyping, 100);
        } else {
          setCurrentPhase('complete');
          setShowMemoryNote(true);
        }
      },
    };

    if (currentPhase === 'typing' || currentPhase === 'backspacing' || currentPhase === 'retyping') {
      phases[currentPhase]();
    }

    return () => clearTimeout(timeout);
  }, [currentPhase, displayedText]);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-12 relative">
      {/* Floating 3D DNA Helix */}
      <motion.div
        animate={{
          rotateY: [0, 360],
          y: [0, -20, 0],
        }}
        transition={{
          rotateY: { duration: 10, repeat: Infinity, ease: "linear" },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute top-20 left-4 md:left-10 hidden lg:block"
        style={{ perspective: 1000 }}
      >
        <div className="relative w-24 h-32">
          <div className="absolute inset-0">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className="absolute w-full h-2 rounded-full"
                style={{
                  top: `${i * 20}%`,
                  background: 'linear-gradient(90deg, #10B981, #06B6D4)',
                  transform: `rotateZ(${i * 30}deg)`,
                  boxShadow: '0 0 10px rgba(6, 182, 212, 0.5)',
                }}
              />
            ))}
          </div>
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <p className="text-[#06B6D4] text-xs font-mono opacity-70">
              {'<DNA/>'}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Floating Code Bracket */}
      <motion.div
        animate={{
          rotate: [0, 5, -5, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-32 md:top-40 right-4 md:right-10 hidden lg:block"
      >
        <div className="glassmorphism rounded-2xl p-6 neon-glow-cyan relative">
          <Code className="w-12 h-12 text-[#06B6D4]" />
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <p className="text-[#F43F5E] text-xs font-mono opacity-70">
              {'{code}'}
            </p>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          {/* Main Title with "The Dhoklii Correction" */}
          <div className="mb-8">
            {/* The corrected title */}
            <h1 
              className="text-4xl md:text-5xl lg:text-7xl mb-4 min-h-[5rem] flex flex-col items-center lg:items-start" 
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              {currentPhase === 'complete' ? (
                // Final state: strikethrough Lisha, highlight Dhoklii
                <span className="inline-block">
                  Happy 21st,{' '}
                  <motion.span
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: 0.3 }}
                    className="relative inline-block text-[#64748B]"
                  >
                    <span className="relative">
                      Lisha
                      <motion.span
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.5 }}
                        className="absolute left-0 top-1/2 w-full h-0.5 bg-[#64748B] origin-left"
                      />
                    </span>
                  </motion.span>
                  {' '}
                  <motion.span
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                    className="gradient-text inline-block text-5xl md:text-6xl lg:text-8xl"
                    style={{
                      background: 'linear-gradient(135deg, #F43F5E 0%, #FF6B9D 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      textShadow: '0 0 40px rgba(244, 63, 94, 0.4)',
                    }}
                  >
                    Dhoklii ❤️
                  </motion.span>
                </span>
              ) : (
                // Typing state
                <span className="text-white inline-block">
                  {displayedText}
                  {currentPhase !== 'complete' && (
                    <span className="typewriter-cursor text-[#10B981]">|</span>
                  )}
                </span>
              )}
            </h1>
            
            {/* Memory Note - The Emotional Core */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: showMemoryNote ? 1 : 0, 
                y: showMemoryNote ? 0 : 20 
              }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-3"
            >
              {/* System Note Badge */}
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(244, 63, 94, 0.2)',
                    '0 0 30px rgba(244, 63, 94, 0.4)',
                    '0 0 20px rgba(244, 63, 94, 0.2)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex flex-col items-start glassmorphism rounded-2xl px-6 py-4 border border-[#F43F5E]/30 bg-[#F43F5E]/5"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#F43F5E] animate-pulse" />
                  <p className="text-[#F43F5E] text-sm font-mono">
                    // System Note: Reverting to original nickname (v1.0)
                  </p>
                </div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-lg md:text-xl text-[#F43F5E]/90 italic"
                  style={{ 
                    fontFamily: "'Dancing Script', cursive",
                    textShadow: '0 0 20px rgba(244, 63, 94, 0.3)',
                  }}
                >
                  "The first name I ever gave you."
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
          
          {/* System Status Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5 }}
            className="glassmorphism rounded-2xl p-6 max-w-lg mx-auto lg:mx-0"
          >
            <div className="font-mono text-sm md:text-base">
              <p className="text-[#94A3B8] mb-2 flex items-center gap-2">
                <span className="text-[#10B981]">{'>'}</span> System Status:
              </p>
              <p className="text-[#06B6D4] mb-3">
                Analyzing Best Friend...
              </p>
              
              {/* Progress bar */}
              <div className="flex items-center gap-2 mb-3">
                <div className="h-2 w-full bg-[#020617] rounded-full overflow-hidden border border-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 2, delay: 3 }}
                    className="h-full gradient-animated"
                  />
                </div>
              </div>
              
              {/* Variable found */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 5 }}
                className="space-y-2"
              >
                <p className="text-[#10B981] flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  Variable Found: "Dhoklii"
                </p>
                <p className="text-[#94A3B8] text-xs pl-4">
                  // Status: Best Friend → Soulmate Upgrade Initiated
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Image with Scanning Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative w-full max-w-md">
            {/* Asymmetrical glass frame */}
            <div className="relative">
              <div 
                className="glassmorphism overflow-hidden aspect-[3/4] neon-glow-mixed relative"
                style={{
                  borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                  transform: 'rotate(-5deg)',
                }}
              >
                <img
                  src={heroImage}
                  alt="Dhoklii"
                  className="w-full h-full object-cover"
                  style={{ transform: 'rotate(5deg) scale(1.1)' }}
                />
                
                {/* Scanning laser line overlay */}
                <motion.div
                  animate={{
                    y: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 2,
                  }}
                  className="absolute inset-0 w-full h-1 bg-gradient-to-r from-transparent via-[#10B981] to-transparent opacity-70 blur-sm"
                  style={{
                    boxShadow: '0 0 20px #10B981, 0 0 40px #10B981',
                  }}
                />
                
                {/* Secondary scan line (diagonal) */}
                <motion.div
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 3,
                    delay: 1,
                  }}
                  className="absolute inset-0 h-full w-0.5 bg-gradient-to-b from-transparent via-[#06B6D4] to-transparent opacity-50 blur-sm"
                  style={{
                    boxShadow: '0 0 15px #06B6D4',
                  }}
                />
              </div>

              {/* Scanning status badge */}
              <motion.div
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute -top-4 -left-4 glassmorphism rounded-xl px-4 py-2 neon-glow-cyan border border-[#06B6D4]/30"
              >
                <p className="text-[#06B6D4] font-mono text-xs flex items-center gap-2">
                  <Activity className="w-3 h-3" />
                  SCANNING...
                </p>
              </motion.div>

              {/* Analysis Complete Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 5.5, type: "spring" }}
                className="absolute -bottom-4 -right-4 glassmorphism rounded-xl px-4 py-2 neon-glow-green border border-[#10B981]/30"
              >
                <p className="text-[#10B981] font-mono text-sm flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  Analysis Complete
                </p>
              </motion.div>
            </div>

            {/* Floating particles */}
            <motion.div
              animate={{
                y: [-10, 10, -10],
                opacity: [0.5, 1, 0.5],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-8 -right-8 w-10 h-10 rounded-lg bg-gradient-to-br from-[#F43F5E] to-[#06B6D4] blur-sm"
            />
            <motion.div
              animate={{
                y: [10, -10, 10],
                opacity: [0.5, 1, 0.5],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-8 -left-8 w-8 h-8 rounded-full bg-gradient-to-br from-[#06B6D4] to-[#10B981] blur-sm"
            />
          </div>
        </motion.div>
      </div>

      {/* Import Dancing Script font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
    </section>
  );
}