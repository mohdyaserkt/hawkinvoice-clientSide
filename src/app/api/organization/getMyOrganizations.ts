import { stringify } from "querystring";
import axiosInstance from "../axios";

export const getMyOrganizations = async (
  id: string
): Promise<IUser | Error> => {
  console.log("reached");

  try {
    const response = await axiosInstance.post(`/api/tenant/find-tenants`,{id});

    return Promise.resolve(response as any);
  } catch (error) {
    return Promise.reject(error);
  }
};
