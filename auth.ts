import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { getUserFromDb } from "./lib/actions/user";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;
        user = await getUserFromDb(
          credentials.email as string,
          credentials.password as string
        );

        if (!user) {
          throw new Error("Invalid credentials.");
        }

        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 2 * 60,
    updateAge: 25 * 60 * 60,
  },
});
