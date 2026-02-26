import React, { useState } from 'react';
import { Copy, Plus, Trash2, Eye, Code } from 'lucide-react';
import { Product } from '../types/product';
import { CATEGORIES } from '../data';

interface AdminProductsProps {
  categoryId?: string;
}

const AdminProducts: React.FC<AdminProductsProps> = ({ categoryId }) => {
  const [formData, setFormData] = useState<Partial<Product>>({
    id: '',
    name: '',
    series: '',
    category: '',
    tagline: '',
    description: '',
    image: '',
    highlights: [],
    specs: [],
    variants: [],
    useCase: {
      title: '',
      text: '',
      image: ''
    }
  });

  const [highlights, setHighlights] = useState([{ icon: '', title: '', text: '' }]);
  const [specs, setSpecs] = useState([{ label: '', value: '' }]);
  const [variants, setVariants] = useState([{ model: '', gearRatio: '', dragForce: '', weight: '', lineCapacity: '' }]);
  const [showPreview, setShowPreview] = useState(false);
  const [generatedCode, setGeneratedCode] = useState('');
  const [copied, setCopied] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryId || '');

  // Filter categories based on the component prop
  const availableCategories = categoryId
    ? CATEGORIES.filter(c => c.id === categoryId)
    : CATEGORIES;

  // Auto-select the category if categoryId prop is provided
  React.useEffect(() => {
    if (categoryId && !formData.category) {
      handleSelectCategory(categoryId);
    }
  }, [categoryId]);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleHighlightChange = (idx: number, field: string, value: string) => {
    const updated = [...highlights];
    updated[idx] = { ...updated[idx], [field]: value };
    setHighlights(updated);
  };

  const handleSpecChange = (idx: number, field: string, value: string) => {
    const updated = [...specs];
    updated[idx] = { ...updated[idx], [field]: value };
    setSpecs(updated);
  };

  const handleVariantChange = (idx: number, field: string, value: string) => {
    const updated = [...variants];
    updated[idx] = { ...updated[idx], [field]: value };
    setVariants(updated);
  };

  const handleUseCaseChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      useCase: { ...prev.useCase!, [field]: value }
    }));
  };

  const addHighlight = () => {
    setHighlights([...highlights, { icon: '', title: '', text: '' }]);
  };

  const removeHighlight = (idx: number) => {
    setHighlights(highlights.filter((_, i) => i !== idx));
  };

  const addSpec = () => {
    setSpecs([...specs, { label: '', value: '' }]);
  };

  const removeSpec = (idx: number) => {
    setSpecs(specs.filter((_, i) => i !== idx));
  };

  const addVariant = () => {
    setVariants([...variants, { model: '', gearRatio: '', dragForce: '', weight: '', lineCapacity: '' }]);
  };

  const removeVariant = (idx: number) => {
    setVariants(variants.filter((_, i) => i !== idx));
  };

  const generateProductCode = () => {
    const product: Product = {
      ...(formData as Product),
      highlights: highlights.filter(h => h.icon && h.title),
      specs: specs.filter(s => s.label && s.value),
      variants: variants.filter(v => v.model)
    };

    const code = `{
    id: '${product.id}',
    name: '${product.name}',
    series: '${product.series}',
    category: '${product.category}',
    tagline: '${product.tagline}',
    description: '${product.description}',
    image: '${product.image}',
    highlights: [
      ${product.highlights.map(h => `{ icon: '${h.icon}', title: '${h.title}', text: '${h.text}' }`).join(',\n      ')}
    ],
    specs: [
      ${product.specs.map(s => `{ label: '${s.label}', value: '${s.value}' }`).join(',\n      ')}
    ],
    variants: [
      ${product.variants.map(v => `{ model: '${v.model}', gearRatio: '${v.gearRatio || ''}', dragForce: '${v.dragForce || ''}', weight: '${v.weight || ''}', lineCapacity: '${v.lineCapacity || ''}' }`).join(',\n      ')}
    ],
    useCase: {
      title: '${product.useCase.title}',
      text: '${product.useCase.text}',
      image: '${product.useCase.image}'
    }
  }`;

    setGeneratedCode(code);
  };

  const prefillFromCategory = () => {
    const cat = CATEGORIES.find(c => c.id === selectedCategory);
    if (!cat) return;
    const slug = `${cat.id}`;
    setFormData(prev => ({
      ...prev,
      id: `${slug}-product`,
      name: cat.name,
      series: cat.name,
      category: cat.id,
      tagline: cat.description || '',
      description: cat.description || '',
      image: cat.image || ''
    }));
  };

  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
    const cat = CATEGORIES.find(c => c.id === categoryId);
    if (!cat) return;
    const slug = `${cat.id}`;
    setFormData(prev => ({
      ...prev,
      id: `${slug}-product`,
      name: cat.name,
      series: cat.name,
      category: cat.id,
      tagline: cat.description || '',
      description: cat.description || '',
      image: cat.image || ''
    }));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-primary pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-5xl font-semibold mb-2">
            {categoryId ? `${CATEGORIES.find(c => c.id === categoryId)?.name || 'Product'} Products Manager` : 'Product Manager'}
          </h1>
          <p className="text-muted">Easily add new products without touching code</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Basic Info */}
            <div className="bg-white p-8 border border-divider">
              <h2 className="text-2xl font-semibold mb-6">Product Details</h2>
              <div className="flex items-center gap-3 mb-4">
                <select
                  value={selectedCategory || ''}
                  onChange={(e) => handleSelectCategory(e.target.value)}
                  className="px-3 py-2 border border-divider rounded text-sm"
                >
                  <option value="">Select category to prefill</option>
                  {availableCategories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
                <button
                  onClick={prefillFromCategory}
                  disabled={!selectedCategory}
                  className="px-4 py-2 bg-accent text-white font-bold uppercase tracking-widest rounded disabled:opacity-50"
                >
                  Prefill
                </button>
              </div>
              <div className="space-y-4">
                <input
                  type="text"
                  name="id"
                  placeholder="Product ID (e.g., lucana-vanguard-pro)"
                  value={formData.id || ''}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 border border-divider rounded text-sm"
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Product Name"
                  value={formData.name || ''}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 border border-divider rounded text-sm"
                />
                <input
                  type="text"
                  name="series"
                  placeholder="Series (e.g., Vanguard Series)"
                  value={formData.series || ''}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 border border-divider rounded text-sm"
                />
                <select
                  name="category"
                  value={formData.category || ''}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 border border-divider rounded text-sm"
                >
                  <option value="">Select category</option>
                  {availableCategories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
                <input
                  type="text"
                  name="tagline"
                  placeholder="Tagline"
                  value={formData.tagline || ''}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 border border-divider rounded text-sm"
                />
                <textarea
                  name="description"
                  placeholder="Description"
                  value={formData.description || ''}
                  onChange={handleFormChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-divider rounded text-sm"
                />
                <input
                  type="text"
                  name="image"
                  placeholder="Image URL"
                  value={formData.image || ''}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 border border-divider rounded text-sm"
                />
              </div>
            </div>

            {/* Highlights */}
            <div className="bg-white p-8 border border-divider">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Key Features</h2>
                <button
                  onClick={addHighlight}
                  className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest px-4 py-2 bg-accent text-white rounded hover:opacity-90"
                >
                  <Plus size={14} /> Add
                </button>
              </div>
              <div className="space-y-4">
                {highlights.map((h, idx) => (
                  <div key={idx} className="p-4 bg-primary border border-divider rounded space-y-3">
                    <div className="flex gap-3">
                      <input
                        type="text"
                        placeholder="Icon (e.g., Shield, Zap, Anchor)"
                        value={h.icon}
                        onChange={(e) => handleHighlightChange(idx, 'icon', e.target.value)}
                        className="flex-1 px-3 py-2 border border-divider rounded text-sm"
                      />
                      <button
                        onClick={() => removeHighlight(idx)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <input
                      type="text"
                      placeholder="Title"
                      value={h.title}
                      onChange={(e) => handleHighlightChange(idx, 'title', e.target.value)}
                      className="w-full px-3 py-2 border border-divider rounded text-sm"
                    />
                    <textarea
                      placeholder="Description"
                      value={h.text}
                      onChange={(e) => handleHighlightChange(idx, 'text', e.target.value)}
                      rows={2}
                      className="w-full px-3 py-2 border border-divider rounded text-sm"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Specs */}
            <div className="bg-white p-8 border border-divider">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Specifications</h2>
                <button
                  onClick={addSpec}
                  className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest px-4 py-2 bg-accent text-white rounded hover:opacity-90"
                >
                  <Plus size={14} /> Add
                </button>
              </div>
              <div className="space-y-3">
                {specs.map((s, idx) => (
                  <div key={idx} className="flex gap-3">
                    <input
                      type="text"
                      placeholder="Label (e.g., Length)"
                      value={s.label}
                      onChange={(e) => handleSpecChange(idx, 'label', e.target.value)}
                      className="flex-1 px-3 py-2 border border-divider rounded text-sm"
                    />
                    <input
                      type="text"
                      placeholder="Value"
                      value={s.value}
                      onChange={(e) => handleSpecChange(idx, 'value', e.target.value)}
                      className="flex-1 px-3 py-2 border border-divider rounded text-sm"
                    />
                    <button
                      onClick={() => removeSpec(idx)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Variants */}
            <div className="bg-white p-8 border border-divider">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Variants</h2>
                <button
                  onClick={addVariant}
                  className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest px-4 py-2 bg-accent text-white rounded hover:opacity-90"
                >
                  <Plus size={14} /> Add
                </button>
              </div>
              <div className="space-y-3">
                {variants.map((v, idx) => (
                  <div key={idx} className="p-4 bg-primary border border-divider rounded space-y-3">
                    <div className="flex gap-3">
                      <input
                        type="text"
                        placeholder="Model"
                        value={v.model}
                        onChange={(e) => handleVariantChange(idx, 'model', e.target.value)}
                        className="flex-1 px-3 py-2 border border-divider rounded text-sm"
                      />
                      <button
                        onClick={() => removeVariant(idx)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        placeholder="Gear Ratio"
                        value={v.gearRatio || ''}
                        onChange={(e) => handleVariantChange(idx, 'gearRatio', e.target.value)}
                        className="px-3 py-2 border border-divider rounded text-sm"
                      />
                      <input
                        type="text"
                        placeholder="Drag Force"
                        value={v.dragForce || ''}
                        onChange={(e) => handleVariantChange(idx, 'dragForce', e.target.value)}
                        className="px-3 py-2 border border-divider rounded text-sm"
                      />
                      <input
                        type="text"
                        placeholder="Weight"
                        value={v.weight || ''}
                        onChange={(e) => handleVariantChange(idx, 'weight', e.target.value)}
                        className="px-3 py-2 border border-divider rounded text-sm"
                      />
                      <input
                        type="text"
                        placeholder="Line Capacity"
                        value={v.lineCapacity || ''}
                        onChange={(e) => handleVariantChange(idx, 'lineCapacity', e.target.value)}
                        className="px-3 py-2 border border-divider rounded text-sm"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Use Case */}
            <div className="bg-white p-8 border border-divider">
              <h2 className="text-2xl font-semibold mb-6">Use Case / Field Deployment</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Title"
                  value={formData.useCase?.title || ''}
                  onChange={(e) => handleUseCaseChange('title', e.target.value)}
                  className="w-full px-4 py-2 border border-divider rounded text-sm"
                />
                <textarea
                  placeholder="Description"
                  value={formData.useCase?.text || ''}
                  onChange={(e) => handleUseCaseChange('text', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-2 border border-divider rounded text-sm"
                />
                <input
                  type="text"
                  placeholder="Image URL"
                  value={formData.useCase?.image || ''}
                  onChange={(e) => handleUseCaseChange('image', e.target.value)}
                  className="w-full px-4 py-2 border border-divider rounded text-sm"
                />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Actions */}
            <div className="sticky top-32 space-y-4">
              <button
                onClick={generateProductCode}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white font-bold uppercase tracking-widest rounded hover:opacity-90 transition"
              >
                <Code size={18} /> Generate Code
              </button>

              {generatedCode && (
                <div className="bg-white p-6 border border-divider rounded">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-sm uppercase tracking-widest">Generated Code</h3>
                    <button
                      onClick={copyToClipboard}
                      className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-secondary rounded hover:bg-secondary/80"
                    >
                      <Copy size={14} /> {copied ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                  <pre className="bg-primary p-4 rounded text-[10px] overflow-auto max-h-96 font-mono border border-divider">
                    {generatedCode}
                  </pre>
                  <p className="text-[11px] text-muted mt-4">
                    Paste this code into the appropriate product file in <code className="bg-secondary px-2 py-1 rounded">data/products/</code>
                  </p>
                </div>
              )}

              {/* Info Box */}
              <div className="bg-secondary p-4 rounded border border-divider">
                <p className="text-[11px] leading-relaxed text-charcoal">
                  <strong>How to use:</strong> Fill out the form, click "Generate Code", then copy the output into the product file (rods.ts, reels.ts, etc.) in the <code>data/products/</code> folder.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
