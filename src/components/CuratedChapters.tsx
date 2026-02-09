import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const chapters = [
  {
    title: "Chapter I: Sprouted Seeds",
    age: "Ages 0-3",
    description: "Tactile board books and gentle rhymes for the first years of wonder.",
    image: "/images/chapter-1.png",
    className: "md:col-span-2 md:row-span-1",
    bgColor: "bg-emerald-50"
  },
  {
    title: "Chapter II: Little Explorers",
    age: "Ages 4-7",
    description: "Whimsical picture books and early nature guides.",
    image: "/images/chapter-2.png",
    className: "md:col-span-1 md:row-span-2",
    bgColor: "bg-orange-50"
  },
  {
    title: "Chapter III: Brave Hearts",
    age: "Ages 8-12",
    description: "Middle grade adventures and tales of friendship.",
    image: "/images/chapter-3.png",
    className: "md:col-span-1 md:row-span-1",
    bgColor: "bg-blue-50"
  },
  {
    title: "Chapter IV: Dreamers",
    age: "Ages 13+",
    description: "Lush storytelling and contemporary classics for young adults.",
    image: "/images/chapter-4.png",
    className: "md:col-span-1 md:row-span-1",
    bgColor: "bg-purple-50"
  }
];

const CuratedChapters = () => {
  return (
    <section className="py-24 bg-[#FDFBF7]">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-stone-900 mb-4">Curated Chapters</h2>
          <p className="font-serif text-stone-600 max-w-xl mx-auto">Discover age-appropriate collections designed to grow alongside your child's imagination.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {chapters.map((chapter, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className={`relative overflow-hidden rounded-3xl group ${chapter.className} ${chapter.bgColor} border border-stone-100 shadow-sm`}
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={chapter.image} 
                  alt={chapter.title} 
                  className="w-full h-full object-cover mix-blend-multiply opacity-30 transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="relative z-10 p-8 flex flex-col h-full justify-end">
                <Badge variant="outline" className="w-fit mb-3 bg-white/50 border-stone-200 text-stone-600 backdrop-blur-sm">
                  {chapter.age}
                </Badge>
                <h3 className="font-display text-2xl text-stone-900 mb-2">{chapter.title}</h3>
                <p className="font-serif text-sm text-stone-700 leading-relaxed max-w-[250px]">
                  {chapter.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuratedChapters;