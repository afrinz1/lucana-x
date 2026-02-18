import { Product } from '../../../types/product';

export const BAG_PRODUCTS: Product[] = [
  {
    id: 'lucana-travel-roller-bag',
    name: 'Travel Roller Bag',
    series: 'Lucana Carry',
    category: 'bag',
    tagline: 'Organized storage for the serious angler.',
    description: 'Durable wheeled travel bag with multiple padded compartments and reinforced base. Designed to protect rods, reels and electronics on long trips.',
    image: 'https://picsum.photos/seed/bag1/1200/900',
    highlights: [
      { icon: 'Shield', title: 'Reinforced Base', text: 'High-impact resistant bottom protects gear during transit.' },
      { icon: 'Zap', title: 'Quick Access', text: 'Top and front access panels for fast gear retrieval.' }
    ],
    specs: [
      { label: 'Capacity', value: '65 L' },
      { label: 'Weight', value: '4.2 kg' }
    ],
    variants: [
      { model: 'Carry-65', weight: '4.2 kg' }
    ],
    useCase: { title: 'Travel Ready', text: 'Ideal for airline travel or extended road trips with secure storage for rods and reels.', image: 'https://picsum.photos/seed/bag2/1200/600' }
  }
];
