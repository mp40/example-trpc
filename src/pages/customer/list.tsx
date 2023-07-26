import { GetServerSideProps } from "next";
import CustomerComponent from "../../components/Customer";

type CustomerListPage = {
  customerIds: number[];
};

function CustomerListPage({ customerIds }: CustomerListPage) {
  if (!customerIds) {
    return <div>NOT FOUND</div>;
  }

  return (
    <div>
      {customerIds.map((id) => {
        return <CustomerComponent key={id} customerId={id} />;
      })}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<
  CustomerListPage
> = async () => {
  const customerIdsDouble = [1, 666];

  return {
    props: {
      customerIds: customerIdsDouble,
    },
  };
};

export default CustomerListPage;
