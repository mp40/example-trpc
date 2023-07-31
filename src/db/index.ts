export type Customer = {
  customerId: number;
  firstName: string;
  lastName: string;
};

type DatabaseDouble = {
  [key: number]: Customer;
};

export const databaseDouble: DatabaseDouble = {
  1: {
    customerId: 1,
    firstName: "Bon",
    lastName: "Scott",
  },
  666: {
    customerId: 666,
    firstName: "Angus",
    lastName: "Young",
  },
};
