"use client";
import { logIn } from "@/redux/features/auth-slice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();

  let data = useAppSelector((state) => state.authReducer.value);

  let email = "check@sdfsdfs.com";

  console.log(data, "my data   knkjk");
  return (
    <>
      <div className="w-screen h-screen ">
        <nav></nav>
        <div
          onClick={() => dispatch(logIn(email))}
          className="flex h-full justify-center items-center text-secondary text-6xl "
        >
          HOME PAGE
        </div>
      </div>
    </>
  );
}
