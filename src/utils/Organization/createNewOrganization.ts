import { AxiosError } from "axios";
import "react-toastify/dist/ReactToastify.css";
import { createNewOrganization } from "@/app/api/organization/createNewOrganization";

export const handleCreateNewOrganization = async ({
  NoOfemployes,
  annualRevenue,
  businessName,
  phoneNumber,
  typeOfbusiness,
  organizationAddress,
  setError,
}: handleCreateNewOrganization): Promise<string | boolean | AxiosError> => {
  
  const user = JSON.parse(localStorage.getItem("user") as string);
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
      organizationAddress
    });
    return Promise.resolve(tenant as any);
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message, "errors");

    return Promise.reject(err);
  }
};
