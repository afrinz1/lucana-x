
import React from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-primary px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <span className="text-[10px] font-bold tracking-widest uppercase text-accent mb-4 block">Connect With Us</span>
          <h1 className="text-5xl font-semibold mb-6 tracking-wide">How can we help you?</h1>
          <p className="text-muted text-lg max-w-xl leading-relaxed">
            Whether you are an individual angler, a retailer looking to stock our gear, or a distributor seeking a partnership, our team is here to assist.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 space-y-12">
            <div>
               <h3 className="text-[10px] font-bold tracking-widest uppercase text-muted mb-6">General Inquiries</h3>
               <div className="space-y-4">
                  <div className="flex items-center gap-4 text-charcoal">
                    <Mail size={18} className="text-accent" />
                    <span className="text-sm font-medium">support@lucanatackle.com</span>
                  </div>
                  <div className="flex items-center gap-4 text-charcoal">
                    <Phone size={18} className="text-accent" />
                    <span className="text-sm font-medium">+1 (800) 555-TACKLE</span>
                  </div>
               </div>
            </div>

            <div>
               <h3 className="text-[10px] font-bold tracking-widest uppercase text-muted mb-6">Global Headquarters</h3>
               <div className="flex items-start gap-4 text-charcoal">
                  <MapPin size={18} className="text-accent shrink-0 mt-1" />
                  <span className="text-sm leading-relaxed font-medium">
                    124 Oceanic Center,<br />
                    Tackle District, Suite 400<br />
                    International Hub, IH 4509
                  </span>
               </div>
            </div>

            <div>
               <h3 className="text-[10px] font-bold tracking-widest uppercase text-muted mb-6">Distribution</h3>
               <div className="flex items-center gap-4 text-charcoal">
                  <Globe size={18} className="text-accent" />
                  <span className="text-sm font-medium">distributors@lucanatackle.com</span>
               </div>
            </div>
          </div>

          <div className="lg:col-span-8 bg-white border border-divider p-10 md:p-16">
             <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-muted">First Name</label>
                      <input type="text" className="w-full bg-primary border border-divider p-4 text-sm focus:border-accent outline-none transition-colors" placeholder="e.g. James" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-muted">Last Name</label>
                      <input type="text" className="w-full bg-primary border border-divider p-4 text-sm focus:border-accent outline-none transition-colors" placeholder="e.g. Miller" />
                   </div>
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-bold uppercase tracking-widest text-muted">Email Address</label>
                   <input type="email" className="w-full bg-primary border border-divider p-4 text-sm focus:border-accent outline-none transition-colors" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-bold uppercase tracking-widest text-muted">Interest</label>
                   <select className="w-full bg-primary border border-divider p-4 text-sm focus:border-accent outline-none transition-colors appearance-none">
                      <option>Product Information</option>
                      <option>Distributorship Inquiry</option>
                      <option>Warranty & Support</option>
                      <option>Professional Sponsorship</option>
                   </select>
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-bold uppercase tracking-widest text-muted">Message</label>
                   <textarea rows={5} className="w-full bg-primary border border-divider p-4 text-sm focus:border-accent outline-none transition-colors resize-none" placeholder="Describe your inquiry..."></textarea>
                </div>
                <button type="submit" className="w-full md:w-auto bg-charcoal text-white px-12 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-accent transition-colors">
                   Send Inquiry
                </button>
             </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
