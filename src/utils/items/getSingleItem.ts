import { AxiosError } from "axios";
import "react-toastify/dist/ReactToastify.css";
import { getSingleItem } from "@/app/api/items/getSingleItem";

export const handleGetSingleItem= async (id:string): Promise<
  string | boolean | AxiosError
> => {
  try {
    const singleitem = await getSingleItem(id);
    return Promise.resolve(singleitem as any);
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message, "errors");
    return Promise.reject(err);
  }
};
