interface handleCreateNewCustomer {
    customer:{
  customerType: string;
  firstName: string;
  lastName: string;
  displayName: string;
  workPhone: number;
  email: string;
  salutaion?: String;
  customerCompanyName?: String;
  mobile?: Number;
  billingAddress: {
    attention: String;
    region: String;
    street1: String;
    street2: String;
    city: String;
    state: String;
  };
  shippingAddress: {
    attention: String;
    region: String;
    street1: String;
    street2: String;
    city: String;
    state: String;
  };}

  setError?: (field: string, errors: string[]) => void;
}

interface ICustomerData {
    customerType: string;
    firstName: string;
    lastName: string;
    displayName: string;
    workPhone: number;
    email: string;
    salutaion?: String;
    customerCompanyName?: String;
    mobile?: Number;
    billingAddress: {
      attention: String;
      region: String;
      street1: String;
      street2: String;
      city: String;
      state: String;
    };
    shippingAddress: {
      attention: String;
      region: String;
      street1: String;
      street2: String;
      city: String;
      state: String;
    };
}
