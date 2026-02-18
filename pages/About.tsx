
import React from 'react';
// Added Link import to fix "Cannot find name 'Link'" errors on lines 90 and 92
import { Link } from 'react-router-dom';
import { Target, ShieldCheck, Globe, FlaskConical } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-16 bg-white">
      {/* Hero Header */}
      <section className="bg-primary pt-32 pb-24 px-6 border-b border-divider">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[10px] font-bold tracking-widest uppercase text-accent mb-4 block">Our Legacy</span>
          <h1 className="text-5xl md:text-7xl font-semibold mb-8 tracking-tight">Confidence on every shore.</h1>
          <p className="text-muted text-xl leading-loose font-normal">
            For over two decades, Lucana Tackle has redefined the standards of professional fishing equipment through relentless field testing and uncompromising engineering.
          </p>
        </div>
      </section>

      {/* Brand History */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <img src="https://picsum.photos/seed/history-fish/1000/1200" alt="Vintage Fishing" className="w-full grayscale brightness-75 shadow-2xl" />
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl font-semibold tracking-wide">From Passion to Precision</h2>
              <div className="space-y-6 text-muted text-lg leading-loose">
                <p>
                  Lucana Tackle didn't start in a boardroom; it started in a tackle box on the back of a weathered boat. Our founders, seasoned professional anglers themselves, grew tired of equipment that failed when the stakes were highest.
                </p>
                <p>
                  Today, that same spirit drives our global engineering teams. We don't just manufacture rods and reels; we craft instruments of success for those who view fishing not just as a hobby, but as a discipline.
                </p>
                <p>
                  Headquartered internationally, our reach spans across Asia, Europe, and the Americas, supporting both competitive tournament circuits and the solo adventurer seeking their next record catch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-wide uppercase">The Lucana Standard</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-white border border-divider rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="text-accent" size={24} />
              </div>
              <h4 className="font-bold uppercase tracking-widest text-sm">Precision</h4>
              <p className="text-xs text-muted leading-relaxed px-4">Engineered tolerances measured in microns to ensure flawless mechanical operation.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-white border border-divider rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="text-accent" size={24} />
              </div>
              <h4 className="font-bold uppercase tracking-widest text-sm">Durability</h4>
              <p className="text-xs text-muted leading-relaxed px-4">Materials selected specifically to withstand the world's most corrosive environments.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-white border border-divider rounded-full flex items-center justify-center mx-auto mb-6">
                <FlaskConical className="text-accent" size={24} />
              </div>
              <h4 className="font-bold uppercase tracking-widest text-sm">Innovation</h4>
              <p className="text-xs text-muted leading-relaxed px-4">Constant iteration using the latest advancements in polymer and alloy sciences.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-white border border-divider rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="text-accent" size={24} />
              </div>
              <h4 className="font-bold uppercase tracking-widest text-sm">Heritage</h4>
              <p className="text-xs text-muted leading-relaxed px-4">A legacy of trust built through millions of hours spent on the world's waters.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-charcoal text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-8 tracking-wide">Join the Elite.</h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            Ready to upgrade your arsenal? Explore our professional collections and experience the Lucana difference for yourself.
          </p>
          <Link to="/products" className="inline-block bg-accent hover:bg-red-700 text-white px-10 py-4 text-xs font-bold tracking-widest uppercase transition-all">
            View the Collection
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
