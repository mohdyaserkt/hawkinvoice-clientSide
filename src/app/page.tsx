"use client"
import React from 'react';
import { logIn } from "@/redux/features/auth-slice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/store";
import { FcGoogle } from "react-icons/fc";

export default function Home() {
  const dispatch = useDispatch();

  // Use useAppSelector to get data from your Redux store
  const User = useAppSelector((state) => state.authReducer.value.AccessToken);
  const User1 = JSON.parse(localStorage.getItem("AccessToken") as string);



const currentOrganization = useAppSelector((state) => state.orgReducer.value.id);
const currentOrganization1 = JSON.parse(localStorage.getItem("currentOrganization") as string);


const user2 = JSON.parse(localStorage.getItem("user") as string);
const email = user2.email
const userId = user2.id
  
const email3 = useAppSelector((state) => state.authReducer.value.email);
const userId3 = useAppSelector((state) => state.authReducer.value.id);




console.log({email:email,userId:userId,message:"data from local"},{email:email3,userId:userId3,message:"data from redux"});


  console.log({token:User,message:"token from redux"},{token:User1,message:"token from localstorage"});
  console.log({id:currentOrganization,message:"id from redux"},{id:currentOrganization1,message:"id from localstorage"});

  return (
    <div className="w-screen h-screen">
      <nav></nav>
      {/* When the element is clicked, dispatch the logIn action with email as payload */}
      <div
        
        className="flex h-full justify-center items-center text-secondary text-6xl"
      >
        HOME PAGE
      </div>
    </div>
  );
}
