import prisma from "../helper/prisma";

export const getUserFromDb = async (email: string, pwd: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    // Check if user exists and password matches
    if (user && user.password === pwd) {
      return user; // Return the user data
    }

    return null; // Return null if user not found or password mismatch
  } catch (error) {
    console.error("Error fetching user from database:", error);
    throw new Error("Unable to fetch user");
  } finally {
    await prisma.$disconnect(); // Ensure Prisma disconnects
  }
};
