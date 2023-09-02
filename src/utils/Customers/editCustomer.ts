import { AxiosError } from "axios";
import "react-toastify/dist/ReactToastify.css";
import { editCustomer } from "@/app/api/customers/editCustomer";

export const handleEditCustomer = async ({
  customer,
setError,
}: handleCreateNewCustomer): Promise<string | boolean | AxiosError> => {
  
//   const user = JSON.parse(localStorage.getItem("user") as string);
//   const email = user.email
//   const userId = user.id

  

  try {
    const editedCustomer = await editCustomer(customer);
    return Promise.resolve(editedCustomer as any);
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message, "errors");

    return Promise.reject(err);
  }
};
