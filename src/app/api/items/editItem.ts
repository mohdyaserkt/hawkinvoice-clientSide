import axiosInstance from "../axios";

export const editItem = async (item: IItemData): Promise<IUser | Error> => {
  console.log("reached");

  try {
    const response = await axiosInstance.post(`/api/customer/item/edit-item`, item);

    return Promise.resolve(response as any);
  } catch (error) {
    return Promise.reject(error);
  }
};
