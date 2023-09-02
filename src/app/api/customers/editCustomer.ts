import axiosInstance from "../axios";

export const editCustomer = async (customer: ICustomerData): Promise<IUser | Error> => {
  console.log("reached");

  try {
    const response = await axiosInstance.post(`/api/customer/edit-customer`, customer);

    return Promise.resolve(response as any);
  } catch (error) {
    return Promise.reject(error);
  }
};
