"use client";
import { handleCreateNewOrganization } from "@/utils/Organization/createNewOrganization";
import HandleForm from "@/utils/handleFormState";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ApiError } from "next/dist/server/api-utils";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { MdRefresh } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { BsPlusSquareFill } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import styles from './page.module.css';

const getStarted = () => {
  return (
    <>
      <div className="h-screen">
        <nav className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 w-52">
            <LiaFileInvoiceDollarSolid className="text-white w-8 h-8" />
            <h3 className="text-white text-lg">HawkInvoice</h3>
          </div>
          <div className="flex justify-between items-center border border-white w-full">
            <div className=" flex items-center">
              <MdRefresh className="text-white w-5 h-5 m-3" />
              <div className="flex items-center  bg-secondary p-1 px-2 m-1 rounded-lg border-secondary border lg:h-8">
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

            <div className="flex items-center">
              <BsPlusSquareFill className="bg-black text-secondary" />
              <span className=" text-lg text-white mx-2">|</span>
              <AiOutlineSetting className=" text-white" />
              <span className=" text-lg text-white mx-2">|</span>
              <select >
                <option >Option 1</option>
                <option >Option 2</option>
                <option >Option 3</option>
              </select>
            </div>
          </div>
        </nav>
        <div className=""></div>
      </div>
    </>
  );
};

export default getStarted;
