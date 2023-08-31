import { AxiosError } from "axios";
import "react-toastify/dist/ReactToastify.css";
import { createNewOrganization } from "@/app/api/organization/createNewOrganization";

export const handleCreateNewCustomer = async ({
  NoOfemployes,
  annualRevenue,
  businessName,
  phoneNumber,
  typeOfbusiness,
  setError,
}: handleCreateNewOrganization): Promise<string | boolean | AxiosError> => {
  
  const user = JSON.parse(localStorage.getItem("user") as string);
  businessName = businessName
  typeOfbusiness = typeOfbusiness
  phoneNumber = phoneNumber;
  NoOfemployes = NoOfemployes
  annualRevenue = annualRevenue
  const email = user.email
  const userId = user.id

  try {
    const tenant = await createNewOrganization({
      annualRevenue,
      businessName,
      NoOfemployes,
      phoneNumber,
      typeOfbusiness,
      email,
      userId,
    });
    return Promise.resolve(tenant as any);
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message, "errors");

    return Promise.reject(err);
  }
};
