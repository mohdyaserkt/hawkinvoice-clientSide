import { AxiosError } from "axios";
import "react-toastify/dist/ReactToastify.css";
import { createNewOrganization } from "@/app/api/organization/createNewOrganization";
import { getMyOrganizations } from "@/app/api/organization/getMyOrganizations";

export const handleGetMyOrganizations = async (): Promise<
  string | boolean | AxiosError
> => {
  const user = JSON.parse(localStorage.getItem("user") as string);
  const id = user.id;

  try {
    const tenant = await getMyOrganizations(id);
    return Promise.resolve(tenant as any);
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message, "errors");
    return Promise.reject(err);
  }
};
