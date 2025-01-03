import { createTRPCReact, CreateTRPCReact } from "@trpc/react-query";

import { type AppRouter } from "@/app/_trpc";

export const trpc = createTRPCReact<AppRouter>({});
