import { AxiosError } from "axios";
import { getOrganizationAddress } from "@/app/api/organization/getOrganizationAdress";
import persistStore from "redux-persist/es/persistStore";
import { store } from "@/redux/store";
const persistor = persistStore(store);
const state = store.getState();

export const handleGetOrganizationsAddress = async (): Promise<
  string | boolean | AxiosError
> => {
  

  try {
    const address = await getOrganizationAddress();
    return Promise.resolve(address as any);
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message, "errors");
    return Promise.reject(err);
  }
};
