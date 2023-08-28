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
                <h2 className="text-xl">New Customer</h2>
              </div>
            </div>

            <div className="pt-7 pl-16">
              <div>
                <form action="" className="text-[13px] text-white">
                  <div className="flex space-x-20">
                    <p>Customer Type</p>
                    <div className="flex space-x-2" >
                      <div className="flex space-x-2">
                        <input type="radio" />
                        <p>Business</p>
                      </div>
                      <div className="flex space-x-2">
                        <input type="radio" />
                        <p>Individual</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center ">
                    <p className="mr-[73px]">Primary Contact</p>
                    <div className="flex items-center gap-2">
                      <input className="rounded-md w-32 h-8 text-xs p-2" placeholder="Salutation" type="text" />
                      <input className="rounded-md w-32 h-8 text-xs p-2"  placeholder="First Name" type="text" />
                      <input className="rounded-md w-32 h-8 text-xs p-2" placeholder="Last Name" type="text" />
                    </div>
                  </div>
                  <div className="flex items-center">
                    <p>Company Name</p>
                    <div className=" flex items-center">
                      <input className="rounded-md w-80 h-8 text-xs p-2" type="text" />
                    </div>
                  </div>
                  <div>
                    <p>Customer Display Name*</p>
                    <div>
                      <input type="text" />
                    </div>
                  </div>
                  {/* <div>
                    <p>Currency</p>
                    <div>
                      <input type="text" />
                    </div>
                  </div> */}

                  <div>
                    <p>Customer Email</p>
                    <div>
                      <input type="email" />
                    </div>
                  </div>
                  <div>
                    <p>Customer Phone</p>
                    <div>
                      <input placeholder="Work Phone" type="number" />
                      <input placeholder="Mobile" type="number" />
                    </div>
                  </div>
                  <div>
                    <div>
                      <h3>Billing Address</h3>
                      <div>
                        <p>Attention</p>
                        <div>
                          <input placeholder="" type="text" />
                        </div>
                      </div>
                      <div>
                        <p>Country / Region</p>
                        <div>
                          <input placeholder="" type="text" />
                        </div>
                      </div>
                      <div>
                        <p>Address</p>
                        <div>
                          <input placeholder="street 1" type="text" />
                          <input placeholder="street 2" type="text" />
                        </div>
                      </div>
                      <div>
                        <p>City</p>
                        <div>
                          <input placeholder="" type="text" />
                        </div>
                      </div>
                      <div>
                        <p>State</p>
                        <div>
                          <input placeholder="" type="text" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <h3>Shipping Address</h3>
                        <div>
                          <PiCopySimple />
                          <p>Copy billing address</p>
                        </div>
                      </div>

                      <div>
                        <p>Attention</p>
                        <div>
                          <input placeholder="" type="text" />
                        </div>
                      </div>
                      <div>
                        <p>Country / Region</p>
                        <div>
                          <input placeholder="" type="text" />
                        </div>
                      </div>
                      <div>
                        <p>Address</p>
                        <div>
                          <input placeholder="street 1" type="text" />
                          <input placeholder="street 2" type="text" />
                        </div>
                      </div>
                      <div>
                        <p>City</p>
                        <div>
                          <input placeholder="" type="text" />
                        </div>
                      </div>
                      <div>
                        <p>State</p>
                        <div>
                          <input placeholder="" type="text" />
                        </div>
                      </div>
                    </div>
                    <div></div>
                  </div>
                  <div>
                    <button type="submit">Save</button>
                    <button type="reset">Cancel</button>
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
