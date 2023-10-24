import { stringify } from "querystring";
import axiosInstance from "../axios";

export const getOrganizationAddress = async (): Promise<IUser | Error> => {
  console.log("reached");

  try {
    const response = await axiosInstance.get(
      `/api/organization/get-organization-address`
    );

    return Promise.resolve(response as any);
  } catch (error) {
    return Promise.reject(error);
  }
};
