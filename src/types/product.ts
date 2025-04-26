export interface Product {
  id?: string;
  name: string;
  price: number;
  images: string[];
  category: string;
  categoryId: string;
  craftedBy?: string;
  description: string;
  inStock: boolean;
  isPopular: boolean;
  image: string;
}
