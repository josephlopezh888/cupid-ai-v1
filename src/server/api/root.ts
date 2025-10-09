import { usersRouter } from "~/server/api/routers/users";
import { referralsRouter } from "~/server/api/routers/referrals";
import { createTRPCRouter } from "~/server/api/trpc";

export const appRouter = createTRPCRouter({
  user: usersRouter,
  referrals: referralsRouter
});

export type AppRouter = typeof appRouter;
