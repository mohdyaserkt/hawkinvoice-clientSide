import { AxiosError } from "axios";
import "react-toastify/dist/ReactToastify.css";
import { createNewItem } from "@/app/api/items/createNewItem";

export const handleCreateNewItem = async ({
  item,
setError,
}: handleCreateNewItem): Promise<string | boolean | AxiosError> => {
  
//   const user = JSON.parse(localStorage.getItem("user") as string);
//   const email = user.email
//   const userId = user.id

  

  try {
    const tenant = await createNewItem(item);
    return Promise.resolve(tenant as any);
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message, "errors");

    return Promise.reject(err);
  }
};
