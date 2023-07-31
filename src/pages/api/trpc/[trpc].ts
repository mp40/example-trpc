import * as trpcNext from "@trpc/server/adapters/next";
import { z } from "zod";
import { getFakeCustomer } from "../../../model/customer";
import { createContext } from "../../../server/context";
import { authProcedure, router } from "../../../server/trpc";

const getCustomerInputSchema = z.object({ customerId: z.number() });
export type GetCustomerInput = z.infer<typeof getCustomerInputSchema>;

const appRouter = router({
  getCustomer: authProcedure
    .input(getCustomerInputSchema)
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
  createContext,
});
