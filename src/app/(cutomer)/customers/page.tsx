"use client";
import { handleCreateNewOrganization } from "@/utils/Organization/createNewOrganization";
import HandleForm from "@/utils/handleFormState";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ApiError } from "next/dist/server/api-utils";

const getStarted = () => {
  

  return (
    <>
      <div className="h-screen">
        <nav></nav>
        <div className="flex h-full justify-center items-center ">
          
        </div>
      </div>
     
    </>
  );
};

export default getStarted;
