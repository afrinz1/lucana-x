export const KAYAK_MODELS = [
  'Eagle', 'Falcon', 'Garuda', 'Komodo', 'Matrix', 'Navigator', 'Pelican', 'Phenix', 'Predator'
];

// Reusable detailed kayak data generator
const generateKayakData = (name: string) => ({
  id: name.toLowerCase(),
  name: name,
  category: 'Professional Angler Kayak',
  mainImage: `https://images.unsplash.com/photo-1562388831-a7a060b9c1fe?q=80&w=718&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=${name}`,
  thumbnails: [
    `https://images.unsplash.com/photo-1544551763-47a0159f963f?q=80&w=400&auto=format&fit=crop&seed=${name}1`,
    `https://images.unsplash.com/photo-1499242015907-fd91d9d0c72d?q=80&w=400&auto=format&fit=crop&seed=${name}2`,
    `https://images.unsplash.com/photo-1526416469077-94d15f0e33bc?q=80&w=400&auto=format&fit=crop&seed=${name}3`,
    `https://images.unsplash.com/photo-1605499907240-d4240d766581?q=80&w=400&auto=format&fit=crop&seed=${name}4`
  ],
  description: `The Lucana ${name} is a premium fishing platform engineered for elite performance. Designed with precision tracking and uncompromising stability, it serves as the perfect extension of the angler. Its unique hull design ensures a silent approach in shallow waters, while the advanced storage systems keep your gear organized and accessible in the most demanding conditions.`,
  specs: [
    { label: 'Length', value: '310cm / 10.2ft' },
    { label: 'Width', value: '84cm / 33in' },
    { label: 'Height', value: '36cm / 14in' },
    { label: 'Hull Weight', value: '28.5kg / 63lb' },
    { label: 'Material Built', value: 'High-Density Polyethylene (HDPE)' },
    { label: 'Max Capacity', value: '160kg / 352lb' }
  ],
  features: [
    'Proprietary Silent Hull Design',
    'High-Comfort Adjustable Mesh Seat',
    'Integrated Rod Holders (4x)',
    'Transducer Mounting Plate',
    'Large Forward Storage Hatch',
    'Rear Bungee Gear Well',
    'Non-Slip EVA Standing Pads',
    'Replaceable Keel Guard'
  ],
  related: [
    { id: 'rel-1', name: 'Elite Paddle', category: 'Accessories', image: 'https://images.unsplash.com/photo-1544038659-12337883d216?q=80&w=400&auto=format&fit=crop' },
    { id: 'rel-2', name: 'Storm Series PFD', category: 'Safety', image: 'https://images.unsplash.com/photo-1544551763-47a0159f963f?q=80&w=400&auto=format&fit=crop' },
    { id: 'rel-3', name: 'Track Mount Gripper', category: 'Tools', image: 'https://images.unsplash.com/photo-1544038659-12337883d216?q=80&w=400&auto=format&fit=crop' },
    { id: 'rel-4', name: 'Cooler Box 25L', category: 'Camping', image: 'https://images.unsplash.com/photo-1499242015907-fd91d9d0c72d?q=80&w=400&auto=format&fit=crop' }
  ]
});

export const ALL_KAYAK_DATA = KAYAK_MODELS.reduce((acc, name) => {
  acc[name.toLowerCase()] = generateKayakData(name);
  return acc;
}, {} as Record<string, any>);

export const NAVIGATOR_KAYAK = ALL_KAYAK_DATA['navigator'];
