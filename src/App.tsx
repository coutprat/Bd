import React from 'react';
import { ParticleBackground } from './components/ParticleBackground';
import { HeroSection } from './components/HeroSection';
import { GlitchPersonality } from './components/GlitchPersonality';
import { LocalNetwork } from './components/LocalNetwork';
import { SecretMemory } from './components/SecretMemory';
import { RoastSection } from './components/RoastSection';
import { CakeSection } from './components/CakeSection';
import { HeartfeltNote } from './components/HeartfeltNote';
import { ValentineProposal } from './components/ValentineProposal';

function App() {
  // Image URLs from Unsplash
  const heroImage = "https://images.unsplash.com/photo-1761253298457-d98f628e1b1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwc21pbGluZyUyMGhhcHB5JTIwYmlydGhkYXl8ZW58MXx8fHwxNzcwOTg3MTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  
  const memoryImage = "https://images.unsplash.com/photo-1593824261342-fd6ee146f73d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMHJvb20lMjByb21hbnRpYyUyMG1lbW9yeXxlbnwxfHx8fDE3NzA5ODcxNzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  return (
    <div className="min-h-screen bg-[#020617] overflow-x-hidden relative">
      {/* Neural Network / Cellular Bond Particle Background */}
      <ParticleBackground />

      {/* Gradient orbs for depth */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#F43F5E] rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#06B6D4] rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#10B981] rounded-full mix-blend-multiply filter blur-[120px] opacity-10 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Main content */}
      <main className="relative z-10">
        <HeroSection heroImage={heroImage} />
        
        {/* Bento Grid Layout for Desktop */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="lg:col-span-1">
              <GlitchPersonality />
            </div>
            <div className="lg:col-span-1">
              <LocalNetwork />
            </div>
          </div>
        </div>
        
        <SecretMemory memoryImage={memoryImage} />
        <RoastSection />
        <CakeSection />
        <HeartfeltNote />
        <ValentineProposal />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[#94A3B8] text-sm font-mono mb-3">
            Crafted with <span className="text-[#F43F5E]">❤️</span>, <span className="text-[#06B6D4]">{'<code/>'}</span>, and <span className="text-[#10B981]">🧬</span>
          </p>
          <p className="text-[#94A3B8] text-xs font-mono">
            // Bio-Digital Fusion: Where The Engineer meets The Scientist
          </p>
          <div className="mt-4 flex justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#F43F5E] animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;