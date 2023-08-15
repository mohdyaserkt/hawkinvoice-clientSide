import { AxiosError } from "axios";
import { validateEmail, validatePassword } from "../formValidators";
import { register } from "@/api/user/userAuth";

export const handleSignup= async ({
  email,
  password,setError
}: IhandleSignup): Promise<string | boolean | AxiosError> => {
    console.log("handle signup");
    
  email = email.trim();
  password = password.trim();


  if (!validateEmail(email)) {
    setError("email", ["Provide a valid email address"]);
    return false;
  }

  if (!validatePassword(password)) {
    
    console.log("At least 8 characters,One uppercase letterOne lowercase letterOne digit One special character");
    
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
    console.log(err,err.message,"error");
    
    return Promise.reject(err);
  }
};
