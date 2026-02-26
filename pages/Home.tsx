
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Anchor, Settings, ChevronDown } from 'lucide-react';
import { CATEGORIES, MOCK_PRODUCTS } from '../data';

const Home: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[92vh] flex items-center overflow-hidden bg-secondary">
        {/* Parallax Background Image */}
        <div 
          className="absolute inset-0 z-0 scale-110"
          style={{ 
            transform: `translateY(${scrollY * 0.2}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <img 
            src="https://images.unsplash.com/photo-1688770522956-bf5eeb06c9c1?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Angler in serene environment" 
            className="w-full h-full object-cover saturate-[0.6] brightness-75 contrast-110 grayscale-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/50 via-charcoal/20 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-accent"></span>
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white opacity-90">International Brand Showcase</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-semibold mb-8 tracking-tight text-white leading-[1.1]">
              Engineered for <br />
              <span className="text-white/90">serious anglers.</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-normal mb-12 text-white/70 max-w-xl leading-relaxed tracking-normal font-sans">
              High-performance fishing equipment built for endurance and precision across the world's most demanding environments.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <Link to="/products" className="bg-white text-charcoal hover:bg-accent hover:text-white px-12 py-5 text-[10px] font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-3 group border border-white">
                Explore Catalog <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/about" className="text-white border-b border-white/30 hover:border-accent hover:text-accent pb-1 text-[10px] font-bold tracking-widest uppercase transition-all duration-300">
                Our Engineering Story
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 animate-bounce">
          <span className="text-[9px] uppercase tracking-widest font-bold">Scroll</span>
          <ChevronDown size={16} />
        </div>
      </section>

      {/* Featured Categories Grid */}
      <section className="py-24 bg-primary px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-accent mb-4 block">Product Range</span>
              <h2 className="text-4xl font-semibold tracking-wide">Elite Gear Collections</h2>
            </div>
            <Link to="/products" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-charcoal hover:text-accent transition-all group">
              View Entire Directory <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {CATEGORIES.slice(0, 3).map((cat) => (
              <Link key={cat.id} to={`/products/${cat.id}`} className="group relative overflow-hidden bg-white border border-divider">
                <div className="aspect-[4/5] overflow-hidden bg-secondary">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out grayscale group-hover:grayscale-0" />
                </div>
                <div className="p-10">
                  <span className="text-[9px] font-bold text-accent uppercase tracking-widest mb-3 block">Professional</span>
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-accent transition-colors">{cat.name}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-8">{cat.description}</p>
                  <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-charcoal border-b border-divider pb-1 group-hover:border-accent transition-colors">
                    Explore Series
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Catalog */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-accent mb-4 block">Featured Inventory</span>
              <h2 className="text-4xl font-semibold tracking-wide">Product Catalog</h2>
            </div>
            <Link to="/products" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-charcoal hover:text-accent transition-all group">
              Browse All Products <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MOCK_PRODUCTS.slice(0, 8).map((product) => (
              <Link key={product.id} to={`/products/detail/${product.id}`} className="group relative overflow-hidden bg-primary border border-divider hover:border-accent transition-all">
                <div className="aspect-square overflow-hidden bg-secondary">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out" />
                </div>
                <div className="p-6">
                  <span className="text-[8px] font-bold text-accent uppercase tracking-widest mb-2 block">
                    {CATEGORIES.find(c => c.id === product.category)?.name || product.category}
                  </span>
                  <h3 className="text-sm font-semibold mb-2 group-hover:text-accent transition-colors line-clamp-2">{product.name}</h3>
                  <p className="text-muted text-xs leading-relaxed mb-4 line-clamp-2">{product.tagline || product.description}</p>
                  <span className="inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-charcoal border-b border-divider pb-1 group-hover:border-accent transition-colors">
                    View Details
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering / Tech Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold tracking-widest uppercase text-accent mb-4 block">Technology & Innovation</span>
              <h2 className="text-4xl font-semibold mb-8 tracking-wide leading-tight">Field-tested reliability for every cast.</h2>
              <p className="text-muted leading-relaxed mb-12 text-lg">
                Our commitment to engineering excellence ensures that every piece of Lucana Tackle equipment delivers unmatched performance in professional environments.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <Shield className="text-accent" size={20} />
                  <h4 className="text-xs font-bold uppercase tracking-widest">Rugged Materials</h4>
                  <p className="text-[13px] text-muted leading-relaxed">Aerospace-grade alloys and high-modulus carbon composites for maximum longevity.</p>
                </div>
                <div className="space-y-4">
                  <Settings className="text-accent" size={20} />
                  <h4 className="text-xs font-bold uppercase tracking-widest">Precision Gearing</h4>
                  <p className="text-[13px] text-muted leading-relaxed">Micro-module tooth designs for seamless energy transfer and silent operation.</p>
                </div>
                <div className="space-y-4">
                  <Zap className="text-accent" size={20} />
                  <h4 className="text-xs font-bold uppercase tracking-widest">Maximum Sensitivity</h4>
                  <p className="text-[13px] text-muted leading-relaxed">Direct-link blanks that transmit even the lightest bites through the grip.</p>
                </div>
                <div className="space-y-4">
                  <Anchor className="text-accent" size={20} />
                  <h4 className="text-xs font-bold uppercase tracking-widest">Extreme Durability</h4>
                  <p className="text-[13px] text-muted leading-relaxed">Advanced saltwater sealing for years of reliable use in harsh conditions.</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 relative">
              <div className="bg-white p-2 shadow-2xl overflow-hidden border border-divider">
                <img src="https://images.unsplash.com/photo-1605499907240-d4240d766581?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product close-up" className="w-full grayscale contrast-125" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-charcoal text-white p-10 max-w-xs hidden xl:block shadow-2xl">
                <p className="text-2xl font-semibold mb-2 italic leading-tight">“Confidence in every knot.”</p>
                <p className="text-[9px] uppercase tracking-widest opacity-60 font-bold">— Engineering Laboratory</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Preview */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-20 items-center">
            <div className="w-full md:w-1/2">
               <div className="relative">
                 <img src="https://images.unsplash.com/photo-1526416469077-94d15f0e33bc?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Brand Story" className="w-full aspect-[4/5] object-cover grayscale brightness-90 shadow-2xl" />
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-divider pointer-events-none scale-90 opacity-20"></div>
               </div>
            </div>
            <div className="w-full md:w-1/2">
              <span className="text-[10px] font-bold tracking-widest uppercase text-muted mb-4 block">The Lucana Heritage</span>
              <h2 className="text-5xl font-semibold mb-8 tracking-tight">Built by anglers, <br />for anglers.</h2>
              <div className="space-y-6 text-muted text-lg leading-loose mb-10">
                <p>
                  Lucana Tackle was born from a simple obsession: to create equipment that disappears into the hands of a professional, allowing for total focus on the water.
                </p>
                <p>
                  From the salt-sprayed decks of oceanic trawlers to the quiet banks of alpine lakes, our gear is put through thousands of hours of testing before it ever reaches your boat.
                </p>
              </div>
              <Link to="/about" className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-charcoal group">
                <span className="border-b-2 border-accent pb-1">Discover our journey</span>
                <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
