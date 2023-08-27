"use client";
import { handleCreateNewOrganization } from "@/utils/Organization/createNewOrganization";
import HandleForm from "@/utils/handleFormState";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ApiError } from "next/dist/server/api-utils";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { MdRefresh } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";

const getStarted = () => {
  return (
    <>
      <div className="h-screen">
        <nav className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 w-">
            <LiaFileInvoiceDollarSolid className="text-white w-8 h-8" />
            <h3 className="text-white text-lg">HawkInvoice</h3>
          </div>
          <div>
            <div className=" flex items-center">
              <MdRefresh className="text-white w-5 h-5" />
              <div className="flex items-center  bg-secondary p-1 px-2 rounded-lg border-secondary border">
                <AiOutlineSearch className="text-black w-5 h-5" />
                <span className="text-gray-900 text-lg mx-2">|</span>
                <div className="mr-[10px]">
                  <input
                    type="text"
                    placeholder="Search in Customers(/)"
                    className="bg-transparent text-black border-none focus:outline-none placeholder-black text-xs"
                  />
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className=""></div>
      </div>
    </>
  );
};

export default getStarted;
