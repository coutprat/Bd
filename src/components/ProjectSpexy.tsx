import React from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, Lock, Eye } from 'lucide-react';

export function ProjectSpexy() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        rotateY: 5, 
        rotateX: -5,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className="relative group"
      style={{ perspective: 1000 }}
    >
      {/* Mathematical formulas background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden rounded-3xl">
        <div className="absolute inset-0 text-[#06B6D4] text-xs font-mono leading-relaxed p-4">
          <div className="space-y-2">
            <div>∫(x² + 2x + 1)dx = x³/3 + x² + x + C</div>
            <div>lim(x→∞) (1 + 1/x)ˣ = e</div>
            <div>d/dx(sin x) = cos x</div>
            <div>√(a² + b²) = c</div>
            <div>Σ(n=1 to ∞) 1/n² = π²/6</div>
            <div>∇²φ = ρ/ε₀</div>
            <div className="opacity-50">A = πr²</div>
            <div className="opacity-50">E = mc²</div>
            <div>∂u/∂t = α∇²u</div>
          </div>
        </div>
      </div>

      {/* Main card with glassmorphism */}
      <div className="glassmorphism-card rounded-3xl p-8 border-2 border-[#06B6D4]/20 relative overflow-hidden group-hover:border-[#06B6D4]/40 transition-all duration-300">
        {/* Classified stamp overlay */}
        <motion.div
          animate={{
            rotate: [-2, 2, -2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-4 right-4 border-4 border-[#EF4444] rounded-lg px-4 py-2 opacity-30 group-hover:opacity-50 transition-opacity"
          style={{ transform: 'rotate(12deg)' }}
        >
          <p className="text-[#EF4444] font-mono text-lg tracking-widest">
            CLASSIFIED
          </p>
        </motion.div>

        {/* Header section */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Lock className="w-4 h-4 text-[#EF4444]" />
            <p className="text-[#94A3B8] text-xs font-mono tracking-wider">
              CONFIDENTIAL FILE #0042
            </p>
          </div>
          <h3 
            className="text-3xl md:text-4xl text-white mb-2"
            style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 700 }}
          >
            Project: <span className="text-[#06B6D4] neon-glow-cyan">SPEXY</span>
          </h3>
        </div>

        {/* Central eyeglasses icon - the focal point */}
        <motion.div
          className="flex justify-center my-8"
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="relative"
          >
            {/* Glowing aura */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="absolute inset-0 bg-[#06B6D4] rounded-full blur-3xl"
            />
            
            {/* Glasses SVG */}
            <svg
              width="120"
              height="80"
              viewBox="0 0 120 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative z-10 drop-shadow-[0_0_20px_rgba(6,182,212,0.8)]"
            >
              {/* Left lens */}
              <motion.ellipse
                cx="30"
                cy="40"
                rx="22"
                ry="18"
                stroke="#06B6D4"
                strokeWidth="3"
                fill="rgba(6, 182, 212, 0.1)"
                animate={{
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              
              {/* Right lens */}
              <motion.ellipse
                cx="90"
                cy="40"
                rx="22"
                ry="18"
                stroke="#06B6D4"
                strokeWidth="3"
                fill="rgba(6, 182, 212, 0.1)"
                animate={{
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.5,
                }}
              />
              
              {/* Bridge */}
              <line
                x1="52"
                y1="40"
                x2="68"
                y2="40"
                stroke="#06B6D4"
                strokeWidth="3"
                strokeLinecap="round"
              />
              
              {/* Left temple */}
              <path
                d="M 8 40 L 8 35"
                stroke="#06B6D4"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              
              {/* Right temple */}
              <path
                d="M 112 40 L 112 35"
                stroke="#06B6D4"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              
              {/* Sparkles */}
              <motion.circle
                cx="25"
                cy="25"
                r="2"
                fill="#06B6D4"
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0,
                }}
              />
              <motion.circle
                cx="95"
                cy="28"
                r="2"
                fill="#06B6D4"
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1,
                }}
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* Image redacted section */}
        <div className="bg-[#020617] border-2 border-dashed border-[#EF4444] rounded-xl p-6 mb-6 relative overflow-hidden">
          <motion.div
            animate={{
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="absolute inset-0 bg-gradient-to-r from-[#EF4444]/10 to-transparent"
          />
          
          <div className="relative z-10 flex flex-col items-center gap-3">
            <Eye className="w-8 h-8 text-[#EF4444]" strokeWidth={1.5} />
            <div className="bg-[#EF4444] px-4 py-1 rounded text-white font-mono text-xs tracking-widest">
              [ IMAGE REDACTED ]
            </div>
            <p className="text-[#94A3B8] text-sm font-mono text-center">
              CLEARANCE LEVEL: INSUFFICIENT
            </p>
          </div>
          
          {/* Redaction bars */}
          <div className="absolute inset-0 flex flex-col justify-center gap-2 px-4">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="h-2 bg-black/50 rounded"
                style={{ width: `${60 + Math.random() * 30}%` }}
              />
            ))}
          </div>
        </div>

        {/* Status and warning */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-[#F59E0B]" />
            <p className="text-[#F59E0B] font-mono text-sm">
              WARNING: Too dangerous to publish.
            </p>
          </div>
          
          <div className="glassmorphism rounded-lg px-4 py-2 border border-white/10">
            <p className="text-[#94A3B8] text-xs font-mono">
              <span className="text-[#06B6D4]">Status:</span> ARCHIVED — MEMORY PRESERVED
            </p>
          </div>
        </div>

        {/* Sticky Note - The Memory Note */}
        <motion.div
          initial={{ rotate: -2, y: 10 }}
          whileHover={{ 
            rotate: 0, 
            y: 0,
            boxShadow: '0 10px 30px rgba(251, 191, 36, 0.3)',
          }}
          className="relative bg-gradient-to-br from-[#FCD34D] to-[#F59E0B] rounded-lg p-5 shadow-xl"
          style={{
            background: 'linear-gradient(135deg, #FCD34D 0%, #F59E0B 100%)',
          }}
        >
          {/* Tape effect at top */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-white/40 rounded-sm" />
          
          <div className="relative">
            <p className="text-[#78350F] text-xs font-mono mb-2 tracking-wide">
              📍 MEMORY LOG:
            </p>
            <div className="space-y-1">
              <p className="text-[#78350F] font-semibold">
                <span className="opacity-70">Location:</span> Coaching Classes
              </p>
              <p className="text-[#78350F] font-semibold">
                <span className="opacity-70">Era:</span> The Specs Days
              </p>
              <p 
                className="text-[#92400E] text-lg italic mt-2"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                "When science met style..."
              </p>
            </div>
          </div>

          {/* Pin/tack decoration */}
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-3 -right-3 w-6 h-6 bg-[#EF4444] rounded-full border-4 border-white shadow-lg"
          />
        </motion.div>

        {/* Bottom metadata */}
        <div className="mt-6 pt-4 border-t border-white/10">
          <div className="flex items-center justify-between text-xs font-mono text-[#64748B]">
            <span>FILE_ID: SPEXY_V1.0</span>
            <span>EST. 2019-2020</span>
          </div>
        </div>
      </div>

      {/* Outer glow on hover */}
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-[#06B6D4] via-[#F59E0B] to-[#06B6D4] rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        style={{
          backgroundSize: '200% 200%',
        }}
      />

      {/* Import Dancing Script font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
    </motion.div>
  );
}
