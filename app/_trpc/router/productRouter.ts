import { z } from "zod";
import prisma from "@/lib/helper/prisma";
import { publicProcedure, router } from "../trpc";

export const productRouter = router({
  getAllProducts: publicProcedure.query(async () => {
    try {
      return await prisma.product.findMany();
    } catch (error) {
      console.error("Error fetching products:", error);
      throw new Error("Failed to fetch products");
    }
  }),

  getProductById: publicProcedure.input(z.string()).query(async ({ input }) => {
    try {
      const product = await prisma.product.findFirst({
        where: { id: input },
      });
      return product;
    } catch (error) {
      console.error("Error retrieving product by ID:", error);
      throw new Error("Failed to retrieve product");
    }
  }),

  addProduct: publicProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string().optional(),
        price: z.number(),
        category: z.string(),
        image: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      try {
        const newProduct = await prisma.product.create({
          data: input,
        });
        return newProduct;
      } catch (error) {
        console.error("Error adding product:", error);
        throw new Error("Failed to add product");
      }
    }),

  deleteProduct: publicProcedure
    .input(z.string())
    .mutation(async ({ input }) => {
      try {
        await prisma.product.delete({
          where: { id: input },
        });
        return { success: true };
      } catch (error) {
        console.error("Error deleting product:", error);
        throw new Error("Failed to delete product");
      }
    }),

  updateProduct: publicProcedure
    .input(
      z.object({
        id: z.string(),
        product: z.object({
          name: z.string().optional(),
          description: z.string().optional(),
          price: z.number().optional(),
          category: z.string().optional(),
          image: z.string().optional(),
        }),
      })
    )
    .mutation(async ({ input }) => {
      try {
        const updatedProduct = await prisma.product.update({
          where: { id: input.id },
          data: input.product,
        });
        return updatedProduct;
      } catch (error) {
        console.error("Error updating product:", error);
        throw new Error("Failed to update product");
      }
    }),
});
