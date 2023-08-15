import { AxiosError } from "axios";
import { validateEmail, validatePassword } from "../formValidators";

import { loginApi } from "@/api/user/userAuth";

import "react-toastify/dist/ReactToastify.css";
import { createNewOrganization } from "@/api/organization/createNewOrganization";

export const handleCreateNewOrganization = async ({
  NoOfemployes,
  annualRevenue,
  buisinessName,
  phoneNumber,
  typeOfbusiness,
  setError,
}: handleCreateNewOrganization): Promise<string | boolean | AxiosError> => {
  console.log("handle signup");

  buisinessName = buisinessName.trim();
  typeOfbusiness = typeOfbusiness.trim();
  phoneNumber = phoneNumber.trim();
  NoOfemployes = NoOfemployes.trim();
  annualRevenue = annualRevenue.trim()


  try {
    const tenant = await createNewOrganization({annualRevenue,buisinessName,NoOfemployes,phoneNumber,typeOfbusiness});
    return Promise.resolve(tenant as any);
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message, "errors");

    return Promise.reject(err);
  }
};
