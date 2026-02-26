
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../../data';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProductMenu, setShowProductMenu] = useState(false);
  const [showMobileProducts, setShowMobileProducts] = useState(false);
  const navigate = useNavigate();

  const handleCategoryClick = (catId: string) => {
    setShowProductMenu(false);
    navigate(`/products/${catId}`);
  };

  const handleMobileCategoryClick = (catId: string) => {
    setShowMobileProducts(false);
    setIsOpen(false);
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
            
            {/* Mobile Products Section */}
            <div>
              <button 
                onClick={() => setShowMobileProducts(!showMobileProducts)} 
                className="w-full text-xs font-bold tracking-widest uppercase border-b border-divider pb-2 flex justify-between items-center"
              >
                Products
                <ChevronDown size={14} className={`transition-transform duration-300 ${showMobileProducts ? 'rotate-180' : ''}`} />
              </button>
              
              {showMobileProducts && (
                <div className="flex flex-col gap-3 mt-4 pl-4 border-l border-divider">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => handleMobileCategoryClick(cat.id)}
                      className="text-[11px] font-bold uppercase tracking-widest text-left hover:text-accent transition-colors flex justify-between items-center group"
                    >
                      {cat.name}
                      <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 text-accent" />
                    </button>
                  ))}
                </div>
              )}
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
