
import React from 'react';
import { Link } from 'react-router-dom';
import { ALL_KAYAK_DATA, KAYAK_MODELS } from '../data';
import { ArrowRight } from 'lucide-react';

const KayaksOverview: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 bg-primary min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center max-w-3xl mx-auto">
          <span className="text-[10px] font-bold tracking-widest uppercase text-accent mb-4 block">Professional Platforms</span>
          <h1 className="text-5xl md:text-6xl font-semibold mb-6 tracking-wide">The Lucana Kayak Fleet</h1>
          <p className="text-muted text-lg leading-relaxed">
            Engineered for stability, stealth, and superior tracking. Our fleet of professional angler kayaks provides the ultimate mobile platform for modern fishing disciplines.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {KAYAK_MODELS.map((modelName) => {
            const kayak = ALL_KAYAK_DATA[modelName.toLowerCase()];
            return (
              <Link 
                key={kayak.id} 
                to={`/kayak/${kayak.id}`} 
                className="group bg-white border border-divider flex flex-col hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[4/5] overflow-hidden bg-secondary">
                  <img 
                    src={kayak.mainImage} 
                    alt={kayak.name} 
                    className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" 
                  />
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-[9px] font-bold text-accent uppercase tracking-widest block mb-1">Lucana Marine</span>
                      <h2 className="text-3xl font-semibold group-hover:text-accent transition-colors">{kayak.name}</h2>
                    </div>
                  </div>
                  <p className="text-muted text-sm leading-relaxed mb-8 flex-grow">
                    {kayak.description.substring(0, 120)}...
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {kayak.specs.slice(0, 2).map((spec: any) => (
                      <div key={spec.label}>
                        <p className="text-[8px] font-bold uppercase tracking-widest text-muted mb-1">{spec.label}</p>
                        <p className="text-xs font-semibold">{spec.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-6 border-t border-divider flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-charcoal">
                    Technical Specifications <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default KayaksOverview;
