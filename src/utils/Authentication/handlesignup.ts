import { AxiosError } from "axios";
import { validateEmail, validatePassword } from "../formValidators";
import { register } from "@/api/user/userAuth";

export const handleSignup= async ({
  email,
  password,setError
}: IhandleSignup): Promise<string | boolean | AxiosError> => {
  email = email.trim();
  password = password.trim();


  if (!validateEmail(email)) {
    setError("email", ["Provide a valid email address"]);
    return false;
  }

  if (!validatePassword(password)) {
    setError("password", [
      "At least 8 characters",
      "One uppercase letter",
      "One lowercase letter",
      "One digit",
      "One special character",
    ]);
    return false;
  }

  try {
    const user = await register({ email,password });
    return Promise.resolve(user as any);
  } catch (error) {
    const err = error as AxiosError;
    return Promise.reject(err.response?.data);
  }
};
