
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-xl font-bold tracking-wider uppercase mb-6">
              Lucana<span className="text-accent">.</span>Tackle
            </h2>
            <p className="text-muted text-sm leading-relaxed mb-8 max-w-xs">
              Professional outdoor and fishing equipment engineered for endurance, sensitivity, and reliability. Field-tested in the world's toughest environments.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 border border-muted/30 hover:border-accent hover:text-accent transition-all rounded-full"><Instagram size={18} /></a>
              <a href="#" className="p-2 border border-muted/30 hover:border-accent hover:text-accent transition-all rounded-full"><Facebook size={18} /></a>
              <a href="#" className="p-2 border border-muted/30 hover:border-accent hover:text-accent transition-all rounded-full"><Twitter size={18} /></a>
            </div>
          </div>

          <div className="grid grid-cols-2 col-span-1 md:col-span-3 gap-8">
            <div>
              <h3 className="text-[10px] font-bold tracking-widest uppercase text-accent mb-6">Equipment</h3>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><Link to="/products/rods" className="hover:text-white transition-colors">Fishing Rods</Link></li>
                <li><Link to="/products/reels" className="hover:text-white transition-colors">Spinning Reels</Link></li>
                <li><Link to="/products/lines" className="hover:text-white transition-colors">Premium Lines</Link></li>
                <li><Link to="/products/lures" className="hover:text-white transition-colors">Precision Lures</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-[10px] font-bold tracking-widest uppercase text-accent mb-6">Company</h3>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
                <li><Link to="/technology" className="hover:text-white transition-colors">Engineering</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/distributors" className="hover:text-white transition-colors">Global Distributors</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-muted/20 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest text-muted">
          <p>© 2024 Lucana Tackle International. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
