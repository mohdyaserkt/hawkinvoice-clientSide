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
import { FiSearch } from "react-icons/fi";
import {
  AiOutlineSetting,
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineSearch,
} from "react-icons/ai";
import { useRouter } from "next/navigation";
import { ApiError } from "next/dist/server/api-utils";
import { handleCreateNewItem } from "@/utils/items/createNewItem";

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
        <div className="flex">
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
                <h2 className="text-xl">New Invoice</h2>
              </div>
            </div>

            <div className="pt-7 pl-16">
              <div>
                <form className="text-[13px] text-white">
                  <div>
                    <div className="flex items-center gap-[72px]">
                      <p>
                        Customer Name<span className="text-red-500">*</span>
                      </p>
                      <div className="flex items-center">
                        <div>
                          <select name="" className=" bg-transparent border rounded-l-md w-[503px] h-8 px-3" id="">
                            <option value="" className="">first Customer</option>
                            <option value="" className="">Second Customer</option>
                          </select>
                        </div>
                        <div className="bg-secondary h-8 w-8 flex items-center justify-center  rounded-r-md">
                          <FiSearch />
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-[232px] items-center">
                      <div>
                        <p className="text-white text-sm">
                          Invoice# <span className="text-red-500">*</span>
                        </p>
                      </div>
                      <div className="flex items-center">
                        <input
                          className="focus:outline-none rounded-md w-80 h-8 text-xs text-black p-2"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="flex gap-[232px] items-center">
                      <div>
                        <p className="text-white text-sm">Order Number</p>
                      </div>
                      <div className="flex items-center">
                        <input
                          className="focus:outline-none rounded-md w-80 h-8 text-xs text-black p-2"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="flex gap-[232px] items-center">
                      <div>
                        <p className="text-white text-sm">
                          Invoice Date <span className="text-red-500">*</span>
                        </p>
                      </div>
                      <div className="flex items-center">
                        <input
                          className="focus:outline-none rounded-md w-80 h-8 text-xs text-black p-2"
                          type="text"
                        />
                      </div>
                      <div>
                        <p className="text-white text-sm">Due Date</p>
                      </div>
                      <div className="flex items-center">
                        <input
                          className="focus:outline-none rounded-md w-80 h-8 text-xs text-black p-2"
                          type="text"
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="flex gap-[232px] items-center">
                      <div>
                        <p className="text-white text-sm">Salesperson</p>
                      </div>
                      <div className="flex items-center">
                        <input
                          className="focus:outline-none rounded-md w-80 h-8 text-xs text-black p-2"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="flex gap-[232px] items-center">
                      <div>
                        <p className="text-white text-sm">Subject</p>
                      </div>
                      <div className="flex items-center">
                        <input
                          className="focus:outline-none rounded-md w-80 h-8 text-xs text-black p-2"
                          type="text"
                        />
                      </div>
                    </div>

                    <table>
                      <thead>
                        <tr>
                          <th>ITEM DETAILS</th>
                          <th>QUANTITY</th>
                          <th>RATE</th>
                          <th>AMOUNT</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Type or click to select an item.</td>
                          <td>1</td>
                          <td>0</td>
                          <td>0</td>
                        </tr>
                      </tbody>
                    </table>
                    <div>
                      <div>
                        <div>
                          <p>Customer Notes</p>
                          <textarea></textarea>
                        </div>
                        <div>
                          <p>Terms and Conditions</p>
                          <textarea placeholder="Enter the terms and conditions of your business to be displayed in your transaction"></textarea>
                        </div>
                      </div>
                      <div>
                        <div>
                          <p>Sub Total</p>
                          <p>0.00</p>
                        </div>
                        <div>
                          <p>Discount</p>
                          <div>
                            <input type="text" />
                            <select>
                              <option value="">%</option>
                              <option value="">inr</option>
                            </select>
                          </div>
                          <p>0.00</p>
                        </div>
                        <div>
                          <div>
                            <input type="text" />
                            <input type="text" />
                          </div>
                          <p>0.00</p>
                        </div>
                        <hr />
                        <div>
                          <h2>Total ( ₹ ) </h2>
                          <h2>0.00</h2>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <input type="checkbox" />{" "}
                        <p>I have received the payment</p>
                      </div>
                      <div>
                        <p>Payment Mode</p>
                        <select>
                          <option value="">cash</option>
                          <option value="">Online Payment</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="text-xs border  rounded-md border-secondary text-secondary w-36 p-2">
                        save as Draft
                      </button>
                      <select>
                        <option value="">save and send</option>
                        <option value="">Save and Print</option>
                      </select>

                      <button className="text-xs border  rounded-md border-red-700 text-red-700 w-16 py-2 p-2">
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
