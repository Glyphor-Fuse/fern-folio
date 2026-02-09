import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, Sparkles } from 'lucide-react';

const FolioSubscription = () => {
  return (
    <section className="py-24 bg-emerald-900 text-stone-50 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
        <img src="/images/foliage-pattern.png" className="w-full h-full object-cover" alt="" />
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Sparkles className="mx-auto text-orange-200 mb-6 h-12 w-12" />
            <h2 className="font-display text-5xl md:text-7xl mb-6">Seasonal Seeds of Knowledge</h2>
            <p className="font-serif text-xl text-emerald-100 max-w-2xl mx-auto leading-relaxed mb-10">
              Join our seasonal folio subscription. Every three months, receive a hand-curated bundle of books, heirloom seeds, and a literary garden map.
            </p>
          </motion.div>
          
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-[40px] border border-white/20">
            <div className="flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                placeholder="The little explorer's email..." 
                className="flex-1 bg-white/10 border-white/20 rounded-full px-8 py-4 text-white placeholder:text-stone-300 focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all"
              />
              <Button size="xl" className="bg-orange-200 hover:bg-orange-300 text-emerald-900 px-10 py-4 rounded-full font-display text-lg">
                Sow the Seeds
              </Button>
            </div>
            <p className="mt-6 text-emerald-200/60 font-serif italic text-sm">
              Free shipping across Vermont. Cancel your subscription anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FolioSubscription;