"use client";
import { handleCreateNewOrganization } from "@/utils/Organization/createNewOrganization";
import HandleForm from "@/utils/handleFormState";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ApiError } from "next/dist/server/api-utils";
import { LiaFileInvoiceDollarSolid } from 'react-icons/lia';
import { MdRefresh } from "react-icons/md";


const getStarted = () => {
  return (
    <>
      <div className="h-screen">
        <nav className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
          <LiaFileInvoiceDollarSolid className="text-white w-8 h-8" />
          <h3 className="text-white text-lg">HawkInvoice</h3>
          </div>
          <div>
            <div>
               <MdRefresh className="text-white w-5 h-5" />
               <div>
                <div>

                </div>
                
               </div>
            </div>
         

            

          </div>
        </nav>
        <div className="">
          
        </div>
      </div>
    </>
  );
};

export default getStarted;
