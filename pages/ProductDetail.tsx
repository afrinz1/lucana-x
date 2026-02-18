
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../data';
import { ArrowLeft, Shield, Zap, Anchor, Settings, CheckCircle } from 'lucide-react';

const iconMap: Record<string, any> = {
  Shield: Shield,
  Zap: Zap,
  Anchor: Anchor,
  Settings: Settings
};

const ProductDetail: React.FC = () => {
  const { productId } = useParams();
  const product = MOCK_PRODUCTS.find(p => p.id === productId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  if (!product) {
    return (
      <div className="pt-40 pb-40 text-center">
        <h2 className="text-2xl font-semibold mb-4">Product not found</h2>
        <Link to="/products" className="text-accent underline">Back to catalog</Link>
      </div>
    );
  }

  return (
    <div className="pt-16 bg-white overflow-x-hidden">
      {/* Breadcrumbs */}
      <div className="bg-primary border-b border-divider py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-muted">
          <Link to="/products" className="hover:text-accent flex items-center gap-2"><ArrowLeft size={12} /> Products</Link>
          <span>/</span>
          <Link to={`/products/${product.category}`} className="hover:text-accent">{product.category}</Link>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-7">
               <div className="relative aspect-[4/3] bg-primary group overflow-hidden border border-divider flex items-center justify-center">
                  <img src={product.image} alt={product.name} className="w-full h-full object-contain transition-transform duration-[2s] group-hover:scale-105" />
                  <div className="absolute top-8 left-8 bg-charcoal text-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest">
                    Pro Model
                  </div>
               </div>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-center">
               <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent mb-4 block">{product.series}</span>
               <h1 className="text-5xl md:text-6xl font-semibold mb-6 tracking-wide">{product.name}</h1>
               <p className="text-2xl italic text-muted mb-10 leading-relaxed font-light">“{product.tagline}”</p>
               <div className="space-y-6 text-muted text-lg leading-relaxed mb-12">
                 <p>{product.description}</p>
               </div>
               
               <div className="grid grid-cols-2 gap-4">
                 <div className="p-6 bg-primary border border-divider">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted block mb-2">Build Type</span>
                    <span className="text-sm font-semibold">Competition Grade</span>
                 </div>
                 <div className="p-6 bg-primary border border-divider">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted block mb-2">Target Species</span>
                    <span className="text-sm font-semibold">Trophy Category</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-wide uppercase">Core Performance Pillars</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.highlights.map((item, idx) => {
              const IconComp = iconMap[item.icon] || Shield;
              return (
                <div key={idx} className="bg-white p-12 border border-divider shadow-sm group hover:shadow-md transition-all">
                  <IconComp className="text-accent mb-6 group-hover:scale-110 transition-transform" size={40} strokeWidth={1.5} />
                  <h3 className="text-lg font-bold uppercase tracking-widest mb-4">{item.title}</h3>
                  <p className="text-muted text-sm leading-loose">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Case / Editorial */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
             <div className="order-2 md:order-1">
                <span className="text-[10px] font-bold tracking-widest uppercase text-muted mb-4 block">Field Deployment</span>
                <h2 className="text-4xl font-semibold mb-8 tracking-wide leading-tight">{product.useCase.title}</h2>
                <p className="text-muted text-lg leading-loose mb-8">
                  {product.useCase.text}
                </p>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <CheckCircle className="text-accent shrink-0" size={20} />
                    <p className="text-sm text-charcoal/80">Reinforced structure for high-impact hooksets.</p>
                  </div>
                  <div className="flex gap-4 items-start">
                    <CheckCircle className="text-accent shrink-0" size={20} />
                    <p className="text-sm text-charcoal/80">Proprietary finish to reduce drag and increase casting distance.</p>
                  </div>
                </div>
             </div>
             <div className="order-1 md:order-2">
                <img src={product.useCase.image} alt="In Use" className="w-full shadow-2xl grayscale contrast-110" />
             </div>
          </div>
        </div>
      </section>

      {/* Full Technical Specifications */}
      <section className="py-24 bg-primary px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold tracking-widest uppercase text-muted mb-4 block">Engineered Specs</span>
            <h2 className="text-4xl font-semibold tracking-wide">Technical Data Sheet</h2>
          </div>
          
          <div className="bg-white border border-divider shadow-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-divider bg-secondary">
                  <th className="py-6 px-10 text-[10px] font-bold uppercase tracking-widest">Specification</th>
                  <th className="py-6 px-10 text-[10px] font-bold uppercase tracking-widest text-right">Metric / Value</th>
                </tr>
              </thead>
              <tbody>
                {product.specs.map((spec, i) => (
                  <tr key={i} className="border-b border-divider last:border-0 hover:bg-primary/50 transition-colors">
                    <td className="py-6 px-10 text-sm font-bold uppercase tracking-widest text-muted">{spec.label}</td>
                    <td className="py-6 px-10 text-sm font-semibold text-right">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Model Variations Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold tracking-wide mb-4">Series Variants</h2>
            <p className="text-muted">Choose the configuration optimized for your specific technique.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-divider border border-divider">
            {product.variants.map((v, i) => (
              <div key={i} className="bg-white p-10 flex flex-col justify-between hover:bg-primary transition-colors">
                <div>
                   <h4 className="text-xl font-bold mb-8 text-accent">{v.model}</h4>
                   <div className="space-y-4">
                      {v.length && <div className="flex justify-between text-[11px]"><span className="uppercase text-muted">Length</span><span>{v.length}</span></div>}
                      {v.action && <div className="flex justify-between text-[11px]"><span className="uppercase text-muted">Action</span><span>{v.action}</span></div>}
                      {v.weight && <div className="flex justify-between text-[11px]"><span className="uppercase text-muted">Weight</span><span>{v.weight}</span></div>}
                      {v.ratio && <div className="flex justify-between text-[11px]"><span className="uppercase text-muted">Ratio</span><span>{v.ratio}</span></div>}
                      {v.drag && <div className="flex justify-between text-[11px]"><span className="uppercase text-muted">Drag</span><span>{v.drag}</span></div>}
                   </div>
                </div>
                <div className="mt-12 pt-6 border-t border-divider">
                   <p className="text-[10px] font-bold uppercase tracking-widest text-muted">Technique Specific</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products Preview */}
      <section className="py-24 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-3xl font-semibold tracking-wide">Complementary Gear</h2>
            <Link to="/products" className="text-[10px] font-bold uppercase tracking-widest text-accent hover:text-white transition-colors">Explore All</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {MOCK_PRODUCTS.filter(p => p.id !== productId).map(rp => (
              <Link key={rp.id} to={`/products/detail/${rp.id}`} className="group flex flex-col md:flex-row gap-8 bg-white/5 p-6 border border-white/10 hover:border-white/30 transition-all">
                <div className="md:w-1/3 aspect-square overflow-hidden grayscale group-hover:grayscale-0 transition-all">
                  <img src={rp.image} alt={rp.name} className="w-full h-full object-cover" />
                </div>
                <div className="md:w-2/3 flex flex-col justify-center">
                   <span className="text-[9px] font-bold tracking-widest uppercase text-accent mb-2">{rp.series}</span>
                   <h3 className="text-xl font-semibold mb-2">{rp.name}</h3>
                   <p className="text-gray-400 text-sm mb-6">{rp.tagline}</p>
                   <span className="text-[10px] font-bold uppercase tracking-widest text-white/50 group-hover:text-accent transition-colors">View Details</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
