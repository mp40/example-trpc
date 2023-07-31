import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { getUserId } from "../model/user";

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export const createContext = async (
  opts: trpcNext.CreateNextContextOptions
) => {
  const req = opts?.req;
  const res = opts?.res;

  const userId = getUserId();

  return {
    req,
    res,
    userId,
  };
};

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
