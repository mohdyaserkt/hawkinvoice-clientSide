import { stringify } from "querystring";
import axiosInstance from "../axios";

export const getItemsforInvoice = async (): Promise<IUser | Error> => {
  console.log("reached");

  try {
    const response = await axiosInstance.get(`/api/invoice/item/get-items`);

    return Promise.resolve(response as any);
  } catch (error) {
    return Promise.reject(error);
  }
};
