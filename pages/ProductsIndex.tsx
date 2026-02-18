
import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../data';
import { ArrowRight } from 'lucide-react';

const ProductsIndex: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 bg-primary">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center max-w-2xl mx-auto">
          <span className="text-[10px] font-bold tracking-widest uppercase text-accent mb-4 block">Equipment Directory</span>
          <h1 className="text-5xl font-semibold mb-6 tracking-wide">The Full Catalog</h1>
          <p className="text-muted text-lg leading-relaxed">
            From professional rods to high-strength lines, explore our range of precision-crafted fishing equipment designed for global excellence.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-divider border border-divider">
          {CATEGORIES.map((cat) => (
            <Link 
              key={cat.id} 
              to={`/products/${cat.id}`} 
              className="bg-white group overflow-hidden flex flex-col hover:z-10 relative"
            >
              <div className="aspect-[16/10] overflow-hidden flex items-center justify-center bg-primary">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-contain grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" 
                />
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <h2 className="text-2xl font-semibold mb-3 group-hover:text-accent transition-colors">{cat.name}</h2>
                <p className="text-muted text-sm leading-relaxed mb-8 flex-grow">
                  {cat.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {cat.subcategories.map(sub => (
                    <span key={sub} className="text-[9px] font-bold tracking-widest uppercase px-2 py-1 bg-secondary text-charcoal/70">
                      {sub}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-6 border-t border-divider flex items-center justify-between text-[10px] font-bold uppercase tracking-widest">
                  View Category <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsIndex;
