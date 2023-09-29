"use client";
import React, { useState } from "react";
import {
  LiaFileInvoiceDollarSolid,
  LiaFileInvoiceSolid,
} from "react-icons/lia";
import { MdRefresh } from "react-icons/md";
import { PiHandbag, PiCopySimple } from "react-icons/pi";
import { BsPlusSquareFill, BsFileEarmarkBarGraph } from "react-icons/bs";
import { TbReceipt } from "react-icons/tb";
import { SlOptions } from "react-icons/sl";
import {
  AiOutlineSetting,
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineSearch,
} from "react-icons/ai";
import { useRouter } from "next/navigation";
import { ApiError } from "next/dist/server/api-utils";
import { handleCreateNewItem } from "@/utils/items/createNewItem";
import Image from "next/image";

const getStarted = () => {
  const progressData = [
    { color: "blue", value: 40 },
    { color: "green", value: 30 },
    { color: "red", value: 20 },
    { color: "yellow", value: 10 },
  ];
  const router = useRouter();
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
        <div className="flex" style={{ height: "calc(100vh - 47px)" }}>
          <div className=" w-56 flex flex-col gap-3 py-3 px-2 border ">
            <div className="flex items-center  h-7 rounded-lg space-x-2">
              <AiOutlineHome className="w-4 h-4 ml-2 text-white" />
              <p className="text-sm text-white">Home</p>
            </div>
            <div className="flex items-center bg-secondary h-7 rounded-lg space-x-2">
              <AiOutlineUser className="w-4 h-4 ml-2 text-white" />
              <p className="text-sm text-white">Customers</p>
            </div>
            <div className="flex items-center h-7 rounded-lg space-x-2">
              <PiHandbag className="w-4 h-4 ml-2 text-white " />
              <p className="text-sm text-white">Items</p>
            </div>
            <div className="flex items-center h-7 rounded-lg space-x-2">
              <LiaFileInvoiceSolid className="w-4 h-4 ml-2 text-white" />
              <p className="text-sm text-white">Invoices</p>
            </div>
            <div className="flex items-center h-7 rounded-lg space-x-2">
              <img
                src="/recievedpayments.svg"
                alt=""
                className="w-4 h-4 ml-2 text-white"
              />
              <p className="text-sm text-white">Payments Recieved</p>
            </div>
            <div className="flex items-center h-7 rounded-lg space-x-2">
              <TbReceipt className="w-4 h-4 ml-2 text-white" />
              <p className="text-sm text-white">Expenses</p>
            </div>
            <div className="flex items-center h-7 rounded-lg space-x-2">
              <BsFileEarmarkBarGraph className="w-4 h-4 ml-2 text-white" />
              <p className="text-sm text-white">Reports</p>
            </div>
          </div>
          <div className="w-full">
            <div className="p-5 flex justify-between w-full border-r-[1px] border-b-[1px] ">
              <div className="text-white flex gap-3">
                <div className="w-12 h-12">
                  <Image
                    width={50}
                    height={50}
                    alt="organization Logo"
                    className="object-cover rounded-lg"
                    src={
                      "https://cdn.w600.comps.canstockphoto.com/your-logo-here-placeholder-symbol-vector-eps-vector_csp84465644.jpg"
                    }
                  />
                </div>
                <div className="items-center">
                  <h2 className="text-lg">Hello, User Name</h2>
                  <h2 className="text-[13px] text-secondary">
                    Organization Name
                  </h2>
                </div>
              </div>
            </div>

            <div className="pt-7 pl-16 flex flex-col gap-5">
              <div className="h-52 w-[998px] rounded-lg">
                <div className="w-full h-[49px] bg-orange-300rounded-lg border rounded-t-lg bg-secondary"></div>
                <div className="w-full h-[67px] bg-orange-500  border-b border-x">
                  <div className="relative pt-1">
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-amber-200">
                      <div
                        style={{ width: "10%" }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                      ></div>
                      <div
                        style={{ width: "15%" }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500"
                      ></div>
                      <div
                        style={{ width: "25%" }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-amber-500"
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="w-full h-[92px] rounded-b-lg border-b border-x flex justify-around p-3 items-center">
                  <div className="border-e pr-6">
                    <div className="">
                      <p className="text-xs text-white">CURRENT</p>
                      <h3 className="text-white text-xl">₹0.00</h3>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-white">OVERDUE</p>
                    <h3 className="text-white text-xl">₹0.00</h3>
                    <p className="text-secondary text-xs">1-15 Days</p>
                  </div>
                  <div className="">
                    <h3 className="text-white text-xl">₹0.00</h3>
                    <p className="text-secondary text-xs">16-30 Days</p>
                  </div>

                  <div>
                    <h3 className="text-white text-xl">₹0.00</h3>
                    <p className="text-secondary text-xs">Above 45 days</p>
                  </div>

                  <div>
                    <h3 className="text-white text-xl">₹0.00</h3>
                    <p className="text-secondary text-xs">Above 45 days</p>
                  </div>
                </div>
              </div>

              <div className="h-[363px] w-[998px] rounded-lg bg-yellow-300"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default getStarted;
