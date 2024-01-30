import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { users } from "~/server/db/schema";
import { sql } from "drizzle-orm";

export const stravaRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ userId: z.string().min(1), stravaId: z.number().min(1), refreshToken: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      // await new Promise((resolve) => setTimeout(resolve, 1000));

      await ctx.db.insert(users).values({
        id: input.userId,
        stravaId: input.stravaId,
        refreshToken: input.refreshToken
      });
    }),

  // getUser: publicProcedure.query(({ ctx }) => {
  //   const userId = ctx.auth.userId;
  //   return ctx.db.select({ 
  //     id: users.id,
  //     stravaId: users.stravaId,
  //     refreshToken: users.refreshToken
  // }).from(users)
  //   .where(sql`${users.id} = ${userId}`);
  // }),

  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.posts.findFirst({
      orderBy: (posts, { desc }) => [desc(posts.createdAt)],
    });
  }),

  getLatestUser: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.users.findFirst({
      orderBy: (users, { desc }) => [desc(users.createdAt)],
    });
  }),
});
