import React from 'react';
import { motion } from 'framer-motion';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { TreePine, Waves, Tent, MapPin } from 'lucide-react';

const landmarks = [
  {
    id: 'treehouse',
    name: "The Reading Treehouse",
    event: "Saturday Story Hour",
    time: "10:00 AM",
    description: "Classic tales read aloud under the oak canopy.",
    top: '30%',
    left: '25%',
    icon: TreePine
  },
  {
    id: 'lilypond',
    name: "Lily Pond Library",
    event: "Watercolor Workshop",
    time: "2:00 PM",
    description: "Capture the garden's beauty with guided painting.",
    top: '60%',
    left: '70%',
    icon: Waves
  },
  {
    id: 'secretgarden',
    name: "The Hidden Hearth",
    event: "Young Writers Guild",
    time: "4:00 PM",
    description: "Collaborative storytelling for budding authors.",
    top: '20%',
    left: '60%',
    icon: Tent
  }
];

const GardenMap = () => {
  return (
    <section className="py-24 bg-stone-50 border-y border-stone-200/50">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3">
            <span className="text-violet-600 font-serif italic text-sm mb-2 block tracking-widest uppercase">Live Events</span>
            <h2 className="font-display text-5xl text-stone-900 mb-6">The Garden Path</h2>
            <p className="font-serif text-stone-600 leading-relaxed mb-8 text-lg">
              Our store isn't just a shop; it's a living story. Explore our illustrated garden to find upcoming gatherings and seasonal workshops.
            </p>
            <div className="space-y-4">
              {landmarks.map((mark) => (
                <div key={mark.id} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-stone-100 shadow-sm transition-colors hover:border-violet-200">
                  <div className="p-3 bg-violet-50 rounded-full text-violet-600">
                    <mark.icon size={20} />
                  </div>
                  <div>
                    <p className="font-display text-lg text-stone-900">{mark.name}</p>
                    <p className="font-serif text-sm text-stone-500">{mark.event} • {mark.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full md:w-2/3 relative aspect-[4/3] bg-white rounded-[40px] shadow-2xl overflow-hidden border-8 border-white">
            <img 
              src="/images/garden-map.png" 
              alt="Illustrated Garden Map" 
              className="w-full h-full object-cover"
            />
            
            {landmarks.map((mark) => (
              <div 
                key={mark.id}
                className="absolute"
                style={{ top: mark.top, left: mark.left }}
              >
                <Popover>
                  <PopoverTrigger asChild>
                    <button className="relative group">
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 3 }}
                        className="absolute inset-0 bg-violet-400/30 rounded-full blur-xl group-hover:bg-violet-500/40"
                      />
                      <div className="relative z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center text-violet-600 hover:scale-110 transition-transform cursor-pointer">
                        <MapPin size={20} />
                      </div>
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-64 p-5 rounded-2xl border-stone-100 shadow-xl">
                    <div className="space-y-2">
                      <h4 className="font-display text-xl text-stone-900">{mark.name}</h4>
                      <p className="font-serif text-sm text-violet-600 font-semibold">{mark.event}</p>
                      <p className="font-serif text-xs text-stone-500 italic">{mark.time}</p>
                      <p className="font-serif text-sm text-stone-600 pt-2 leading-relaxed">
                        {mark.description}
                      </p>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GardenMap;