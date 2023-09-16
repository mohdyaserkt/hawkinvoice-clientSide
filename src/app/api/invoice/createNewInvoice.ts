import axiosInstance from "../axios";

export const createNewCutomer = async (customer: ICustomerData): Promise<IUser | Error> => {
  console.log("reached");

  try {
    const response = await axiosInstance.post(`/api/customer/create-customer`, customer);

    return Promise.resolve(response as any);
  } catch (error) {
    return Promise.reject(error);
  }
};
