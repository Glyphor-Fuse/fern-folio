import React from 'react';
import BookishHero from '@/components/BookishHero';
import CuratedChapters from '@/components/CuratedChapters';
import GardenMap from '@/components/GardenMap';
import FolioSubscription from '@/components/FolioSubscription';
import { motion, useScroll, useSpring } from 'framer-motion';

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen">
      {/* Editorial Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-fern-800 origin-left z-50"
        style={{ scaleX }}
      />
      
      <nav className="fixed top-0 left-0 w-full z-40 p-6 flex justify-between items-center pointer-events-none">
        <div className="pointer-events-auto bg-white/50 backdrop-blur-md px-6 py-3 rounded-full border border-stone-200 shadow-sm">
          <span className="font-display text-xl text-stone-900">Fern & Folio</span>
        </div>
        <div className="pointer-events-auto flex gap-4">
          <button className="bg-white/50 backdrop-blur-md px-6 py-3 rounded-full border border-stone-200 shadow-sm font-serif text-sm hover:bg-white transition-colors">
            Shop
          </button>
          <button className="bg-emerald-900 text-stone-50 px-6 py-3 rounded-full shadow-lg font-serif text-sm hover:bg-emerald-800 transition-colors">
            Subscribe
          </button>
        </div>
      </nav>

      <main>
        <BookishHero />
        
        <div className="container py-20 flex flex-col items-center text-center">
          <div className="w-24 h-px bg-stone-300 mb-8" />
          <blockquote className="font-display text-3xl md:text-4xl text-stone-700 italic max-w-4xl leading-snug">
            "To plant a garden is to believe in tomorrow, and to open a book is to wander through its paths."
          </blockquote>
          <p className="mt-6 font-serif text-stone-500">— Founder, Elias Fern</p>
        </div>

        <CuratedChapters />
        
        <GardenMap />
        
        <section className="py-24 bg-[#FDFBF7]">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="w-full md:w-1/2">
                <img 
                  src="/images/staff-pick.png" 
                  alt="Staff Selection" 
                  className="rounded-[60px] shadow-xl w-full aspect-[3/4] object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <span className="text-clay font-serif italic mb-2 block">Monthly Muse</span>
                <h2 className="font-display text-5xl text-stone-900 mb-6">Flora’s Favorite</h2>
                <p className="font-serif text-lg text-stone-600 mb-8 leading-relaxed">
                  "This month, we're enchanted by 'The Midnight Library of Greenery.' It's a tale that perfectly captures the magic we feel at dusk in our own Vermont garden."
                </p>
                <div className="flex items-center gap-4 p-6 bg-stone-50 rounded-3xl border border-stone-100 italic">
                  <div className="w-12 h-12 rounded-full bg-emerald-200" />
                  <div>
                    <p className="font-display text-stone-900 not-italic">Flora Whitlock</p>
                    <p className="text-stone-500 text-sm">Lead Curator</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FolioSubscription />
      </main>

      <footer className="py-12 bg-stone-50 border-t border-stone-200">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl text-stone-900 mb-2">Fern & Folio</h3>
            <p className="font-serif text-stone-500 text-sm">124 Maple Grove Road, Vermont</p>
          </div>
          <div className="flex gap-8 font-serif text-sm text-stone-600">
            <a href="#" className="hover:text-emerald-800">Archive</a>
            <a href="#" className="hover:text-emerald-800">Journal</a>
            <a href="#" className="hover:text-emerald-800">Shipping</a>
            <a href="#" className="hover:text-emerald-800">Contact</a>
          </div>
          <div className="text-stone-400 font-serif text-xs">
            © 2024 Fern & Folio. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;