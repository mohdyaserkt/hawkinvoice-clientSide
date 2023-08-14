import axiosInstance from "../axios";

export const register = async ({ email,password }:IUserCredentials): Promise<IUser|Error> => {
    try {
      const response = await axiosInstance.post(`/api/user/signup/`, { email,password });
    //   const { user, accessToken, refreshToken } = response.data as ResponseData;
    //   localStorage.setItem("accessToken", accessToken as string);
    //   localStorage.setItem("refreshToken", refreshToken as string);
    //   localStorage.setItem("user", JSON.stringify(user));
    //   store.dispatch(saveUser(user as User));
      return Promise.resolve(response as any);
    } catch (error) {
     return Promise.reject(error);
    }
  }