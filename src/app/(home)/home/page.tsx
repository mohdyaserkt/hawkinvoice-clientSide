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
              <div className="text-white">
                <div className="w-12 h-12">
                  <Image width={49} height={49}  alt="organization Logo" className="object-cover" src={"https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=640&q=80"} />
                </div>
                <div>
                  <h2 className="text-lg">Hello, User Name</h2>
                  <p>Organization Name</p>

                </div>
              </div>
            </div>

            <div className="pt-7 pl-16">
              <div>
                <form className="text-[13px] text-white">
                  <div className="flex flex-col gap-7">
                    <div className="flex space-x-28">
                      <p>Type</p>
                      <div className="flex space-x-2">
                        <div className="flex space-x-2">
                          <input
                            name="Type"
                            className="accent-secondary"
                            type="radio"
                            checked
                          />
                          <p>Goods</p>
                        </div>
                        <div className="flex space-x-2">
                          <input
                            name="Type"
                            className="accent-secondary"
                            type="radio"
                          />
                          <p>Services</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-[98px]">
                      <p>
                        Name<span className="text-red-600">*</span>
                      </p>

                      <div className=" flex items-center">
                        <input
                          className="focus:outline-none rounded-md w-80 h-8 text-xs text-black p-2"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="flex gap-[119px]">
                      <p>Unit</p>
                      <div>
                        <input
                          className="focus:outline-none rounded-md w-80 h-8 text-xs text-black p-2"
                          type="text"
                        />
                      </div>
                    </div>
                    {/* <div>
                    <p>Currency</p>
                    <div>
                      <input type="text" />
                    </div>
                     focus:outline-none              </div> */}

                    <div className="flex items-center gap-[60px]">
                      <p>
                        Selling Price<span className="text-red-600">*</span>
                      </p>
                      <div className="flex items-center">
                        <input
                          className="focus:outline-none rounded-md w-40 h-8 text-xs text-black p-2"
                          type="number"
                          placeholder="INR"
                        />
                      </div>
                    </div>
                    <div className="flex items-start gap-[71px]">
                      <p>Description</p>
                      <div className=" flex  w-80 ">
                        <textarea
                          placeholder="Description "
                          className="focus:outline-none rounded-md  text-xs w-64 text-black p-2"
                        ></textarea>
                      </div>
                    </div>

                    <div className="flex gap-2 ml-3">
                      <button
                        className="bg-secondary py-2 px-3 rounded-md text-sm text-black"
                        type="submit"
                      >
                        Save
                      </button>
                      <button
                        className=" rounded-md bg-white py-2 px-3 text-sm text-black"
                        type="reset"
                      >
                        Cancel
                      </button>
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
