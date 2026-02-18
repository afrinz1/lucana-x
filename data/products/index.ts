import { CATEGORIES } from '../categories';
import { ALL_KAYAK_DATA } from './kayaks';
import { BAG_PRODUCTS } from './categories/bag';
import { CRYSTAL_CLEAR_PRODUCTS } from './categories/crystal-clear';
import { FROG_PRODUCTS } from './categories/frog';
import { LUCANA_LIVE_CHEMEEN_PRODUCTS } from './categories/lucana-live-chemeen';
import { METAL_SPOON_PRODUCTS } from './categories/metal-spoon';
import { PROPELLER_FROG_PRODUCTS } from './categories/propeller-frog';
import { RIPSTER_PRODUCTS } from './categories/ripster';
import { ROD_PRODUCTS } from './categories/rod';
import { SHADE_PRODUCTS } from './categories/shade';
import { SMOKY_50_PRODUCTS } from './categories/smoky-50';
import { SWIVEL_PRODUCTS } from './categories/swivel';
import { THAI_FROG_PRODUCTS } from './categories/thai-frog';
import { TORNADO_PRODUCTS } from './categories/tornado';

// Map category-defined products per file
const categoryProductMap: Record<string, any[]> = {
	'bag': BAG_PRODUCTS,
	'crystal-clear': CRYSTAL_CLEAR_PRODUCTS,
	'frog': FROG_PRODUCTS,
	'lucana-live-chemeen': LUCANA_LIVE_CHEMEEN_PRODUCTS,
	'metal-spoon': METAL_SPOON_PRODUCTS,
	'propeller-frog': PROPELLER_FROG_PRODUCTS,
	'ripster': RIPSTER_PRODUCTS,
	'rod': ROD_PRODUCTS,
	'shade': SHADE_PRODUCTS,
	'smoky-50': SMOKY_50_PRODUCTS,
	'swivel': SWIVEL_PRODUCTS,
	'thai-frog': THAI_FROG_PRODUCTS,
	'tornado': TORNADO_PRODUCTS
};

// Generate lightweight category shells (kept separate from real products)
export const CATEGORY_SHELLS = CATEGORIES.map(cat => ({
	id: cat.id,
	name: cat.name,
	series: cat.name,
	category: cat.id,
	tagline: cat.description || '',
	description: cat.description || '',
	image: cat.image,
	highlights: [],
	specs: [],
	variants: [],
	useCase: { title: '', text: '', image: '' }
} as const));

// Map kayaks into a product-like shape so they can appear in unified lists
export const KAYAK_PRODUCTS = Object.values(ALL_KAYAK_DATA).map((k: any) => ({
	id: k.id,
	name: k.name,
	series: 'Kayak Fleet',
	category: 'kayaks',
	tagline: '',
	description: k.description || '',
	image: k.mainImage || '',
	highlights: [],
	specs: k.specs || [],
	variants: [],
	useCase: { title: '', text: '', image: '' }
}));

// Combine all actual products (exclude category shells to avoid duplicates/conflicts)
export const MOCK_PRODUCTS = [
	...Object.values(categoryProductMap).flat(),
	...KAYAK_PRODUCTS
];

export * from './kayaks';
