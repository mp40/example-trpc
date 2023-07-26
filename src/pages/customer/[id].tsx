import { GetServerSideProps } from "next";
import { trpc } from "../../utils/trpc";

type CustomerPage = {
  customerId: number;
};

function CustomerPage({ customerId }: CustomerPage) {
  const customer = trpc.customer.useQuery({ customerId });

  if (!customer.data) {
    return (
      <div>
        <h1>Loading...</h1>
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

export const getServerSideProps: GetServerSideProps<CustomerPage> = async (
  context
) => {
  const id = context.params?.id;
  if (!id || Array.isArray(id)) {
    return { notFound: true };
  }

  const customerId = parseInt(id);

  return {
    props: {
      customerId,
    },
  };
};

export default CustomerPage;
