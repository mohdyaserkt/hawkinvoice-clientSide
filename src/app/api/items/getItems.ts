import { stringify } from "querystring";
import axiosInstance from "../axios";

export const getItems = async (): Promise<IUser | Error> => {
  console.log("reached");

  try {
    const response = await axiosInstance.get(`/api/customer/item/get-items`);

    return Promise.resolve(response as any);
  } catch (error) {
    return Promise.reject(error);
  }
};
