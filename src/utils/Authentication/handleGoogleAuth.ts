import { loginApi, register } from '@/app/api/user/userAuth';

export const handleGoogleAuth = async (
  email: string,
  password: string,
  provider: boolean
) => {
  if (provider) {
    const registeredUser: any = await register({ email, password });
    if (!registeredUser) {
    } else if (registeredUser) {
      return registeredUser.data;
    }
  } else {
    const loginedUser: any = await loginApi({ email, password });
    if (!loginedUser) {
      return false;
    } else if (loginedUser) {
      return loginedUser.data;
    }
  }
};
