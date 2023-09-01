import { AxiosError } from "axios";
import "react-toastify/dist/ReactToastify.css";
import { getItems } from "@/app/api/items/getItems";

export const handleGetItems= async (): Promise<
  string | boolean | AxiosError
> => {
  try {
    const customers = await getItems();
    return Promise.resolve(customers as any);
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message, "errors");
    return Promise.reject(err);
  }
};
