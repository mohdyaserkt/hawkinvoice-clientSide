import { AxiosError } from "axios";
import "react-toastify/dist/ReactToastify.css";
import { createNewOrganization } from "@/app/api/organization/createNewOrganization";
import { useAppSelector } from "@/redux/store";

export const handleCreateNewOrganization = async ({
  NoOfemployes,
  annualRevenue,
  businessName,
  phoneNumber,
  typeOfbusiness,
  organizationAddress,
  setError,
}: handleCreateNewOrganization): Promise<string | boolean | AxiosError> => {
  const email = useAppSelector((state) => state.authReducer.value.email);
  const userId = useAppSelector((state) => state.authReducer.value.id);

  try {
    const tenant = await createNewOrganization({
      annualRevenue,
      businessName,
      NoOfemployes,
      phoneNumber,
      typeOfbusiness,
      email,
      userId,
      organizationAddress,
    });
    return Promise.resolve(tenant as any);
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message, "errors");

    return Promise.reject(err);
  }
};
