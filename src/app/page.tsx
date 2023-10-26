"use client";
import React from "react";
import { logIn } from "@/redux/features/auth-slice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/store";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import Image from "next/image";
import { Roboto } from "next/font/google";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
const roboto = Roboto({
  subsets: ["latin"],
  weight: "700",
});
export default function Home() {
  return (
    <div className="w-screen h-screen">
      <nav className="w-full flex justify-between items-center px-28 py-7">
        <div>
          <h1 className="text-white text-3xl font-semibold">HawkInvoice</h1>
        </div>
        <div className="flex gap-5  items-center">
          <Link href="/login" className="text-sm text-white">
            Login
          </Link>
          <div className="w-52 h-12 bg-secondary rounded-full flex items-center justify-center font-semibold text-sm">
            <Link href="/signup">Create New account</Link>
          </div>
        </div>
      </nav>

      <div className=" px-28 flex items-center gap-[294px] pt-[118px] ">
        <div className="flex flex-col gap-8">
          <div className=" flex flex-col gap-[38px]">
            <h1
              className={`${roboto.className} text-white font-extrabold text-7xl `}
            >
              Revolutionize,
              <br />
              Your Finances.
            </h1>
            <p className="text-white text-lg max-w-[45rem] text-start">
              &ldquo;Streamline Your Finances with Our All-in-One Online
              Invoicing Software. Discover the power of our cutting-edge online
              invoicing software, designed to revolutionize your business
              finances. Simplify expense management, streamline Accounts
              Payable, and upgrade your invoicing process today!&rdquo;
            </p>
          </div>
          <div className="flex gap-5">
            <div className="w-[190px] h-[50px] bg-secondary rounded-full font-bold flex items-center justify-center  text-sm">
              <Link href="/signup">Create New account</Link>
            </div>
            <div className="w-[190px] h-[50px] bg-white rounded-full font-bold flex items-center justify-center  text-sm">
              <Link href="/login">Login Your Account</Link>
            </div>
          </div>

          <div className="flex gap-2 items-center ">
            <AiOutlineSafetyCertificate className="text-secondary h-5 w-5" />{" "}
            <span className="text-white font-bold">
              PCI DSS Level 1, SOC 2 and ISO 27001 certified
            </span>{" "}
          </div>
        </div>
        <div>
          <Image
            src={"/home_Mesa de trabajo 1.svg"}
            width={515}
            height={515}
            alt={"home page image"}
          ></Image>
        </div>
      </div>
    </div>
  );
}
