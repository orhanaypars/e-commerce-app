export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  imageURL: string;
  qty?: number;
  category?: string;
  rating?: number;
  reviews?: number;
}
