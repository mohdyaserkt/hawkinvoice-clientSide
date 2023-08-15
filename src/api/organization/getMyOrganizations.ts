import axiosInstance from "../axios";

export const getMyOrganizations = async (
  id: string
): Promise<IUser | Error> => {
  console.log("reached");

  try {
    const response = await axiosInstance.get(`/api/tenant/create-tenant`, {});

    return Promise.resolve(response as any);
  } catch (error) {
    return Promise.reject(error);
  }
};
