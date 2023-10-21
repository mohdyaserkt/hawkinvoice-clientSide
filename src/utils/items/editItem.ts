import { AxiosError } from "axios";
import "react-toastify/dist/ReactToastify.css";
import { createNewItem } from "@/app/api/items/createNewItem";
import { editItem } from "@/app/api/items/editItem";

export const handleEditItem = async ({
  item,
  setError,
}: handleCreateNewItem): Promise<string | boolean | AxiosError> => {
  try {
    const editedItem = await editItem(item);
    return Promise.resolve(editedItem as any);
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message, "errors");

    return Promise.reject(err);
  }
};
