import axiosInstance from '../axios';

export const register = async ({
  email,
  password,
}: IUserCredentials): Promise<IUser | Error> => {
  console.log('register');

  try {
    const response = await axiosInstance.post(`/api/tenant/user/signup`, {
      email,
      password,
    });
    return Promise.resolve(response as any);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const loginApi = async ({
  email,
  password,
}: IUserCredentials): Promise<IUser | Error> => {
  console.log('login');

  try {
    console.log(email, password, 'login api data');

    const response = await axiosInstance.post(`/api/tenant/user/login`, {
      email,
      password,
    });
    console.log(response, 'login res');
    return Promise.resolve(response as any);
  } catch (error) {
    return Promise.reject(error);
  }
};
