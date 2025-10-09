import { z } from "zod";

import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from "~/server/api/trpc";

export const usersRouter = createTRPCRouter({
    me: publicProcedure
        .input(z.object({ email: z.string() }))
        .query(async ({ ctx, input }) => {
            return await ctx.db.user.findUnique({
                where: { 
                    email: input.email
                },
                select:{
                    id: true,
                    name: true,
                    email: true,
                    avatar: true,
                    planType: true,
                    referral: true
                }
            })
        }),

});
