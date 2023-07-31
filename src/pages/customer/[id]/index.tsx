import { GetServerSideProps } from "next";
import CustomerComponent from "../../../components/Customer";

type CustomerPage = {
  customerId: number;
};

function CustomerPage({ customerId }: CustomerPage) {
  return <CustomerComponent customerId={customerId} />;
}

export const getServerSideProps: GetServerSideProps<CustomerPage> = async (
  context
) => {
  const id = context.params?.id;
  let parsedId: number | undefined = Number(id);
  if (!id || Array.isArray(id) || isNaN(parsedId)) {
    return { notFound: true };
  }

  return {
    props: {
      customerId: parsedId,
    },
  };
};

export default CustomerPage;
