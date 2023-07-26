import * as trpcNext from "@trpc/server/adapters/next";
import { z } from "zod";
import { getFakeCustomer } from "../../../model/customer";
import { publicProcedure, router } from "../../../server/trpc";

const customerInputSchema = z.object({ customerId: z.number() });
export type CustomerInput = z.infer<typeof customerInputSchema>;

const appRouter = router({
  customer: publicProcedure
    .input(customerInputSchema)
    .query(async ({ input }) => {
      return await getFakeCustomer(input);
    }),
});

// export only the type definition of the API
// None of the actual implementation is exposed to the client
export type AppRouter = typeof appRouter;

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});
