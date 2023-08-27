"use client";
import { handleCreateNewOrganization } from "@/utils/Organization/createNewOrganization";
import HandleForm from "@/utils/handleFormState";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ApiError } from "next/dist/server/api-utils";
import { LiaFileInvoiceDollarSolid } from 'react-icons/lia';
import {  } from "react-icons/bi";


const getStarted = () => {
  return (
    <>
      <div className="h-screen">
        <nav>
          <div className="flex items-center space-x-2">
          <LiaFileInvoiceDollarSolid className="text-white w-8 h-8" />
          <h3 className="text-white text-lg">HawkInvoice</h3>
          </div>
          <div>
            

          </div>
        </nav>
        <div className="">
          
        </div>
      </div>
    </>
  );
};

export default getStarted;
