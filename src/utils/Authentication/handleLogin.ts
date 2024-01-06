import { AxiosError } from "axios";
import { validateEmail, validatePassword } from "../formValidators";
import login from "@/app/(auth)/login/page";
import { loginApi } from "@/app/api/user/userAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const handleLogin = async ({
  email,
  password,
}: IhandleSignup): Promise<string | boolean | AxiosError> => {
  console.log("handle signup");

  email = email.trim();
  password = password.trim();
  try {
    const user = await loginApi({ email, password });
    return Promise.resolve(user as any);
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message, "errors");

    return Promise.reject(err);
  }
};







