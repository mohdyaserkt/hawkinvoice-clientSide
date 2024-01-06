import { AxiosError } from "axios";
import { validateEmail, validatePassword } from "../formValidators";
import { register } from "@/app/api/user/userAuth";

export const handleSignup= async ({
  email,
  password,setError
}: IhandleSignup): Promise<string | boolean | AxiosError> => {
    console.log("handle signup");
    
  email = email.trim();
  password = password.trim();

  try {
    const user = await register({ email,password });
    return Promise.resolve(user as any);
  } catch (error) {
    const err = error as AxiosError;
    console.log(err,err.message,"error");
    
    return Promise.reject(err);
  }
};
