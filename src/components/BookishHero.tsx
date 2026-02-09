import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const BookishHero = () => {
  return (
    <section className="relative h-[90vh] min-h-[700px] w-full overflow-hidden bg-[#FDFBF7]">
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-garden.png" 
          alt="Watercolor Vermont Garden" 
          className="h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FDFBF7]" />
      </div>
      
      <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="mb-4 inline-block font-serif italic text-emerald-800 tracking-wide uppercase text-sm">Est. 2024 • Vermont, USA</span>
          <h1 className="mb-6 font-display text-6xl md:text-8xl text-stone-900 leading-[1.1]">
            Where every page is a <br/><span className="italic font-light">wildflower.</span>
          </h1>
          <p className="mx-auto mb-10 max-w-xl font-serif text-lg text-stone-600 leading-relaxed">
            A curated sanctuary for young readers, nestled in the Green Mountains. Discover seasonal bundles and timeless tales delivered to your garden gate.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-emerald-900 hover:bg-emerald-800 text-stone-50 px-8 py-6 rounded-full text-lg font-serif">
              Explore the Collection
            </Button>
            <Button variant="ghost" size="lg" className="text-stone-800 hover:bg-stone-100 px-8 py-6 rounded-full text-lg font-serif group">
              Our Story <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-stone-300" />
      </div>
    </section>
  );
};

export default BookishHero;