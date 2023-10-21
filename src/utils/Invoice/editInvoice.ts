import { AxiosError } from "axios";
import "react-toastify/dist/ReactToastify.css";
import { createNewItem } from "@/app/api/items/createNewItem";
import { editItem } from "@/app/api/items/editItem";
import {
  IInvoice,
  handleCreateInvoice,
} from "../../../types/invoice/createinvoice";
import { editInvoice } from "@/app/api/invoice/editInvoice";

export const handleEditInvoice = async ({
  invoice,
  setError,
}: handleCreateInvoice): Promise<string | boolean | AxiosError> => {
  try {
    const editedInvoice = await editInvoice(invoice as IInvoice);
    return Promise.resolve(editedInvoice as any);
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message, "errors");

    return Promise.reject(err);
  }
};
