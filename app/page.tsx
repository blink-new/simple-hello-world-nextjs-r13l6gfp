'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black">
        <div className="h-[600px] w-[600px] rounded-full bg-gradient-to-r from-violet-500/30 to-cyan-500/30 blur-[120px]" />
      </div>

      {/* Grid pattern */}
      <div 
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px]"
        style={{ maskImage: 'radial-gradient(circle, transparent 30%, black)' }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="group relative px-8"
        >
          <div className="absolute -inset-x-2 -inset-y-2 z-0 hidden rounded-lg bg-gradient-to-r from-violet-500/50 to-cyan-500/50 opacity-0 blur-xl transition duration-1000 group-hover:opacity-100 group-hover:duration-200 md:block" />
          <div className="absolute -inset-x-2 -inset-y-2 z-10 hidden rounded-lg bg-gradient-to-r from-violet-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 md:block" />
          <h1 className="relative z-20 bg-gradient-to-b from-white to-white/70 bg-clip-text font-mono text-5xl font-bold tracking-tighter text-transparent md:text-7xl">
            Hello World
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative mt-8"
        >
          <div className="absolute inset-x-0 -top-2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <p className="bg-gradient-to-b from-white/80 to-white/50 bg-clip-text font-mono text-sm text-transparent md:text-base">
            Welcome to your minimalist Vercel-style site
          </p>
          <div className="absolute inset-x-0 -bottom-2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </motion.div>
      </motion.div>

      {/* Corner badge */}
      <div className="absolute bottom-8 flex items-center space-x-2 text-sm text-white/40">
        <div className="h-2 w-2 rounded-full bg-emerald-500/80" />
        <span className="font-mono">Ready to deploy</span>
      </div>
    </main>
  );
}