import { Customer } from "../db";
import { GetCustomerInput } from "../pages/api/trpc/[trpc]";

export async function getFakeCustomer({
  customerId,
}: GetCustomerInput): Promise<Customer> {
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
