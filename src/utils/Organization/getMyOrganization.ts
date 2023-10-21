import { AxiosError } from "axios";
import "react-toastify/dist/ReactToastify.css";
import { createNewOrganization } from "@/app/api/organization/createNewOrganization";
import { getMyOrganizations } from "@/app/api/organization/getMyOrganizations";
import { useAppSelector } from "@/redux/store";

export const handleGetMyOrganizations = async (): Promise<
  string | boolean | AxiosError
> => {
  const id = useAppSelector((state) => state.authReducer.value.id);

  try {
    const tenant = await getMyOrganizations(id);
    return Promise.resolve(tenant as any);
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message, "errors");
    return Promise.reject(err);
  }
};
