
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, ArrowRight } from 'lucide-react';
import { CATEGORIES, KAYAK_MODELS } from '../../data';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProductMenu, setShowProductMenu] = useState(false);
  const [showKayakMenu, setShowKayakMenu] = useState(false);
  const navigate = useNavigate();

  const handleCategoryClick = (catId: string) => {
    setShowProductMenu(false);
    navigate(`/products/${catId}`);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-primary border-b border-divider z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo / Demo Identity */}
        <Link to="/" className="flex items-center gap-4 group">
          {/* Logo Image Placeholder - Replace 'logo.png' with your actual file path */}
          <div className="flex items-center gap-3">
            <img 
              src="https://res.cloudinary.com/dz3sbdyps/image/upload/v1770272191/logo-1_yqye8v.png" 
              alt="Lucana Logo" 
              className="h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-500"
            />
            <div className="flex flex-col">
            </div>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 h-full">
          <Link to="/" className="text-xs font-medium tracking-widest uppercase hover:text-accent transition-colors h-full flex items-center">Home</Link>
          
          {/* Products Mega Menu */}
          <div 
            className="relative h-full flex items-center"
            onMouseEnter={() => setShowProductMenu(true)}
            onMouseLeave={() => setShowProductMenu(false)}
          >
            <button className="flex items-center gap-1 text-xs font-medium tracking-widest uppercase hover:text-accent transition-colors">
              Products <ChevronDown size={14} className={`transition-transform duration-300 ${showProductMenu ? 'rotate-180' : ''}`} />
            </button>

            {showProductMenu && (
              <div className="absolute top-full -left-20 w-[600px] bg-white shadow-2xl border border-divider mt-0 p-8 grid grid-cols-12 gap-8 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="col-span-5 border-r border-divider pr-8">
                  <h3 className="text-[10px] font-bold tracking-widest uppercase text-muted mb-6">Categories</h3>
                  <div className="flex flex-col gap-4">
                    {CATEGORIES.map(cat => (
                      <button 
                        key={cat.id}
                        onClick={() => handleCategoryClick(cat.id)}
                        className="text-[11px] font-bold uppercase tracking-widest text-left hover:text-accent transition-colors flex justify-between items-center group/item"
                      >
                        {cat.name}
                        <ArrowRight size={14} className="opacity-0 group-hover/item:opacity-100 -translate-x-2 group-hover/item:translate-x-0 transition-all text-accent" />
                      </button>
                    ))}
                  </div>
                </div>
                <div className="col-span-7 flex flex-col justify-between">
                  <div className="bg-secondary/50 p-6 rounded-sm mb-4 border border-divider/50">
                    <h4 className="text-sm font-semibold mb-2">Engineering Showcase</h4>
                    <p className="text-[12px] text-muted leading-relaxed mb-4">Discover the latest advancements in high-modulus carbon and precision gearing systems.</p>
                    <Link to="/products" onClick={() => setShowProductMenu(false)} className="text-[10px] font-bold uppercase tracking-widest text-accent flex items-center gap-2 group">
                      Catalog Overview <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  <img src="https://images.unsplash.com/photo-1544038659-12337883d216?q=80&w=400&auto=format&fit=crop" alt="Featured Tackle" className="w-full h-32 object-cover grayscale brightness-90 border border-divider" />
                </div>
              </div>
            )}
          </div>

          {/* Refined Kayak Dropdown */}
          <div 
            className="relative h-full flex items-center"
            onMouseEnter={() => setShowKayakMenu(true)}
            onMouseLeave={() => setShowKayakMenu(false)}
          >
            <Link to="/kayaks" className="flex items-center gap-1 text-xs font-medium tracking-widest uppercase hover:text-accent transition-colors">
              Kayak <ChevronDown size={14} className={`transition-transform duration-300 ${showKayakMenu ? 'rotate-180' : ''}`} />
            </Link>

            {showKayakMenu && (
              <div className="absolute top-full left-0 w-[420px] bg-white shadow-2xl border border-divider mt-0 animate-in fade-in slide-in-from-top-1 duration-200">
                <div className="p-6 border-b border-divider bg-primary/30">
                  <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent mb-1">Lucana Fleet</h3>
                  <p className="text-[11px] text-muted">Professional Angler Platforms</p>
                </div>
                <div className="p-6 grid grid-cols-2 gap-x-10 gap-y-4">
                  {KAYAK_MODELS.map(model => (
                    <Link 
                      key={model} 
                      to={`/kayak/${model.toLowerCase()}`} 
                      onClick={() => setShowKayakMenu(false)}
                      className="text-[11px] font-bold uppercase tracking-widest text-charcoal hover:text-accent transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-divider group-hover:bg-accent transition-colors shrink-0"></span>
                      {model}
                    </Link>
                  ))}
                </div>
                <div className="p-4 bg-secondary/20 border-t border-divider">
                  <Link to="/kayaks" onClick={() => setShowKayakMenu(false)} className="text-[9px] font-bold uppercase tracking-widest text-muted hover:text-charcoal flex items-center justify-center gap-2">
                    View Full Fleet <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link to="/about" className="text-xs font-medium tracking-widest uppercase hover:text-accent transition-colors h-full flex items-center">About</Link>
          <Link to="/contact" className="text-xs font-medium tracking-widest uppercase hover:text-accent transition-colors h-full flex items-center">Contact</Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={() => setIsOpen(!isOpen)} className="text-charcoal p-1">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-divider animate-in slide-in-from-top-2 h-screen overflow-y-auto pb-20">
          <div className="flex flex-col p-6 gap-6">
            <Link to="/" onClick={() => setIsOpen(false)} className="text-xs font-bold tracking-widest uppercase border-b border-divider pb-4 flex items-center gap-3">
               <img 
                 src="https://cdn-icons-png.flaticon.com/512/2822/2822435.png" 
                 alt="Lucana Logo" 
                 className="h-8 w-auto object-contain"
               />
               Home
            </Link>
            <Link to="/products" onClick={() => setIsOpen(false)} className="text-xs font-bold tracking-widest uppercase border-b border-divider pb-2">Products</Link>
            
            <div className="flex flex-col gap-4">
              <Link to="/kayaks" onClick={() => setIsOpen(false)} className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent">Kayak Fleet</Link>
              <div className="grid grid-cols-2 gap-4 ml-4">
                {KAYAK_MODELS.map(model => (
                  <Link 
                    key={model} 
                    to={`/kayak/${model.toLowerCase()}`} 
                    onClick={() => setIsOpen(false)}
                    className="text-xs font-medium uppercase tracking-widest border-b border-divider/50 pb-2"
                  >
                    {model}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/about" onClick={() => setIsOpen(false)} className="text-xs font-bold tracking-widest uppercase border-b border-divider pb-2">About</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="text-xs font-bold tracking-widest uppercase border-b border-divider pb-2">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
