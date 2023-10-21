import { createNewInvoice } from "@/app/api/invoice/createNewInvoice";
import { AxiosError } from "axios";
import "react-toastify/dist/ReactToastify.css";
import {
  IInvoice,
  handleCreateInvoice,
} from "../../../types/invoice/createinvoice";

export const handleCreateNewInovice = async ({
  invoice,
  setError,
}: handleCreateInvoice): Promise<string | boolean | AxiosError> => {
  try {
    const tenant = await createNewInvoice(invoice as IInvoice);
    return Promise.resolve(tenant as any);
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message, "errors");

    return Promise.reject(err);
  }
};
