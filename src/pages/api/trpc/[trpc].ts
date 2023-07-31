import * as trpcNext from "@trpc/server/adapters/next";
import { z } from "zod";
import { getFakeCustomer, updateFakeCustomer } from "../../../model/customer";
import { createContext } from "../../../server/context";
import { authProcedure, router } from "../../../server/trpc";

const getCustomerInputSchema = z.object({ customerId: z.number() });
export type GetCustomerInput = z.infer<typeof getCustomerInputSchema>;

const postCustomerSchema = z.object({
  customerId: z.number(),
  firstName: z.string(),
  lastName: z.string(),
});

const appRouter = router({
  getCustomer: authProcedure
    .input(getCustomerInputSchema)
    .query(async ({ input }) => {
      return await getFakeCustomer(input);
    }),
  postCustomer: authProcedure
    .input(postCustomerSchema)
    .mutation(async ({ input }) => {
      return await updateFakeCustomer(input);
    }),
});

// export only the type definition of the API
// None of the actual implementation is exposed to the client
export type AppRouter = typeof appRouter;

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
  onError({ error }) {
    if (error.code === "INTERNAL_SERVER_ERROR") {
      console.error("Error:", error);
    }
  },
});
