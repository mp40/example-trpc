import { CustomerInput } from "../pages/api/trpc/[trpc]";

type Customer = {
  customerId: number;
  firstName: string;
  lastName: string;
};

export async function getFakeCustomer({
  customerId,
}: CustomerInput): Promise<Customer> {
  if (customerId === 1) {
    return {
      customerId: 1,
      firstName: "Bon",
      lastName: "Scott",
    };
  }

  if (customerId === 666) {
    return {
      customerId: 666,
      firstName: "Angus",
      lastName: "Young",
    };
  }

  throw new Error("customerId not found");
}
