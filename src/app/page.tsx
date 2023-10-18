import React from 'react';
import { logIn } from "@/redux/features/auth-slice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/store";
import { FcGoogle } from "react-icons/fc";

export default function Home() {
  const dispatch = useDispatch();

  // Use useAppSelector to get data from your Redux store
  const data = useAppSelector((state) => state.authReducer.value);

  // Define the email
  const email = "check@gmail.com";

  console.log(data, "my data");

  return (
    <div className="w-screen h-screen">
      <nav></nav>
      {/* When the element is clicked, dispatch the logIn action with email as payload */}
      <div
        onClick={() => dispatch(logIn({ email }))}
        className="flex h-full justify-center items-center text-secondary text-6xl"
      >
        HOME PAGE
      </div>
    </div>
  );
}
