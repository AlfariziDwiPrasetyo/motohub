export type Product = {
  id: string;
  name: string;
  description?: string | null | undefined;
  price: number;
  image?: string | null;
  category: string;
  createdAt: string;
};
