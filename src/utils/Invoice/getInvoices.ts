import { AxiosError } from "axios";
import { getInvoices } from "@/app/api/invoice/get Invoices";

export const handleGetInvoices= async (): Promise<
  string | boolean | AxiosError
> => {
  try {
    const invoices = await getInvoices();
    return Promise.resolve(invoices as any);
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message, "errors");
    return Promise.reject(err);
  }
};
