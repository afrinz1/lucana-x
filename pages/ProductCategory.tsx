
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CATEGORIES, MOCK_PRODUCTS } from '../data';
import { ArrowRight, Filter } from 'lucide-react';

const ProductCategory: React.FC = () => {
  const { categoryId } = useParams();
  const category = CATEGORIES.find(c => c.id === categoryId);
  const products = MOCK_PRODUCTS.filter(p => p.category === categoryId);

  if (!category) {
    return (
      <div className="pt-40 pb-40 text-center">
        <h2 className="text-2xl font-semibold mb-4">Category not found</h2>
        <Link to="/products" className="text-accent underline">Back to catalog</Link>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-primary">
      {/* Category Hero */}
      <section className="bg-charcoal text-white py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent mb-4 block">Collection</span>
            <h1 className="text-5xl md:text-6xl font-semibold mb-6 tracking-wide">{category.name}</h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg mb-8">
              {category.description}
            </p>
            <div className="flex gap-2">
              {category.subcategories.map(sub => (
                <span key={sub} className="border border-white/20 px-3 py-1 text-[9px] uppercase tracking-widest text-white/60">
                  {sub}
                </span>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 aspect-video overflow-hidden border border-white/10">
            <img src={category.image} alt={category.name} className="w-full h-full object-cover opacity-80" />
          </div>
        </div>
      </section>

      {/* Filter Bar (Simplified) */}
      <div className="bg-white border-y border-divider sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-charcoal">
              <Filter size={14} /> Filter
            </button>
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted">
              {products.length} Professional Items
            </span>
          </div>
          <div className="hidden md:flex gap-4">
             {/* Subnav links could go here */}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
              {products.map(product => (
                <Link 
                  key={product.id} 
                  to={`/products/detail/${product.id}`}
                  className="group bg-white flex flex-col md:flex-row gap-8 border border-divider hover:shadow-xl transition-all p-4"
                >
                  <div className="md:w-1/2 aspect-square overflow-hidden bg-primary flex items-center justify-center">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-contain grayscale-0 group-hover:scale-105 transition-transform duration-700" 
                    />
                  </div>
                  <div className="md:w-1/2 flex flex-col justify-center pr-4">
                    <span className="text-[9px] font-bold tracking-widest uppercase text-accent mb-2">{product.series}</span>
                    <h3 className="text-2xl font-semibold mb-2 group-hover:text-accent transition-colors">{product.name}</h3>
                    <p className="text-muted text-sm italic mb-6">“{product.tagline}”</p>
                    <div className="space-y-3 mb-8">
                      {product.specs.slice(0, 3).map(spec => (
                        <div key={spec.label} className="flex justify-between text-[11px] border-b border-divider pb-2">
                          <span className="uppercase tracking-widest text-muted">{spec.label}</span>
                          <span className="font-semibold">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                    <span className="mt-auto inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-charcoal">
                      Technical Specs <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-32 text-center bg-white border border-divider">
              <p className="text-muted">No products found in this category at the moment.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductCategory;
