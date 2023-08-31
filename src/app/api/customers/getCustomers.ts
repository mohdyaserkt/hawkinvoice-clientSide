import { stringify } from "querystring";
import axiosInstance from "../axios";

export const getCustomers = async (): Promise<IUser | Error> => {
  console.log("reached");

  try {
    const response = await axiosInstance.get(`/api/customer/get-customers`);

    return Promise.resolve(response as any);
  } catch (error) {
    return Promise.reject(error);
  }
};
