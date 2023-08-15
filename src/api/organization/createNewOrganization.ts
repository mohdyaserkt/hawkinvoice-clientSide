import axiosInstance from "../axios";

export const createNewOrganization = async ({
  email,
  NoOfemployes,
  annualRevenue,
  buisinessName,
  phoneNumber,
  typeOfbusiness,
  userId,
}: IOrganizationData): Promise<IUser | Error> => {
  console.log("reached");
  
  try {
    const response = await axiosInstance.post(`/api/tenant/create-tenant`, {
      email,
      NoOfemployes,
      annualRevenue,
      buisinessName,
      phoneNumber,
      typeOfbusiness,
      userId,
    });
   
    return Promise.resolve(response as any);
  } catch (error) {
    return Promise.reject(error);
  }
};
