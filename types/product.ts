export interface Product {
  id: string;
  name: string;
  series: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  highlights: Highlight[];
  specs: Specification[];
  variants: Variant[];
  useCase: {
    title: string;
    text: string;
    image: string;
  };
}

export interface Highlight {
  icon: string;
  title: string;
  text: string;
}

export interface Specification {
  label: string;
  value: string;
}

export interface Variant {
  model: string;
  length?: string;
  weight?: string;
  action?: string;
  capacity?: string;
  ratio?: string;
  drag?: string;
  gearRatio?: string;
  dragForce?: string;
  lineCapacity?: string;
}
