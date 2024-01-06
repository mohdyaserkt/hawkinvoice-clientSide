import { AxiosError } from "axios";
import "react-toastify/dist/ReactToastify.css";
import { createNewOrganization } from "@/app/api/organization/createNewOrganization";
import { store } from "@/redux/store";
import persistStore from "redux-persist/es/persistStore";
const persistor = persistStore(store);


export const handleCreateNewOrganization = async ({
  NoOfemployes,
  annualRevenue,
  businessName,
  phoneNumber,
  typeOfbusiness,
  organizationAddress,
  setError,
}: handleCreateNewOrganization): Promise<string | boolean | AxiosError> => {
  const state = store.getState();
  const email = state.authReducer.value.email;
  const userId = state.authReducer.value.id;
  console.log(email,userId,"this are the data for the create new teanants");
  

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
