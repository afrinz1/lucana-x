import { Product } from '../../../types/product';

export const FROG_PRODUCTS: Product[] = [
  {
    id: 'lucana-topwater-frog-75',
    name: 'Topwater Frog 75',
    series: 'Surface Strike',
    category: 'frog',
    tagline: 'Explosive surface action for shallow water hunting.',
    description: 'A realistic frog lure with rotating propeller tail and built-in rattles to trigger explosive strikes in heavy cover.',
    image: 'https://picsum.photos/seed/frog1/1200/900',
    highlights: [
      { icon: 'Wind', title: 'Propeller Tail', text: 'Creates additional surface disturbance to draw fish in.' },
      { icon: 'Droplets', title: 'Waterproof Rattles', text: 'Sealed internal chamber for consistent sound.' }
    ],
    specs: [
      { label: 'Length', value: '75 mm' },
      { label: 'Weight', value: '28 g' }
    ],
    variants: [
      { model: 'F-75', weight: '28 g' }
    ],
    useCase: { title: 'Heavy Cover', text: 'Works best in lily pads and thick vegetation where bass hide.', image: 'https://picsum.photos/seed/frog2/1200/600' }
  },
  {
    id: 'lucana-frog-prototype',
    name: 'Prototype Frog',
    series: 'vanguard',
    category: 'frog',
    tagline: '',
    description: 'hellooo okdaaa',
    image: 'https://res.cloudinary.com/dz3sbdyps/image/upload/v1771147734/20201219_165103_copy_qzsnen.jpg',
    highlights: [],
    specs: [],
    variants: [],
    useCase: {
      title: '',
      text: '',
      image: ''
    }
  }
];
