import { AxiosError } from "axios";
import "react-toastify/dist/ReactToastify.css";
import { createNewCutomer } from "@/app/api/customers/createNewCustomer";

export const handleCreateNewCustomer = async ({
  billingAddress,
customerType,
displayName,
email,
shippingAddress,
workPhone,
customerCompanyName,
mobile,
salutaion,
firstName,
lastName,
setError,
}: handleCreateNewCustomer): Promise<string | boolean | AxiosError> => {
  
//   const user = JSON.parse(localStorage.getItem("user") as string);
//   const email = user.email
//   const userId = user.id
  

  try {
    const tenant = await createNewCutomer({
        billingAddress,
        customerType,
        displayName,
        email,
        shippingAddress,
        workPhone,
        customerCompanyName,
        mobile,
        salutaion,
        firstName,
        lastName,
    });
    return Promise.resolve(tenant as any);
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message, "errors");

    return Promise.reject(err);
  }
};
