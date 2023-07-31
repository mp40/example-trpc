import { GetServerSideProps } from "next";
import { FormEvent, useEffect, useState } from "react";
import { trpc } from "../../../utils/trpc";

type EditCustomerPage = {
  customerId: number;
};

function EditCustomer({ customerId }: EditCustomerPage) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const customer = trpc.getCustomer.useQuery({
    customerId,
  });

  const mutation = trpc.postCustomer.useMutation();

  useEffect(() => {
    if (customer.data) {
      setFirstName(customer.data.firstName);
      setLastName(customer.data.lastName);
    }
  }, [customer.data]);

  const handleUpdate = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    mutation.mutate({
      customerId,
      firstName,
      lastName,
    });
  };

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
        <h1>Edit Customer</h1>
        <p>Error</p>
        <p>{customer.error.message}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Edit Customer</h1>
      <form onSubmit={(event) => handleUpdate(event)}>
        <label>First Name</label>
        <br />
        <input
          type="text"
          name="firstName"
          minLength={1}
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <br />
        <br />
        <label>Last Name</label>
        <br />
        <input
          type="text"
          name="lastName"
          minLength={1}
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <br />
        <br />
        <button type="submit">UPDATE</button>
      </form>
      {mutation.isSuccess && <p>Customer updated</p>}
      {mutation.error && <p>{`Error: ${mutation.error.message}`}</p>}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<EditCustomerPage> = async (
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

export default EditCustomer;
