export interface Product {
  id?: string;
  name: string;
  price: number;
  categoryId: string;
  craftedBy?: string;
  description: string;
  inStock: boolean;
  isPopular: boolean;
  image: string;
}
