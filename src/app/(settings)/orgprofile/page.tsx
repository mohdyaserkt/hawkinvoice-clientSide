"use client";
import React, { useEffect, useState } from "react";
import {
  LiaFileInvoiceDollarSolid,
  LiaFileInvoiceSolid,
} from "react-icons/lia";
import { MdRefresh } from "react-icons/md";
import { IoColorPaletteOutline } from "react-icons/io5";
import { BsPlusSquareFill, BsFileEarmarkBarGraph } from "react-icons/bs";
import { TbReceipt } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";

import {
  AiOutlineSetting,
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineSearch,
} from "react-icons/ai";
import { GoOrganization } from "react-icons/go";

const getStarted = () => {
  return (
    <>
      <div className="h-screen">
        <nav className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 w-52  mr-1">
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

            <div className="flex items-center space-x-2">
              <BsPlusSquareFill className="bg-black text-secondary" />
              <span className=" text-lg text-white ">|</span>
              <AiOutlineSetting className=" text-white" />
              <span className=" text-lg text-white ">|</span>
              <select className="">
                <option>Organization</option>
                <option>Organization 2</option>
                <option>Organization 3</option>
              </select>
              <div className="pr-2">
                <img
                  src="https://img.freepik.com/free-psd/engraved-black-logo-mockup_125540-223.jpg?w=900&t=st=1693152334~exp=1693152934~hmac=da365a4885d210047abff64bf790f521687c842a32793b5c0416be75b321f977"
                  alt="Your Alt Text"
                  className="rounded-full w-8   h-8   "
                />
              </div>
            </div>
          </div>
        </nav>
        <div className="flex">
          <div className=" w-56 flex flex-col gap-3 py-3 px-2 border ">
            <div className="flex items-center p-2">
              <h1 className="text-white text-[23px]">Settings</h1>
            </div>
            <div className="flex items-center bg-secondary  h-7 rounded-lg space-x-2">
              <GoOrganization className="w-4 h-4 ml-2 text-gray-800" />
              <p className="text-sm text-gray-800">Organization Profile</p>
            </div>
            <div className="flex items-center  h-7 rounded-lg space-x-2">
              <FiUsers className="w-4 h-4 ml-2 text-white" />
              <p className="text-sm text-white">Users & Roles</p>
            </div>
            <div className="flex items-center h-7 rounded-lg space-x-2">
              <IoColorPaletteOutline className="w-4 h-4 ml-2 text-white " />
              <p className="text-sm text-white">Templates</p>
            </div>
          </div>
          <div className="w-full">
            <div className="p-5 flex justify-between w-full border-r-[1px] border-b-[1px] ">
              <div className="text-white">
                <h2 className="text-xl flex items-center">
                  Organization Profile |{" "}
                  <span className="text-[15px] ml-2"> ID: 60022809358</span>
                </h2>
              </div>
            </div>

            <div className="pt-7 pl-16">
              <div>
                <form>
                  <div>
                    <div>
                      <div>
                        <p>Your Logo</p>
                      </div>
                      <div>
                      <input
          type="file"
          accept="image/*" // Optional: Restrict file types to images
          // onChange={this.handleFileUpload}
        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default getStarted;
