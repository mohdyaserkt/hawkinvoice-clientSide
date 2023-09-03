import axiosInstance from "../axios";

export const createNewOrganization = async ({
  email,
  NoOfemployes,
  annualRevenue,
  businessName,
  phoneNumber,
  typeOfbusiness,
  userId,
  organizationAddress
}: IOrganizationData): Promise<IUser | Error> => {
  console.log("reached");
  
  try {
    const response = await axiosInstance.post(`/api/tenant/create-tenant`, {
      email,
      NoOfemployes,
      annualRevenue,
      businessName,
      phoneNumber,
      typeOfbusiness,
      userId,
      organizationAddress
    });
   
    return Promise.resolve(response as any);
  } catch (error) {
    return Promise.reject(error);
  }
};
