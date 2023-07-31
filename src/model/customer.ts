import { Customer, databaseDouble } from "../db";
import { GetCustomerInput } from "../pages/api/trpc/[trpc]";

export async function getFakeCustomer({
  customerId,
}: GetCustomerInput): Promise<Customer> {
  const customer: Customer | null = databaseDouble[customerId];

  if (!customer) {
    throw new Error("customerId not found");
  }

  return customer;
}
