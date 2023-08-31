import axiosInstance from "../axios";

export const createNewCutomer = async ({
  email,
  billingAddress,
  customerType,
  displayName,
  firstName,
  lastName,
  shippingAddress,
  workPhone,
  customerCompanyName,
  mobile,
  salutaion,
}: ICustomerData): Promise<IUser | Error> => {
  console.log("reached");

  try {
    const response = await axiosInstance.post(`/api/customer/create-customer`, {
      email,
      billingAddress,
      customerType,
      displayName,
      firstName,
      lastName,
      shippingAddress,
      workPhone,
      customerCompanyName,
      mobile,
      salutaion,
    });

    return Promise.resolve(response as any);
  } catch (error) {
    return Promise.reject(error);
  }
};
