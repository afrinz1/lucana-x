import { CATEGORIES } from '../categories';
import { FROG_PRODUCTS } from './categories/frog';
import { REEL_PRODUCTS } from './categories/reels';
import { ROD_PRODUCTS } from './categories/rod';

// Map category-defined products per file
const categoryProductMap: Record<string, any[]> = {
	'frog': FROG_PRODUCTS,
	'reels': REEL_PRODUCTS,
	'rod': ROD_PRODUCTS
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
// KAYAK_PRODUCTS removed - kayak fleet discontinued

// Combine all actual products (exclude category shells to avoid duplicates/conflicts)
export const MOCK_PRODUCTS = [
	...Object.values(categoryProductMap).flat()
];

// Removed: export * from './kayaks';
