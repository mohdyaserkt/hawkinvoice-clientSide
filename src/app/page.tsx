"use client";
import React from "react";
import { logIn } from "@/redux/features/auth-slice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/store";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const dispatch = useDispatch();

  // Use useAppSelector to get data from your Redux store
  // const User = useAppSelector((state) => state.authReducer.value.AccessToken);
  // const User1 = JSON.parse(localStorage.getItem("AccessToken") as string);

  // const currentOrganization = useAppSelector(
  //   (state) => state.orgReducer.value.id
  // );
  // const currentOrganization1 = JSON.parse(
  //   localStorage.getItem("currentOrganization") as string
  // );

  // const user2 = JSON.parse(localStorage.getItem("user") as string);
  // const email = user2.email;
  // const userId = user2.id;

  // const email3 = useAppSelector((state) => state.authReducer.value.email);
  // const userId3 = useAppSelector((state) => state.authReducer.value.id);

  // console.log(
  //   { email: email, userId: userId, message: "data from local" },
  //   { email: email3, userId: userId3, message: "data from redux" }
  // );

  // console.log(
  //   { token: User, message: "token from redux" },
  //   { token: User1, message: "token from localstorage" }
  // );
  // console.log(
  //   { id: currentOrganization, message: "id from redux" },
  //   { id: currentOrganization1, message: "id from localstorage" }
  // );

  return (
    <div className="w-screen h-screen">
      <nav className="w-full">
        <div>
          <h1 className="text-white">hawkInvoice</h1>
        </div>
        <div>
          <Link href="/login">Login</Link>
          <div>Create New account</div>
        </div>
      </nav>

      <div className="w-full h-full ">
        <div>
          <h1>Revolutionize, Your Finances.</h1>
          <p>
            "Streamline Your Finances with Our All-in-One Online Invoicing
            SoftwareDiscover the power of our cutting-edge online invoicing
            software, designed to revolutionize your business finances. Simplify
            expense management, streamline Accounts Payable, and upgrade your
            invoicing process today!"
          </p>
          <div>
            <div>Schedule a demo</div>
            <div>View pricing</div>
          </div>

          <div>
          © 2023 Cloudflare, Inc.
          </div>
        </div>
        <div>
          <Image src={"/3992746_Mesa de trabajo 1_Mesa de trabajo 1.png"}  width={120} height={100} alt={"home page image"} ></Image>
        </div>
      </div>
    </div>
  );
}
