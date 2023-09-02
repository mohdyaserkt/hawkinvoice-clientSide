import { AxiosError } from "axios";
import "react-toastify/dist/ReactToastify.css";
import { getCustomers } from "@/app/api/customers/getCustomers";
import { getSingleCustomer } from "@/app/api/customers/getSingleCustomer";

export const handleGetSingleCustomer = async (id:string): Promise<
  string | boolean | AxiosError
> => {
  try {
    const customer = await getSingleCustomer(id);
    return Promise.resolve(customer as any);
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message, "errors");
    return Promise.reject(err);
  }
};
