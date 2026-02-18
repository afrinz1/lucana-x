
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ALL_KAYAK_DATA, KAYAK_MODELS } from '../data';

const KayakProduct: React.FC = () => {
  const { modelId } = useParams();
  const [activeTab, setActiveTab] = useState<'description' | 'reviews'>('description');
  
  // Default to navigator if modelId is missing or invalid
  const k = ALL_KAYAK_DATA[modelId || 'navigator'] || ALL_KAYAK_DATA['navigator'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [modelId]);

  // Logic to get 4 other kayaks for the related section
  const currentModelId = (modelId || 'navigator').toLowerCase();
  const otherKayaks = Object.values(ALL_KAYAK_DATA)
    .filter(kayak => kayak.id !== currentModelId)
    .slice(0, 4);

  return (
    <div className="pt-24 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb + Category */}
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted mb-6">
          <Link to="/" className="hover:text-accent">Home</Link>
          <span>/</span>
          <Link to="/kayak" className="hover:text-accent">Kayaks</Link>
          <span>/</span>
          <span className="text-charcoal">{k.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content (Left) */}
          <div className="lg:col-span-8">
            <h1 className="text-5xl font-semibold tracking-wide text-charcoal mb-12">{k.name}</h1>
            
            <div className="space-y-6">
              {/* Main Product Image (Tall Poster Style) */}
              <div className="aspect-[3/4] overflow-hidden bg-primary border border-divider">
                <img 
                  src={k.mainImage} 
                  alt={k.name} 
                  className="w-full h-full object-cover transition-all duration-700"
                />
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-4">
                {k.thumbnails.map((thumb, i) => (
                  <div key={i} className="aspect-square bg-primary border border-divider overflow-hidden cursor-pointer hover:border-accent transition-colors">
                    <img src={thumb} alt={`${k.name} thumb ${i}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Description / Reviews Tab */}
            <div className="mt-20">
              <div className="flex gap-10 border-b border-divider mb-10">
                <button 
                  onClick={() => setActiveTab('description')}
                  className={`pb-4 text-[10px] font-bold uppercase tracking-widest transition-colors ${activeTab === 'description' ? 'text-accent border-b border-accent' : 'text-muted hover:text-charcoal'}`}
                >
                  Description
                </button>
                <button 
                  onClick={() => setActiveTab('reviews')}
                  className={`pb-4 text-[10px] font-bold uppercase tracking-widest transition-colors ${activeTab === 'reviews' ? 'text-accent border-b border-accent' : 'text-muted hover:text-charcoal'}`}
                >
                  Reviews (0)
                </button>
              </div>

              {activeTab === 'description' ? (
                <div className="text-muted text-sm leading-loose max-w-3xl font-sans">
                  {k.description}
                </div>
              ) : (
                <div className="text-muted text-sm italic font-sans">
                  No reviews yet. Be the first to provide professional feedback on this vessel.
                </div>
              )}
            </div>
          </div>

          {/* Specs Content (Right) */}
          <div className="lg:col-span-4 lg:pt-32">
            <div className="sticky top-32 space-y-16">
              {/* Specification Text Block */}
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-charcoal mb-8 pb-4 border-b border-divider">Specification</h3>
                <div className="space-y-4">
                  {k.specs.map((spec, i) => (
                    <div key={i} className="flex flex-col gap-1">
                      <span className="text-[10px] font-bold uppercase tracking-[0.05em] text-muted">{spec.label}</span>
                      <span className="text-sm font-semibold text-charcoal">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Standard Features Bullet List */}
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-charcoal mb-8 pb-4 border-b border-divider">Standard Features</h3>
                <ul className="space-y-4">
                  {k.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1 h-1 bg-accent mt-2 shrink-0"></span>
                      <span className="text-sm text-muted leading-relaxed font-sans">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Related Kayaks (Updated to show other models) */}
        <div className="mt-40 pt-20 border-t border-divider">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-charcoal mb-12">Other Models in the Fleet</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {otherKayaks.map((item) => (
              <Link key={item.id} to={`/kayak/${item.id}`} className="group block">
                <div className="aspect-[4/5] bg-primary border border-divider overflow-hidden mb-6">
                  <img 
                    src={item.mainImage} 
                    alt={item.name} 
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-[9px] font-bold uppercase tracking-widest text-muted">Lucana Professional</p>
                  <h4 className="text-sm font-semibold text-charcoal group-hover:text-accent transition-colors">{item.name}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KayakProduct;
