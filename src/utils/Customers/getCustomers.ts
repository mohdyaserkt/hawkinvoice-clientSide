import { AxiosError } from "axios";
import "react-toastify/dist/ReactToastify.css";
import { getCustomers } from "@/app/api/customers/getCustomers";

export const handleGetCustomers = async (): Promise<
  string | boolean | AxiosError
> => {
  try {
    const customers = await getCustomers();
    return Promise.resolve(customers as any);
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message, "errors");
    return Promise.reject(err);
  }
};
