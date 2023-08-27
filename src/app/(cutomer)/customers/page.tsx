"use client";
import React, { useState } from "react";
import {
  LiaFileInvoiceDollarSolid,
  LiaFileInvoiceSolid,
} from "react-icons/lia";
import { MdRefresh } from "react-icons/md";
import { PiHandbag } from "react-icons/pi";
import { BsPlusSquareFill, BsFileEarmarkBarGraph } from "react-icons/bs";
import { TbReceipt } from "react-icons/tb";
import { SlOptions } from "react-icons/sl";
import {
  AiOutlineSetting,
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineSearch,
} from "react-icons/ai";
import "./page.module.css";

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
          <div className="bg-white w-56 flex flex-col gap-3">
            <div className="flex items-center bg-secondary">
              <AiOutlineHome className="w-4 h-4" />
              <p  className="text-sm" >Home</p>
            </div>
            <div className="flex">
              <AiOutlineUser className="w-4 h-4" />
              <p  className="text-sm">Customers</p>
            </div>
            <div className="flex">
              <PiHandbag className="w-4 h-4" />
              <p  className="text-sm">Items</p>
            </div>
            <div className="flex">
              <LiaFileInvoiceSolid className="w-4 h-4" />
              <p  className="text-sm">Invoices</p>
            </div>
            <div className="flex">
              <img src="/recievedpayments.svg" alt="" className="w-4 h-4" />
              <p  className="text-sm">Payments Recieved</p>
            </div>
            <div className="flex">
              <TbReceipt className="w-4 h-4" />
              <p  className="text-sm">Expenses</p>
            </div>
            <div className="flex">
              <BsFileEarmarkBarGraph className="w-4 h-4" />
              <p  className="text-sm">Reports</p>
            </div>
          </div>
          <div className="w-full">
            <div>
              <div>
                <h2>All Customers</h2>
              </div>

              <div>
                <div>
                  <span>+</span> New
                </div>
                <div>
                  <SlOptions className="w-4 h-4" />
                </div>
              </div>
            </div>
            <table className="w-full border-t border-white">
              <thead className="bg-secondary">
                <tr>
                  <th className="border-b border-white p-2 text-center">
                    Name
                  </th>
                  <th className="border-b border-white p-2 text-center">
                    Company Name
                  </th>
                  <th className="border-b border-white p-2 text-center">
                    Email
                  </th>
                  <th className="border-b border-white p-2 text-center">
                    Work Phone
                  </th>
                  <th className="border-b border-white  p-2 text-center">
                    Receivables (BCY)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white">
                  <td className="p-2 text-center">checkbusciness</td>
                  <td className="p-2 text-center">checkbusciness</td>
                  <td className="p-2 text-center">hogkidrob@meruado.uk</td>
                  <td className="p-2 text-center">₹0.00</td>
                  <td className="p-2 text-center">₹0.00</td>
                </tr>
                <tr className="border-b border-white">
                  <td className="p-2 text-center">jlo</td>
                  <td className="p-2 text-center">helo@ha.ls</td>
                  <td className="p-2 text-center">123456987</td>
                  <td className="p-2 text-center">₹0.00</td>
                  <td className="p-2 text-center">₹0.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default getStarted;
