import { Category } from '../types/category';
import { FROG_PRODUCTS } from './products/categories/frog';
import { REEL_PRODUCTS } from './products/categories/reels';
import { ROD_PRODUCTS } from './products/categories/rod';

// Helper function to get the first product image for a category
const getCategoryImage = (categoryId: string): string => {
  const allCategoryProducts = {
    frog: FROG_PRODUCTS,
    reels: REEL_PRODUCTS,
    rod: ROD_PRODUCTS
  };

  const products = allCategoryProducts[categoryId as keyof typeof allCategoryProducts];
  const firstProduct = products?.[0];

  return firstProduct?.image || '/images/category-fallback.jpg';
};

export const CATEGORIES: Category[] = [
  {
    id: 'frog',
    name: 'Frog',
    description: 'Topwater frog lures designed for explosive strikes.',
    image: getCategoryImage('frog'),
    subcategories: []
  },
  {
    id: 'reels',
    name: 'Reels',
    description: 'High-performance fishing reels built for smooth and reliable retrieves.',
    image: getCategoryImage('reels'),
    subcategories: []
  },
  {
    id: 'rod',
    name: 'Rod',
    description: 'Precision-engineered rods for every fishing style.',
    image: getCategoryImage('rod'),
    subcategories: []
  }
];