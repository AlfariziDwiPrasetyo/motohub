export type Product = {
  id: number;
  name: string;
  description?: string | null | undefined;
  price: number;
  image?: string | null;
  category: string;
  createdAt: string;
};
