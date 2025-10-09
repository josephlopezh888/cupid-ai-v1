import { z } from "zod";

import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
} from "~/server/api/trpc";

export const referralsRouter = createTRPCRouter({
    getinfo: publicProcedure
        .input(z.object({ email: z.string() }))
        .query(async ({ ctx, input }) => {
            const userId = await ctx.db.user.findUnique({
                where: {
                    email: input.email
                },
                select: {
                    id: true,
                }
            });

            return await ctx.db.referral.findFirst({
                where: {
                    id: userId?.id
                },
            })
        }),

    getWithdrawals: publicProcedure
        .input(z.object({ email: z.string() }))
        .query(async ({ ctx, input }) => {

            const userId = await ctx.db.user.findUnique({
                where: {
                    email: input.email
                },
                select: {
                    id: true,
                    referral: true
                }
            });

            return await ctx.db.withdrawalModel.findMany({
                where: {
                    referralId: userId?.referral[0]?.id
                },
                take: 5,
                orderBy: {
                    date: 'asc',
                },
                select: {
                    id: true,
                    date: true,
                    amount: true,
                    status: true,
                    btc: true,
                    ltc: true,
                    paypal: true,
                    note: true
                }
            })
        }),

    createWithdrawal: publicProcedure
        .input(z.object({
            email: z.string(),
            amount: z.number(),
            status: z.string(),
            btc: z.string(),
            ltc: z.string(),
            paypal: z.string(),
        }))
        .mutation(async ({ ctx, input }) => {

            const dateTime = Date.now();
            const userId = await ctx.db.user.findUnique({
                where: {
                    email: input.email
                },
                select: {
                    id: true,
                    referral: true
                }
            });

            return await ctx.db.withdrawalModel.create({
                data: {
                    date: dateTime.toString(),
                    amount: input.amount,
                    status: input.status,
                    btc: input.btc,
                    ltc: input.ltc,
                    paypal: input.paypal,
                    note: '',
                    referral: {
                        connect: {
                            id: userId?.referral[0]?.id
                        },
                    },
                }
            })
        }),
});

