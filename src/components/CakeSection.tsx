import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, VolumeX, Check, Sparkles, Music } from 'lucide-react';

export function CakeSection() {
  const [isCut, setIsCut] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [confettiParticles, setConfettiParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    color: string;
    rotation: number;
    scale: number;
  }>>([]);

  useEffect(() => {
    // Initialize audio - replace with your audio file
    audioRef.current = new Audio('https://cdn.pixabay.com/audio/2022/03/10/audio_4a96b6c6c7.mp3');
    audioRef.current.loop = true;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const triggerConfetti = () => {
    const particles = [];
    const colors = ['#F43F5E', '#F59E0B', '#06B6D4', '#10B981', '#E879F9'];
    
    for (let i = 0; i < 60; i++) {
      particles.push({
        id: i,
        x: (Math.random() - 0.5) * 120,
        y: -20,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        scale: Math.random() * 0.6 + 0.4,
      });
    }
    
    setConfettiParticles(particles);
    
    setTimeout(() => {
      setConfettiParticles([]);
    }, 3500);
  };

  const handleCakeClick = () => {
    if (!isCut) {
      // Trigger confetti
      triggerConfetti();
      
      // Play audio with smooth fade in
      if (audioRef.current) {
        audioRef.current.volume = 0;
        audioRef.current.play().then(() => {
          setIsAudioPlaying(true);
          
          // Smooth volume fade in
          let vol = 0;
          const interval = setInterval(() => {
            if (vol < 0.7) {
              vol += 0.05;
              if (audioRef.current) {
                audioRef.current.volume = Math.min(vol, 0.7);
              }
            } else {
              clearInterval(interval);
            }
          }, 100);
        }).catch(err => {
          console.log('Audio play is optional:', err);
          setIsAudioPlaying(false);
        });
      }

      setIsCut(true);
    }
  };

  const toggleAudio = () => {
    if (audioRef.current) {
      try {
        if (isAudioPlaying) {
          audioRef.current.pause();
          setIsAudioPlaying(false);
        } else {
          audioRef.current.play().then(() => {
            setIsAudioPlaying(true);
          }).catch(err => {
            console.log('Audio toggle failed:', err);
            setIsAudioPlaying(false);
          });
        }
      } catch (err) {
        console.log('Audio control error:', err);
      }
    }
  };

  return (
    <section className="relative py-24 px-6 flex flex-col items-center justify-center min-h-screen overflow-hidden">
      {/* Particle Mesh Background Overlay */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="particle-mesh" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              {/* Dots */}
              <circle cx="0" cy="0" r="1.5" fill="#06B6D4" opacity="0.3" />
              <circle cx="50" cy="50" r="1.5" fill="#F43F5E" opacity="0.3" />
              <circle cx="100" cy="0" r="1.5" fill="#06B6D4" opacity="0.3" />
              <circle cx="0" cy="100" r="1.5" fill="#F59E0B" opacity="0.3" />
              {/* Lines */}
              <line x1="0" y1="0" x2="50" y2="50" stroke="#06B6D4" strokeWidth="0.5" opacity="0.2" />
              <line x1="50" y1="50" x2="100" y2="0" stroke="#F43F5E" strokeWidth="0.5" opacity="0.2" />
              <line x1="0" y1="0" x2="0" y2="100" stroke="#F59E0B" strokeWidth="0.5" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#particle-mesh)" />
        </svg>
      </div>

      {/* Circular Spotlight Effect */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.2) 0%, rgba(244, 63, 94, 0.1) 40%, transparent 70%)',
        }}
      />
      
      {/* Dimmed background when celebrating */}
      <AnimatePresence>
        {isCut && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#020617]/90 backdrop-blur-md z-0"
          />
        )}
      </AnimatePresence>

      {/* Confetti particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
        {confettiParticles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{
              x: '50%',
              y: '45%',
              opacity: 1,
              rotate: 0,
              scale: 0,
            }}
            animate={{
              x: `calc(50% + ${particle.x}vw)`,
              y: '120%',
              opacity: [1, 1, 0.8, 0],
              rotate: particle.rotation * 5,
              scale: [0, particle.scale, particle.scale, particle.scale * 0.3],
            }}
            transition={{
              duration: 3,
              ease: [0.17, 0.67, 0.83, 0.67],
            }}
            className="absolute"
          >
            <div
              className="w-3 h-3 rounded-sm"
              style={{
                backgroundColor: particle.color,
                boxShadow: `0 0 12px ${particle.color}`,
              }}
            />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-5xl w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{
              boxShadow: [
                '0 0 20px rgba(245, 158, 11, 0.3)',
                '0 0 40px rgba(245, 158, 11, 0.5)',
                '0 0 20px rgba(245, 158, 11, 0.3)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-flex items-center gap-3 px-6 py-3 glassmorphism rounded-full border border-[#F59E0B]/40"
          >
            <Sparkles className="w-5 h-5 text-[#F59E0B]" />
            <span className="text-white text-sm font-mono tracking-[0.3em] uppercase">
              Protocol: Make a Wish
            </span>
            <Sparkles className="w-5 h-5 text-[#F59E0B]" />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-[#94A3B8] text-sm font-mono"
          >
            // THE DIGITAL RITUAL
          </motion.p>
        </motion.div>

        {/* The Cake Stage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring" }}
          className="flex flex-col items-center justify-center relative"
        >
          {/* The Holographic Cake with Knife */}
          <motion.div
            whileHover={!isCut ? { scale: 1.03 } : {}}
            className={`relative ${!isCut ? 'cursor-pointer' : ''}`}
            onClick={handleCakeClick}
          >
            {/* Pulsing glow effect */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-gradient-to-br from-[#F59E0B] via-[#F43F5E] to-[#F59E0B] blur-[60px] opacity-40"
            />

            {/* Main Cake SVG */}
            <svg
              width="400"
              height="380"
              viewBox="0 0 400 380"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative z-10"
            >
              <defs>
                {/* Gradient definitions */}
                <linearGradient id="cakeGold" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="cakeRose" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#F43F5E" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#F43F5E" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="cakeCyan" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.1" />
                </linearGradient>
                
                {/* Glow filter */}
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Left Half of Cake (slides left when cut) */}
              <motion.g
                animate={isCut ? { x: -40, opacity: 0.6 } : { x: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                {/* Bottom layer - Left half */}
                <path
                  d="M 80 240 L 200 240 L 200 265 L 90 265 Z"
                  stroke="#F59E0B"
                  strokeWidth="2.5"
                  fill="url(#cakeGold)"
                  filter="url(#glow)"
                />
                <path
                  d="M 80 240 L 200 240 L 200 230 L 80 230 Z"
                  stroke="#F59E0B"
                  strokeWidth="2"
                  fill="rgba(245, 158, 11, 0.05)"
                />

                {/* Middle layer - Left half */}
                <path
                  d="M 100 180 L 200 180 L 200 200 L 110 200 Z"
                  stroke="#F43F5E"
                  strokeWidth="2.5"
                  fill="url(#cakeRose)"
                  filter="url(#glow)"
                />
                <path
                  d="M 100 180 L 200 180 L 200 170 L 100 170 Z"
                  stroke="#F43F5E"
                  strokeWidth="2"
                  fill="rgba(244, 63, 94, 0.05)"
                />

                {/* Top layer - Left half */}
                <path
                  d="M 120 120 L 200 120 L 200 140 L 130 140 Z"
                  stroke="#06B6D4"
                  strokeWidth="2.5"
                  fill="url(#cakeCyan)"
                  filter="url(#glow)"
                />
                <path
                  d="M 120 120 L 200 120 L 200 110 L 120 110 Z"
                  stroke="#06B6D4"
                  strokeWidth="2"
                  fill="rgba(6, 182, 212, 0.05)"
                />
              </motion.g>

              {/* Right Half of Cake (slides right when cut) */}
              <motion.g
                animate={isCut ? { x: 40, opacity: 0.6 } : { x: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                {/* Bottom layer - Right half */}
                <path
                  d="M 200 240 L 320 240 L 310 265 L 200 265 Z"
                  stroke="#F59E0B"
                  strokeWidth="2.5"
                  fill="url(#cakeGold)"
                  filter="url(#glow)"
                />
                <path
                  d="M 200 240 L 320 240 L 320 230 L 200 230 Z"
                  stroke="#F59E0B"
                  strokeWidth="2"
                  fill="rgba(245, 158, 11, 0.05)"
                />

                {/* Middle layer - Right half */}
                <path
                  d="M 200 180 L 300 180 L 290 200 L 200 200 Z"
                  stroke="#F43F5E"
                  strokeWidth="2.5"
                  fill="url(#cakeRose)"
                  filter="url(#glow)"
                />
                <path
                  d="M 200 180 L 300 180 L 300 170 L 200 170 Z"
                  stroke="#F43F5E"
                  strokeWidth="2"
                  fill="rgba(244, 63, 94, 0.05)"
                />

                {/* Top layer - Right half */}
                <path
                  d="M 200 120 L 280 120 L 270 140 L 200 140 Z"
                  stroke="#06B6D4"
                  strokeWidth="2.5"
                  fill="url(#cakeCyan)"
                  filter="url(#glow)"
                />
                <path
                  d="M 200 120 L 280 120 L 280 110 L 200 110 Z"
                  stroke="#06B6D4"
                  strokeWidth="2"
                  fill="rgba(6, 182, 212, 0.05)"
                />
              </motion.g>

              {/* Cut line (appears when cut) */}
              <AnimatePresence>
                {isCut && (
                  <motion.line
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={{ opacity: 1, pathLength: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    x1="200"
                    y1="110"
                    x2="200"
                    y2="265"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    opacity="0.5"
                  />
                )}
              </AnimatePresence>

              {/* Candle (disappears when cut) */}
              <AnimatePresence>
                {!isCut && (
                  <motion.g
                    exit={{ opacity: 0, y: -20, scale: 0.5 }}
                    transition={{ duration: 0.6 }}
                  >
                    <rect
                      x="190"
                      y="85"
                      width="20"
                      height="25"
                      stroke="#E2E8F0"
                      strokeWidth="2"
                      fill="rgba(226, 232, 240, 0.1)"
                      rx="2"
                    />
                    
                    {/* Flame */}
                    <motion.g
                      animate={{
                        y: [0, -2, 0],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <ellipse
                        cx="200"
                        cy="75"
                        rx="10"
                        ry="15"
                        fill="#F59E0B"
                        filter="url(#glow)"
                      />
                      <ellipse
                        cx="200"
                        cy="77"
                        rx="6"
                        ry="10"
                        fill="#FCD34D"
                      />
                      <ellipse
                        cx="200"
                        cy="79"
                        rx="3"
                        ry="6"
                        fill="#FFFFFF"
                        opacity="0.8"
                      />
                    </motion.g>
                  </motion.g>
                )}
              </AnimatePresence>

              {/* Knife (animates cutting motion) */}
              <motion.g
                initial={{ x: -100, y: -50, rotate: -45, opacity: 0 }}
                animate={!isCut ? 
                  { x: -80, y: -30, rotate: -35, opacity: 0.7 } : 
                  { x: 0, y: 50, rotate: 0, opacity: 0 }
                }
                transition={{ 
                  duration: isCut ? 0.8 : 1.2,
                  ease: isCut ? "easeIn" : "easeOut",
                }}
              >
                {/* Knife blade */}
                <path
                  d="M 230 60 L 270 100 L 268 102 L 228 62 Z"
                  fill="#CBD5E1"
                  stroke="#94A3B8"
                  strokeWidth="1.5"
                  filter="url(#glow)"
                />
                {/* Knife handle */}
                <rect
                  x="215"
                  y="45"
                  width="20"
                  height="8"
                  rx="4"
                  fill="#334155"
                  stroke="#475569"
                  strokeWidth="1"
                  transform="rotate(-45 225 49)"
                />
              </motion.g>

              {/* Decorative sparkles (only before cut) */}
              {!isCut && (
                <>
                  <motion.circle
                    cx="90"
                    cy="140"
                    r="3"
                    fill="#F59E0B"
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1.2, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0,
                    }}
                  />
                  <motion.circle
                    cx="310"
                    cy="190"
                    r="3"
                    fill="#F43F5E"
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1.2, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.7,
                    }}
                  />
                  <motion.circle
                    cx="290"
                    cy="130"
                    r="2.5"
                    fill="#06B6D4"
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1.2, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 1.4,
                    }}
                  />
                </>
              )}

              {/* Frosting details */}
              <motion.path
                d="M 120 110 Q 140 105, 160 110 T 200 110 T 240 110 T 280 110"
                stroke="#FFFFFF"
                strokeWidth="2"
                fill="none"
                opacity="0.3"
                strokeLinecap="round"
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
            </svg>

            {/* Click instruction tooltip */}
            <AnimatePresence>
              {!isCut && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="absolute -bottom-20 left-1/2 -translate-x-1/2 glassmorphism rounded-full px-8 py-3 border border-[#F59E0B]/40 whitespace-nowrap"
                >
                  <p className="text-[#F59E0B] font-mono flex items-center gap-3">
                    <motion.span
                      animate={{ 
                        scale: [1, 1.3, 1],
                        rotate: [-10, 10, -10],
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="text-xl"
                    >
                      🔪
                    </motion.span>
                    <span>Click to Cut the Cake</span>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Celebration State */}
          <AnimatePresence>
            {isCut && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-16 text-center space-y-8 w-full max-w-lg mx-auto"
              >
                {/* Success message */}
                <motion.div
                  initial={{ scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.8 }}
                  className="glassmorphism rounded-2xl px-8 py-5 inline-flex items-center gap-4 border border-[#10B981]/40 shadow-lg shadow-[#10B981]/20"
                >
                  <Check className="w-6 h-6 text-[#10B981]" />
                  <div className="text-left">
                    <p className="text-white font-mono text-lg">Wish Registered</p>
                    <p className="text-[#94A3B8] text-xs font-mono mt-1">STATUS: GRANTED ✨</p>
                  </div>
                </motion.div>

                {/* Now Playing Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="glassmorphism-card rounded-3xl p-8 border border-[#06B6D4]/30 shadow-2xl"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Music className="w-5 h-5 text-[#06B6D4]" />
                    <p className="text-[#94A3B8] text-sm font-mono tracking-wider">NOW PLAYING:</p>
                  </div>
                  
                  <p className="text-white text-xl mb-6" style={{ fontFamily: "'Dancing Script', cursive" }}>
                    Happy Birthday Melody 🎵
                  </p>
                  
                  {/* Audio Visualizer */}
                  <div className="flex items-end justify-center gap-2 h-20 mb-6 px-4">
                    {[...Array(9)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-2 rounded-full bg-gradient-to-t from-[#06B6D4] via-[#F43F5E] to-[#F59E0B]"
                        animate={isAudioPlaying ? {
                          height: [
                            '30%',
                            `${Math.random() * 50 + 50}%`,
                            `${Math.random() * 40 + 35}%`,
                            `${Math.random() * 50 + 50}%`,
                            '30%',
                          ],
                        } : {
                          height: '20%',
                        }}
                        transition={{
                          duration: 0.7,
                          repeat: Infinity,
                          delay: i * 0.08,
                          ease: "easeInOut",
                        }}
                        style={{
                          boxShadow: isAudioPlaying ? '0 0 10px rgba(6, 182, 212, 0.5)' : 'none',
                        }}
                      />
                    ))}
                  </div>

                  {/* Audio control */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleAudio}
                    className="glassmorphism rounded-xl px-6 py-3 text-sm font-mono text-white hover:bg-white/10 transition-all flex items-center gap-3 mx-auto border border-white/10"
                  >
                    {isAudioPlaying ? (
                      <>
                        <Volume2 className="w-5 h-5 text-[#10B981]" />
                        <span>Playing...</span>
                      </>
                    ) : (
                      <>
                        <VolumeX className="w-5 h-5 text-[#94A3B8]" />
                        <span>Paused</span>
                      </>
                    )}
                  </motion.button>
                </motion.div>

                {/* Continue indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5 }}
                  className="pt-8"
                >
                  <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <p className="text-[#94A3B8] text-sm font-mono mb-3 tracking-wider">
                      SCROLL TO CONTINUE
                    </p>
                    <div className="w-7 h-12 border-2 border-[#94A3B8]/50 rounded-full mx-auto relative">
                      <motion.div
                        animate={{ y: [0, 16, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                        className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#F43F5E] rounded-full shadow-lg shadow-[#F43F5E]/50"
                      />
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Audio queued indicator (before cut) */}
        <AnimatePresence>
          {!isCut && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: 0.5 }}
              className="absolute top-8 right-4 md:right-8 glassmorphism rounded-xl px-5 py-3 flex items-center gap-3 border border-white/10 shadow-lg"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <Volume2 className="w-5 h-5 text-[#06B6D4]" />
              </motion.div>
              <span className="text-[#94A3B8] text-sm font-mono">Audio Queued...</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Import Dancing Script font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
    </section>
  );
}
