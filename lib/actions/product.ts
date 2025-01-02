import prisma from "../helper/prisma";
import { Product } from "../types";

export const getAllProduct = async () => {
  try {
    const products = await prisma.product.findMany();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getProductById = async (id: number) => {
  try {
    const product = await prisma.product.findFirst({
      where: {
        id: id,
      },
    });

    return product;
  } catch (error) {
    console.error("Error retrieving product by ID:", error);
    throw error;
  }
};

export const addProduct = async (product: Product) => {
  try {
    const newProduct = await prisma.product.create({
      data: {
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.category,
        image: product.image,
      },
    });

    return newProduct;
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
};

export const deleteProduct = async (id: number) => {
  try {
    const product = await prisma.product.delete({ where: { id } });
  } catch (error) {
    throw error;
  }
};

export const updateProduct = async ({
  id,
  product,
}: {
  id: number;
  product: Partial<Product>;
}) => {
  try {
    const updatedProduct = await prisma.product.update({
      where: {
        id: id,
      },
      data: {
        ...product,
      },
    });

    return updatedProduct;
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};
