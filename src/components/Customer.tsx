import { trpc } from "../utils/trpc";

type CustomerComponent = {
  customerId: number;
};

function CustomerComponent({ customerId }: CustomerComponent) {
  const customer = trpc.getCustomer.useQuery({
    customerId,
  });

  if (!customer.data && !customer.error) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (customer.error) {
    return (
      <div>
        <h1>Customer</h1>
        <p>Error</p>
        <p>{customer.error.message}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Customer</h1>
      <p>{`First name: ${customer.data.firstName}`}</p>
      <p>{`Last name: ${customer.data.lastName}`}</p>
    </div>
  );
}

export default CustomerComponent;
