import { CustomerInput } from "../pages/api/trpc/[trpc]";

type Customer = {
  customerId: number;
  firstName: string;
  lastName: string;
};

export async function getFakeCustomer({
  customerId,
}: CustomerInput): Promise<Customer> {
  if (customerId !== 666) {
    throw new Error("customerId not found");
  }

  return {
    customerId: 666,
    firstName: "Angus",
    lastName: "Young",
  };
}
