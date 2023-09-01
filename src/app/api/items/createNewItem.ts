import axiosInstance from "../axios";

export const createNewItem = async (item: IItemData): Promise<IUser | Error> => {
  console.log("reached");

  try {
    const response = await axiosInstance.post(`/api/customer/item/create-item`, item);

    return Promise.resolve(response as any);
  } catch (error) {
    return Promise.reject(error);
  }
};
